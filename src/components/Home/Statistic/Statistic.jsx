import { useEffect, useState } from "react";
import axios from "axios";
import CountUp from "react-countup";
import { useTranslation } from "react-i18next";
import "./Statistic.css";

function Statistic() {

  const { t } = useTranslation();
  const [statistic] = t("statistic", { returnObjects: true });


  const [stats, setStats] = useState({
    years: 0,
    repos: 0,
    languages: 0,
    commits: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const username = "shahbozshirinboyev";
    const token = import.meta.env.VITE_GITHUB_TOKEN;

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json",
      },
    };

    const fetchWithRetry = async (url, retries = 5, delay = 1500) => {
      for (let i = 0; i < retries; i++) {
        const res = await axios.get(url, headers);
        if (res.status === 202) {
          await new Promise((resolve) => setTimeout(resolve, delay));
        } else {
          return res.data;
        }
      }
      return null;
    };

    const fetchData = async () => {
      try {
        const userRes = await axios.get(`https://api.github.com/users/${username}`, headers);
        const createdAt = new Date(userRes.data.created_at);
        const currentYear = new Date().getFullYear();
        const years = currentYear - createdAt.getFullYear();
        const repos = userRes.data.public_repos;

        const reposRes = await axios.get(`https://api.github.com/users/${username}/repos?per_page=100`, headers);
        const reposData = reposRes.data;

        const languagesSet = new Set();
        reposData.forEach((repo) => {
          if (repo.language) languagesSet.add(repo.language);
        });

        let totalCommits = 0;
        await Promise.all(
          reposData.map(async (repo) => {
            try {
              const stats = await fetchWithRetry(
                `https://api.github.com/repos/${username}/${repo.name}/stats/contributors`
              );
              if (Array.isArray(stats)) {
                const userStats = stats.find((c) => c.author?.login === username);
                if (userStats) {
                  totalCommits += userStats.total;
                }
              }
            } catch (e) {}
          })
        );

        setStats({
          years,
          repos,
          languages: languagesSet.size,
          commits: totalCommits,
        });

        setIsLoading(false);
      } catch (err) {
        console.error("Xatolik:", err);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='container mx-auto px-2 tablet:px-0 grid grid-cols-2 gap-4 laptop:grid-cols-4 mt-10'>
      <StatCard number={stats.years} label={statistic.years} isLoading={isLoading} />
      <StatCard number={stats.repos} label={statistic.repos} isLoading={isLoading} />
      <StatCard number={stats.languages} label={statistic.languages} isLoading={isLoading} />
      <StatCard number={stats.commits} label={statistic.commits} isLoading={isLoading} />
    </div>
  );
}

function StatCard({ number, label, isLoading }) {
  return (
    <div className='flex items-center justify-start gap-2'>
      <p className='text-3xl tablet:text-4xl laptop:text-5xl font-extrabold leading-10 number__font'>
        {isLoading ? (
          <CountUp end={number} duration={2} start={0} />
        ) : (
          <CountUp end={number} duration={2} />
        )}
      </p>
      <p className='leading-5 font-semibold opacity-90 text-xs table:text-md laptop:text-lg'>
        {label.split(" ").slice(0, -1).join(" ")}<br />
        {label.split(" ").slice(-1)}
      </p>
    </div>
  );
}

export default Statistic;
