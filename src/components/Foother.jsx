function Foother() {
  return (
    <div className='c_container'>

      <div className="mockup-code w-full">
        <pre data-prefix="$"><code>connecting...</code></pre>
        <pre data-prefix=">"><code>downloading footer component...</code></pre>
        <pre data-prefix=">" className="text-warning"><code>warning: slow internet detected</code></pre>
        <pre data-prefix=">" className="text-error"><code>error: foother not found on server (404)</code></pre>
        <pre data-prefix=">" className="text-success"><code>suggestion: try again with better Wi-Fi</code></pre>
      </div>

      {/* <div className='flex flex-col justify-center items-center'>
        <div className="mockup-code w-full">
          <pre data-prefix="1"><code>Connecting...</code></pre>
          <pre data-prefix="2"><code>Downloading footer component...</code></pre>
          <pre data-prefix="3" className="bg-warning/30"><code>Warning: Slow internet detected</code></pre>
          <pre data-prefix="4" className="bg-error/30"><code>Error: Foother not found on server (404)</code></pre>
          <pre data-prefix="5" className="bg-success/30"><code>Suggestion: Try again with better Wi-Fi</code></pre>
        </div>
      </div> */}

    </div>
  )
}

export default Foother