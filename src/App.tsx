import React, { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import "./styles.css";
import Rickroll from "./rickroll.gif";
import Rickroll2 from "./rickroll2.gif";

const id = "dQw4w9WgXcQ";

const App: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [mp3Url, setMp3Url] = useState<string>("");

  // const rickrollMusic new Audio("./");
  const playAudio = async () => {
    var audio = new Audio(mp3Url);

    try {
      await audio.play();
      console.log("Playing...");
    } catch (err) {
      console.log("Failed to play..." + err);
    }
  };

  const getSong = async () => {
    const res = await import("./rickroll.mp3" as any);
    setMp3Url(res.default || "");
  };

  useEffect(() => {
    getSong();
    playAudio();
  });

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setTimeout(() => {
          window.location.replace(
            "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          );
        }, 3000);
      }
    });
  });

  return (
    <div className="App">
      <div className="app-content">
        <div className="video-player-wrapper" style={{ flexWrap: "wrap" }}>
          <img className="rickroll-gif" src={Rickroll} alt="rickroll" />
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
