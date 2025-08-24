import FaultyTerminal from "./FaultyTerminal";
import './App.css';
import Navbar from "./navbar";

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative", overflow: "hidden" }}>
      <Navbar />
      <FaultyTerminal
        scale={1.5}
        gridMul={[2, 1]}
        digitSize={2.3}
        timeScale={0.5}
        pause={false}
        scanlineIntensity={0.5}
        glitchAmount={1}
        flickerAmount={1}
        noiseAmp={1}
        chromaticAberration={0}
        dither={0}
        curvature={0.1}
        tint="#00ffcc"
        mouseReact={true}
        mouseStrength={0.5}
        pageLoadAnimation={false}
        brightness={0.6}
      />
      

      {/* Overlay content, start below navbar (e.g., 80px) */}
      <div style={{
        position: "absolute",
        top: "80px", // Adjust to match navbar height
        left: 0,
        width: "100%",
        height: "calc(100% - 80px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontSize: "2rem",
        fontFamily: "monospace",
        pointerEvents: "none",
        zIndex: 10
      }}>
        MAIN CONTENT HERE
      </div>
    </div>
  );
}

export default App;