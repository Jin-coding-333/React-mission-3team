import React, { useState } from 'react';
import './JinhanMain.css';

function JinhanMain() {
  const [inputText, setInputText] = useState('');
  const [responseText, setResponseText] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    setLoading(true);
    setResponseText('');

    try {
      const apiKey = '';
      const url = 'https://api.openai.com/v1/completions';

      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'text-davinci-003',
          prompt: inputText,
          max_tokens: 100,
        }),
      };

      const response = await fetch(url, options);
      const data = await response.json();

      if (data.choices && data.choices.length > 0) {
        setResponseText(data.choices[0].text.trim());
      } else {
        setResponseText('Fake였습니다.');
      }
    } catch (error) {
      setResponseText('오류가 발생했습니다. 다시 시도해주세요.');
    }

    setLoading(false);
  };

  return (
    <main>
      <div className='mainContent'>
        <div>
          <h1>진한</h1>
          <h2>사는 곳 : 부산</h2>
          <h2>MBTI : INFJ</h2>
          <h2>...</h2>
        </div>

        <div className='chatSection'>
          <h2>저에 대해 ChatGPT에게 질문해보세요!</h2>
          <textarea
            className='inputArea'
            rows='4'
            placeholder='질문을 입력하세요...'
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button className='sendButton' onClick={handleSend} disabled={loading}>
            {loading ? '응답을 기다리는 중...' : '질문 보내기'}
          </button>

          <div className='responseArea'>
            <h3>ChatGPT의 응답:</h3>
            <p>{responseText}</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default JinhanMain;
