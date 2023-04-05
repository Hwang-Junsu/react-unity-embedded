import "./App.css";
import {Unity, useUnityContext} from "react-unity-webgl";

function App() {
  const {unityProvider, isLoaded, loadingProgression} = useUnityContext({
    loaderUrl: "build/build.loader.js",
    dataUrl: "build/build.data",
    frameworkUrl: "build/build.framework.js",
    codeUrl: "build/build.wasm",
  });

  const loadingPercentage = Math.round(loadingProgression * 100);

  return (
    <main className="container">
      <section className="title_box">
        <header className="title">Physics 2D Game</header>
        <h2 className="subtitle">Flappy Bird & Angry Bird</h2>
      </section>
      {!isLoaded && (
        <div>
          <p className="loading">Loading... ({loadingPercentage}%)</p>
        </div>
      )}
      <Unity unityProvider={unityProvider} style={{width: 1100, height: 600}} />
    </main>
  );
}

export default App;
