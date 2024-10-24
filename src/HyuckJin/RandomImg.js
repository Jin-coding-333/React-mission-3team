import React, { useState, useEffect } from 'react';

function RandomImage() {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    fetch('https://picsum.photos/200')
      .then(response => setImageUrl(response.url));
  }, []);

  return (
    <div>
      <h2>랜덤 이미지</h2>
      <img src={imageUrl} alt="랜덤 이미지" />
    </div>
  );
}

export default RandomImage;
