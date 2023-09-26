import { createContext, useState, useEffect } from "react";

export const isPlayingContext = createContext(null);

function Context({ children }) {
  const [isPlaying, setIsPlaying] = useState();
  const [audio, setAudio] = useState(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(typeof window !== "undefined" && window.innerWidth > 1024);

    function handleResize() {
      setIsDesktop(window.innerWidth > 1024);
    }

    if (typeof window !== 'undefined') {
      handleResize();
    }

    window.addEventListener('resize', handleResize);

    let audioElement = new Audio("./bso_jimenagonzalezin.mp3");
    audioElement.classList.add('bso_audio');

    setAudio(audioElement);

    const handleAudio = () => {
      setIsPlaying(false);
    };

    audioElement.addEventListener("ended", handleAudio);
    return () => {
      audioElement.removeEventListener("ended", handleAudio);
      window.removeEventListener('resize', handleResize);
    };
  }, [isDesktop]);

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
