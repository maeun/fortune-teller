import React, { useState } from 'react';

export default function ShareButton({ text }) {
  const [isSharing, setIsSharing] = useState(false);
  const [showCopied, setShowCopied] = useState(false);
  const shareText = `${text}\n\nTry your own fortune at: https://your-site-url.web.app`;

  const handleShare = async () => {
    setIsSharing(true);
    
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
      // Fallback: Copy to clipboard
      try {
        await navigator.clipboard.writeText(shareText);
        setShowCopied(true);
        setTimeout(() => setShowCopied(false), 2000);
      } catch (err) {
        console.error('Copy failed:', err);
      }
    }
    
    setIsSharing(false);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareText);
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
    } catch (err) {
      console.error('Copy failed:', err);
    }
  };

  return (
    <div className="max-w-sm mx-auto">
      <div className="text-center mb-6">
        <h3 className="text-lg font-bold text-white mb-2">
          Share Your Fortune
        </h3>
        <p className="text-gray-300 text-sm">
          Spread the magic with your friends!
        </p>
      </div>

      {/* Main Share Button */}
      <div className="mb-6">
        <button
          onClick={handleShare}
          disabled={isSharing}
          className="w-full py-4 px-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-300 relative overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative flex items-center justify-center space-x-2">
            {isSharing ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>Sharing...</span>
              </>
            ) : (
              <>
                <span className="text-xl">📤</span>
                <span>Share My Fortune</span>
                <span className="text-xl">✨</span>
              </>
            )}
          </div>
        </button>
      </div>

      {/* Copy Button with Status */}
      <div className="mb-4">
        <button
          onClick={copyToClipboard}
          className="w-full py-3 px-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl hover:bg-white/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-300/50 text-white font-medium shadow-md hover:shadow-lg"
        >
          <div className="flex items-center justify-center space-x-2">
            <span className="text-lg">📋</span>
            <span>{showCopied ? 'Copied!' : 'Copy to Clipboard'}</span>
            {showCopied && <span className="text-green-400">✓</span>}
          </div>
        </button>
      </div>

      {/* Social Media Links */}
      <div className="space-y-3">
        <p className="text-center text-gray-300 text-sm font-medium mb-4">
          Or share directly on social media
        </p>
        
        <div className="grid grid-cols-2 gap-4">
          {/* Twitter */}
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center py-3 px-4 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            <span className="text-lg mr-2">🐦</span>
            <span>Twitter</span>
          </a>

          {/* Facebook */}
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=https://fortune-teller-fd566.web.app`}
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <span className="text-lg mr-2">📘</span>
            <span>Facebook</span>
          </a>
        </div>

        {/* Additional Social Links */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          {/* WhatsApp */}
          <a
            href={`https://wa.me/?text=${encodeURIComponent(shareText)}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center py-3 px-4 bg-green-500 hover:bg-green-600 text-white font-medium rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-300"
          >
            <span className="text-lg mr-2">💬</span>
            <span>WhatsApp</span>
          </a>

          {/* Telegram */}
          <a
            href={`https://t.me/share/url?url=https://your-site-url.web.app&text=${encodeURIComponent(text)}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center py-3 px-4 bg-blue-400 hover:bg-blue-500 text-white font-medium rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-200"
          >
            <span className="text-lg mr-2">✈️</span>
            <span>Telegram</span>
          </a>
        </div>
      </div>

      {/* Success Message */}
      {showCopied && (
        <div className="mt-4 p-3 bg-green-100 border border-green-200 rounded-xl text-center">
          <div className="flex items-center justify-center space-x-2 text-green-700">
            <span className="text-lg">✨</span>
            <span className="font-medium">Fortune copied to clipboard!</span>
            <span className="text-lg">✨</span>
          </div>
        </div>
      )}
    </div>
  );
}