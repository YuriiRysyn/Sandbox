import React from 'react';
import TypeScriptDev  from './TypeScriptDev.tsx';

import { Parallax } from 'react-parallax';

import './App.scss'

const cssClasses = 'app app--active';
const styleObj = {
  backgroundColor: 'yellow',
}
const f = () => {
  return 242 * 12;
}

// function App () {
//   return (
//     <>
//     <TypeScriptDev />
//     <div className={cssClasses + ' asd'} style = {styleObj}>
//        Some text
//        <footer>Footer</footer>
//        <label htmlFor="firstname">Firs name</label>
//        <input type="text" id="firstname"/>
//     </div>
//     </>
//   );
// }



function App () {
  const image1 =
    "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
  const image2 =
    "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001";
  const image3 =
    "https://img00.deviantart.net/2bd0/i/2009/276/c/9/magic_forrest_wallpaper_by_goergen.jpg";
  const image4 =
    "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg";

    const inlineStyles = {
      backgroundColor: '#fff',
      left: '50%',
      top: '50%',
      position: 'absolute',
      padding: '20px',
      transform: 'translate(-50%, -50%)'
    }
    
  return (
    <div className="App">
      <Parallax bgImage={image1} strength={700}>
        <div className='Parallax Parallax__content-container'>
          <div style={inlineStyles}>
              HTML text inside Paralax
          </div>
        </div>
      </Parallax>

      <h1>| | |</h1>
      <Parallax bgImage={image2} blur={{min:20, max: -20}}>
        <div className='Parallax Parallax__content-container'>
          <div style={inlineStyles}>
              Dinamic Blur
          </div>
        </div>
      </Parallax>

      <h1>| | |</h1>
      <Parallax bgImage={image3} strength={-200}>
        <div className='Parallax Parallax__content-container'>
          <div style={inlineStyles}>
              Reverse Direction
          </div>
        </div>
      </Parallax>

      <h1>| | |</h1>
      <Parallax 
        bgImage={image4} 
        strength={200} 
        renderLayer={percentage => (
            <div
              style={{
                position: 'absolute',
                width: '400px',
                height: '400px',
                background: `rgba(255, 123, 23, ${percentage * 1})`,
                borderRadius: '50%',
                left: '50%',
                top: '50%',
                transform: `translate(-50%, -50%) scale(${percentage * 3})`
              }}
            >
            </div>
        ) }
      >
        <div className='Parallax Parallax__content-container'>
          <div style={inlineStyles}>
              Reverse Direction
          </div>
        </div>
      </Parallax>

      <div style={{height: '100vh'}}></div>
    </div>
  );
}

export default App;