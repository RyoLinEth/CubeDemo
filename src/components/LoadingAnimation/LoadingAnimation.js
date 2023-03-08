import React, { useState, useEffect } from 'react';
import './LoadingAnimation.css';
import vid from './ExampleVideo.mp4'

function LoadingAnimation() {
  const [showFilm, setShowFilm] = useState(false);
  const [loadingFinished, setLoadingFinished] = useState(false);

  useEffect(() => {
    // Simulate a delay of 2 seconds before showing the film
    const timer = setTimeout(() => {
      setShowFilm(true);
    }, 2000);

    // Clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  function handleSkip() {
    // If the film is already playing, just hide the film container
    if (loadingFinished) {
      setShowFilm(false);
    }
    // Otherwise, hide the loading animation and show the film container
    else {
      setLoadingFinished(true);
      setShowFilm(false);
    }
  }

  // Render the loading animation until the film is ready to be shown
  if (!showFilm && !loadingFinished)  {
    return (
      <div className="loading-animation">
        {/* Insert your loading animation code here */}
      </div>
    );
  }

  // Render the film once it's ready to be shown
  return (
    <div className="film-container">
      <iframe
        src={vid}
        title="Rick Astley - Never Gonna Give You Up"
        allow="autoplay"
        muted
        onEnded={() => {
          console.log("YES")
          setLoadingFinished(true)
          setShowFilm(false)
        }}></iframe>
      <button className="skip-button" onClick={handleSkip}>Skip &gt;&gt;&gt;</button>
    </div>
  );
}

export default LoadingAnimation;