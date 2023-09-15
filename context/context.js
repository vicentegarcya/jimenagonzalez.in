import { createContext, useState, useEffect } from "react";

export const isPlayingContext = createContext(null);

function Context({ children }) {
  const [isPlaying, setIsPlaying] = useState();
  const [audio, setAudio] = useState(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(typeof window !== "undefined" && window.innerWidth > 768);

    let audioElement = new Audio("./bso_jimenagonzalezin.mp3");
    audioElement.classList.add('bso_audio');

    setAudio(audioElement);

    const handleAudio = () => {
      setIsPlaying(false);
    };

    audioElement.addEventListener("ended", handleAudio);
    return () => {
      audioElement.removeEventListener("ended", handleAudio);
    };
  }, []);

  const soundHandler = () => {
    audio.paused ? audio.play() : audio.pause();

    setIsPlaying(!isPlaying);
  };

  return (
    <isPlayingContext.Provider value={{ isPlaying, setIsPlaying, audio, setAudio, soundHandler, isDesktop }}>
      {children}
    </isPlayingContext.Provider>
  );
}

export default Context;
