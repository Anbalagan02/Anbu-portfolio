import React from "react";
import Typewriter from "typewriter-effect";

function App() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Front end developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default App;
