import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  const footer = t("footer", { returnObjects: true });

  return (
    <div className='c_container'>
      <div className="mockup-code w-full">
        <pre data-prefix="$"><code className="text-xs tablet:text-sm laptop:text-md">{footer.connecting}</code></pre>
        <pre data-prefix=">"><code className="text-xs tablet:text-sm laptop:text-md">{footer.downloading}</code></pre>
        <pre data-prefix=">" className="text-warning text-xs tablet:text-sm laptop:text-md"><code>{footer.warning}</code></pre>
        <pre data-prefix=">" className="text-error text-xs tablet:text-sm laptop:text-md"><code>{footer.error}</code></pre>
        <pre data-prefix=">" className="text-success text-xs tablet:text-sm laptop:text-md"><code>{footer.suggestion}</code></pre>
      </div>
    </div>
  )
}

export default Footer