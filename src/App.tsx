import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { setTimeout } from 'timers';
import "./styles.css";

const id = "dQw4w9WgXcQ";

const App:React.FC = () => {

  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    setTimeout(() => {
      window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
    }, 3000);
    
  })

  return (
    <div className="App">
      <div className="app-content">
        <h1 className="heading">Rick Roll</h1>
        <h1 className="subheading">The #1 Internet Joke/Meme</h1>

        <div className="video-player-wrapper">
          <iframe
              ref={iframeRef}
              className="video-player"
              title="video"
              src={`https://www.youtube.com/embed/${id}?showinfo=0&enablejsapi=1&origin=https://creativity-matters.netlify.app`}
              frameBorder="0"
              allowFullScreen
              allow={"autoplay"}
              
            >
          </iframe>
        </div>
        
      </div>
    </div>
  );
}

export default App;
