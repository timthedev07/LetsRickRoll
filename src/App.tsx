import React from 'react';
import "./styles.css";

const id = "dQw4w9WgXcQ";

const App:React.FC = () => {

  return (
    <div className="App">
      <div className="app-content">
        <h1 className="heading">Rick Roll</h1>
        <h1 className="subheading">The #1 Internet Joke/Meme</h1>

        <div className="video-player-wrapper">
          <iframe
              className="video-player"
              title="video"
              src={`https://www.youtube.com/embed/${id}?showinfo=0&enablejsapi=1&origin=https://creativity-matters.netlify.app&autoplay=1`}
              frameBorder="0"
              allowFullScreen
              
            >
          </iframe>
        </div>
        
      </div>
    </div>
  );
}

export default App;
