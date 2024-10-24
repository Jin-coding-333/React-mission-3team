import { React, useState, useEffect } from "react";
import './JinhanHeader.css';

function JinhanHeader() {
  const [img, setImg] = useState();

  useEffect(() => {
    fetch('https://picsum.photos/1400/1200')
      .then(response => setImg(response.url));
  }, []);


  return (
    <header>
      <div id='headerContent'>
        <img src={img} />
        <div>이미지</div>
      </div>
    </header>
  );
}

export default JinhanHeader;
