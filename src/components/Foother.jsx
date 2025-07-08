function Foother() {
  return (
    <div className='container mx-auto px-4 tablet:px-0'>
      <div className='flex flex-col justify-center items-center'>
        <div className="mockup-code w-full">
          <pre data-prefix="1"><code>Connecting...</code></pre>
          <pre data-prefix="2"><code>Downloading footer component...</code></pre>
          <pre data-prefix="3" className="bg-warning/30"><code>Warning: Slow internet detected</code></pre>
          <pre data-prefix="4" className="bg-error/30"><code>Error: Foother not found on server (404)</code></pre>
          <pre data-prefix="5" className="bg-success/30"><code>Suggestion: Try again with better Wi-Fi</code></pre>
        </div>
      </div>
    </div>
  )
}

export default Foother