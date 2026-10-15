import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import "./App.css";

// Disable GSAP's lag smoothing clock-clamping on initial page load / refresh
gsap.ticker.lagSmoothing(0);

function App() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(".box", {
        x: 500,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "none",
        force3D: true,
      });
    },
    { scope: container },
  );

  useLayoutEffect(() => {
    console.log("render use layout effect");
  }, []);

  useEffect(() => {
    console.log("render use effect");
  }, []);

  return (
    <div ref={container} className="p-10">
      <div
        className="box block h-12 w-12 bg-red-400"
        style={{ willChange: "transform" }}
      />
    </div>
  );
}

export default App;

