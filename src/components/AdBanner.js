import React, { useEffect } from 'react';

export default function AdBanner() {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("Adsense error:", e);
    }
  }, []);

  return (
    <div className="my-8 text-center">
      <ins
        className="adsbygoogle"
        style={{ display: 'block', width: '100%', height: '100px' }}
        data-ad-client="ca-pub-3472536634074099"
        data-ad-slot="5570572596"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
}
