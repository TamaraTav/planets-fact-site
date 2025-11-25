import Planet from "./components/Planet";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "./components/Header";

function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsSmallScreen(mediaQuery.matches);

    const handleScreenChange = (e: MediaQueryListEvent) => {
      setIsSmallScreen(e.matches);
    };

    mediaQuery.addEventListener("change", handleScreenChange);

    return () => {
      mediaQuery.removeEventListener("change", handleScreenChange);
    };
  }, []);
  return (
    <div className="min-h-screen bg-[url('/assets/background-stars.svg')] bg-space">
      <Header isSmallScreen={isSmallScreen} />

      <Routes>
        <Route path="/" element={<Planet isSmallScreen={isSmallScreen} />} />

        <Route
          path=":planetName"
          element={<Planet isSmallScreen={isSmallScreen} />}
        />
      </Routes>
    </div>
  );
}

export default App;
