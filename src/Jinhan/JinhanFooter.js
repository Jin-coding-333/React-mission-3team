import './JinhanFooter.css';
import React, { useState, useEffect } from 'react';



function JinhanFooter() {

    const [img, setImg] = useState();
  
    useEffect(() => {
      fetch('https://picsum.photos/500/500')
        .then(response => setImg(response.url));
    }, []);

    const [img1, setImg1] = useState();
  
    useEffect(() => {
      fetch('https://picsum.photos/500/500')
        .then(response => setImg1(response.url));
    }, []);
    
    const [img12, setImg12] = useState();
  
    useEffect(() => {
      fetch('https://picsum.photos/500/500')
        .then(response => setImg12(response.url));
    }, []);
  
  return (
    <footer>
      <div className='footerContent'>
        <img src={img} />
        <img src={img1} />
        <img src={img12} />
      </div>
    </footer>
  )
}

export default JinhanFooter;