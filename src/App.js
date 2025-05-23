// src/App.js
import React, { useState } from 'react';
import InputForm from './components/InputForm';
import { getFortune } from './services/openai';
import { saveFortune } from './firebase';
import ShareButton from './components/ShareButton'; // 추가


function App() {
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (formData) => {
    setLoading(true);
    try {
      const fortune = await getFortune(formData);
      setResult(fortune);
      await saveFortune(formData, fortune); // 🔥 저장
    } catch (err) {
      console.error('Error:', err);
      setResult('Something went wrong. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <InputForm onSubmit={handleSubmit} />
      {loading && <p>🔄 Generating your fortune...</p>}
{result && (
  <div style={{ marginTop: '2rem', whiteSpace: 'pre-wrap' }}>
    <h3>🧾 Your Fortune</h3>
    <p>{result}</p>
    <ShareButton text={result} />  {/* 공유 버튼 추가 */}
  </div>
)}
    </div>
  );
}

export default App;
