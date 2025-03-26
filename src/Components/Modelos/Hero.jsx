import React, { useState, useRef, useEffect } from "react";
import {
  AirbagsIcon,
  RoofIcon,
  RadioIcon,
  AdasIcon,
  StarsIcon,
} from "../Icons/HeroIcons";

const ModelHero = ({ title, tagline, videoSrc, heroInfo }) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasVideoError, setHasVideoError] = useState(false);
  const videoRef = useRef(null);

  // Reset video state when videoSrc changes (user selects different car)
  useEffect(() => {
    if (videoRef.current) {
      // Stop any current playback
      videoRef.current.pause();

      // Reset loading state
      setIsVideoLoaded(false);
      setIsPlaying(false);
      setHasVideoError(false);

      // Force the video element to reload
      videoRef.current.load();
    }
  }, [videoSrc]);

  const renderIcon = (icon, className) => {
    const icons = {
      stars: <StarsIcon className={className} />,
      airbag: <AirbagsIcon className={className} />,
      adas: <AdasIcon className={className} />,
      radio: <RadioIcon className={className} />,
      roof: <RoofIcon className={className} />,
    };

    return icons[icon] || <span className={className}>🔧</span>;
  };

  const handlePlayClick = () => {
    if (videoRef.current && !hasVideoError) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        // Attempt to play and catch any errors (browsers may block autoplay)
        const playPromise = videoRef.current.play();

        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              console.log("Video playback started successfully");
              setIsPlaying(true);
            })
            .catch((error) => {
              console.error("Play was prevented:", error);
              setIsPlaying(false);
            });
        }
      }
    } else {
      console.warn("Video reference not available or has error");
    }
  };

  const handleVideoLoaded = () => {
    console.log("Video loaded successfully");
    setIsVideoLoaded(true);
    setHasVideoError(false);
  };

  const handleVideoError = (e) => {
    console.error("Video failed to load:", videoSrc, e);
    setIsVideoLoaded(false);
    setHasVideoError(true);
  };

  // Determine if we should show the video element
  const showVideo = videoSrc && !hasVideoError;

  return (
    <div className="relative w-full h-[calc(100vh-55px)] md:h-[calc(100vh-20px)] overflow-hidden">
      {/* Video/Image Background */}
      <div className="absolute inset-0 w-full h-full bg-black">
        {/* Fallback image - always rendered */}
        {/* <img
          src={image}
          alt="Video fallback"
          className={`w-full h-full object-cover transition-opacity duration-700 ${
            showVideo ? "opacity-0" : "opacity-100"
          }`}
        /> */}

        {/* Video element - only rendered if we have a valid source */}
        {showVideo && (
          <div className="absolute inset-0 w-full">
            <video
              ref={videoRef}
              className={`w-full h-full object-cover transition-opacity duration-700 ${
                isVideoLoaded ? "opacity-60" : "opacity-0"
              }`}
              muted
              playsInline
              loop
              preload="auto"
              key={videoSrc.desktop + videoSrc.mobile} // Add key to force re-render when sources change
              onLoadedData={handleVideoLoaded}
              onError={handleVideoError}>
              {/* Provide multiple source formats for better compatibility */}
              <source
                src={videoSrc.mobile}
                type="video/mp4"
                className="md:hidden"
              />
              <source
                src={videoSrc.desktop}
                type="video/mp4"
                className="hidden md:block"
              />
              {/* You can add more source formats if available */}
              {/* <source src={videoSrc.replace('.mp4', '.webm')} type="video/webm" /> */}
              Your browser does not support the video tag.
            </video>
          </div>
        )}

        {/* Play button overlay - only shown if video is available */}
        {!hasVideoError && (
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <button
              onClick={handlePlayClick}
              className="w-20 h-20 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              aria-label={isPlaying ? "Pause video" : "Play video"}>
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                {isPlaying ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 text-gray-900">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 5.25v13.5m-7.5-13.5v13.5"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 text-gray-900 ml-1">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                    />
                  </svg>
                )}
              </div>
            </button>
          </div>
        )}
      </div>
      {/* Text Overlay */}
      <div className="mt-[56px] pb-[56px] md:pb-0 h-full md:h-auto absolute bg-black bg-opacity-50 top-0 md:top-auto bottom-0 left-0 right-0 flex p-2 text-white mx-auto z-10 pointer-events-none">
        <div className="max-w-screen-2xl mx-auto w-full py-4 px-4 md:px-20">
          <div className="relative flex flex-col lg:flex-row justify-between gap-5 h-full py-4 pointer-events-auto">
            <div className="flex flex-col px-4 relative">
              {/* Decorative border line */}
              <div className="absolute left-0 h-full w-0.5 bg-gray-500"></div>
              <h2 className="font-light mb-1">All-new</h2>
              <h1 className="font-bold">{title}</h1>
              <h3 className="mt-2 font-light">{tagline}</h3>
            </div>

            {/* Hero Icons */}
            {heroInfo && (
              <div className="flex items-start justify-between md:justify-center gap-2 md:gap-10 w-full lg:w-fit">
                {Object.entries(heroInfo).map(([key, item]) => (
                  <div
                    key={key}
                    className="flex flex-col items-start text-center md:gap-5 ">
                    <div className="grid place-items-center h-6 w-full">
                      {renderIcon(key, "w-full h-6 md:h-10")}
                    </div>
                    <h6 className=" mt-2 font-normal whitespace-pre-line w-full text-center">
                      {item.description.replace(/<br\/>/g, "\n")}
                    </h6>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelHero;
