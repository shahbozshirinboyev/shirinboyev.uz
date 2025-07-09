import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  const footer = t("footer", { returnObjects: true });

  return (
    <div className='c_container'>
      <div className="mockup-code w-full">
        <pre data-prefix="$"><code>{footer.connecting}</code></pre>
        <pre data-prefix=">"><code>{footer.downloading}</code></pre>
        <pre data-prefix=">" className="text-warning"><code>{footer.warning}</code></pre>
        <pre data-prefix=">" className="text-error"><code>{footer.error}</code></pre>
        <pre data-prefix=">" className="text-success"><code>{footer.suggestion}</code></pre>
      </div>
    </div>
  )
}

export default Footer