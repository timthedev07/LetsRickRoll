import React, { useRef, useEffect, useState } from "react";
import Sound from "react-sound";
import "./styles.css";
import Rickroll2 from "./rickroll2.gif";

const id = "dQw4w9WgXcQ";

const App: React.FC = () => {
  const [visit, setVisit] = useState<boolean>(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [mp3Url, setMp3Url] = useState<string>("");
  const [play, setPlay] = useState<boolean>(false);

  const getSong = async () => {
    const res = await import("./rickroll.mp3" as any);
    setMp3Url(res.default || "");
  };

  useEffect(() => {
    getSong();
  });

  return (
    <div className="App">
      <div className="app-content">
        {!visit ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
              zIndex: 100000,
            }}
          >
            <button
              onClick={() => {
                setVisit(true);
                setPlay(true);
              }}
              style={{
                width: "280px",
                height: "100px",
                borderRadius: "7px",
                outline: "none",
                fontSize: "25px",
                backgroundColor: "#424242",
                color: "white",
                border: "none",
                boxShadow: "0 0 5px gray",
              }}
            >
              Check this out!
            </button>
          </div>
        ) : null}
        <Sound
          url={mp3Url}
          playStatus={play ? "PLAYING" : "STOPPED"}
          loop
          autoLoad
        />
        <div className="video-player-wrapper" style={{ flexWrap: "wrap" }}>
          <img className="rickroll-gif" src={Rickroll2} alt="rickroll" />
        </div>
        <h1 className="heading">Rick Roll</h1>
        <h1 className="subheading">
          The #1 Internet Joke/Meme(don't tell others this is a rick roll!)
        </h1>
        <h3 className="subsubheading">
          Despite being a joke, the song itself is actually quite nice
        </h3>
        <div className="video-player-wrapper">
          <iframe
            ref={iframeRef}
            className="video-player"
            title="video"
            src={`https://www.youtube.com/embed/${id}?showinfo=0&enablejsapi=1&origin=https://creativity-matters.netlify.app`}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default App;
