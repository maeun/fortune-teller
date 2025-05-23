// src/components/ShareButton.js
import React from 'react';

export default function ShareButton({ text }) {
  const shareText = `${text}\n\nTry your own fortune at: https://your-site-url.web.app`;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: '🔮 My Fortune',
          text: shareText,
          url: 'https://your-site-url.web.app',
        });
      } catch (err) {
        console.error('Sharing failed:', err);
      }
    } else {
      // Fallback (PC)
      alert("Sharing is only supported on mobile browsers.");
    }
  };

  return (
    <div style={styles.container}>
      <button onClick={handleShare} style={styles.button}>
        📤 Share My Fortune
      </button>

      <p style={styles.fallbackText}>
        Or copy & share on SNS manually!
      </p>

      <div style={styles.linkBox}>
        <a
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`}
          target="_blank" rel="noopener noreferrer"
          style={styles.link}
        >
          🐦 Twitter
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=https://fortune-teller-fd566.web.app`}
          target="_blank" rel="noopener noreferrer"
          style={styles.link}
        >
          📘 Facebook
        </a>
      </div>
    </div>
  );
}

const styles = {
  container: { marginTop: '1rem', textAlign: 'center' },
  button: {
    padding: '10px 16px',
    backgroundColor: '#00bcd4',
    color: '#fff',
    fontSize: '16px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer'
  },
  fallbackText: { marginTop: '8px', color: '#666', fontSize: '14px' },
  linkBox: { marginTop: '8px', display: 'flex', justifyContent: 'center', gap: '16px' },
  link: { textDecoration: 'none', color: '#2196f3', fontWeight: 'bold' }
};
