const confetti = require("canvas-confetti");
import { useRef, useEffect } from "react";

export default function Confetti({pageWhereLoaded}) {
  let canvasRef = useRef();
  let myCanvas;

  const confettiColorsHome=["#98E3D8", "#E5B0E4", "#93D5ED", "#D6E0BB", "#FFBBCF"];
  const confettiColorsMe=["#AFE2D3", "#BCBFEA", "#C0EABA", "#E6CDB4", "#CAE8B7", "#BCBFEA"];


  console.log(pageWhereLoaded);

  useEffect(() => {
    myCanvas = canvasRef.current;
  }, []);

  let myConfetti = confetti.create(myCanvas, {
    resize: true
  });

  myConfetti({
    particleCount: 180,
    spread: 80,
    origin: {
        x: 0.5,
        y: 0.6
    },
    ticks: 300,
    colors: pageWhereLoaded == 'home' ? confettiColorsHome : confettiColorsMe
  });

  setTimeout(() => {
    myConfetti.reset();
  }, 3000);

  return (
    <>
      <canvas ref={canvasRef} id="canvas" width="390" height="300">Tu navegador no admite el elemento &lt;canvas&gt;.</canvas>
    </>
  );
}
