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
  const [showPlayButton, setShowPlayButton] = useState(true);
  const videoRef = useRef(null);
  const isMobile = useRef(window.innerWidth < 768);

  // Reset video state when videoSrc changes (user selects different car)
  useEffect(() => {
    if (videoRef.current) {
      // Stop any current playback
      videoRef.current.pause();

      // Reset loading state
      setIsVideoLoaded(false);
      setIsPlaying(false);
      setHasVideoError(false);
      setShowPlayButton(true);

      // Force the video element to reload
      videoRef.current.load();
    }
  }, [videoSrc]);

  // Auto-play video on desktop when loaded
  useEffect(() => {
    if (videoRef.current && isVideoLoaded && !isMobile.current) {
      const playPromise = videoRef.current.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.error("Autoplay was prevented:", error);
            setIsPlaying(false);
          });
      }
    }
  }, [isVideoLoaded]);

  // Set up listener for window resize to detect mobile/desktop
  useEffect(() => {
    const handleResize = () => {
      isMobile.current = window.innerWidth < 768;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
              // Hide play button on mobile after clicking
              if (isMobile.current) {
                setShowPlayButton(false);
              }
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
    // Enable hardware acceleration to improve video quality
    if (videoRef.current) {
      videoRef.current.style.transform = "translateZ(0)";
      videoRef.current.style.webkitTransform = "translateZ(0)";
      // Force highest quality playback
      videoRef.current.playbackQuality = "high";
    }
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
        {/* Video element - only rendered if we have a valid source */}
        {showVideo && (
          <div className="absolute inset-0 w-full">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              muted
              playsInline
              loop
              preload="auto"
              key={videoSrc.desktop + videoSrc.mobile}
              onLoadedData={handleVideoLoaded}
              onError={handleVideoError}>
              {/* Proporciona múltiples formatos de fuente para mejor compatibilidad */}
              <source
                src={isMobile.current ? videoSrc.mobile : videoSrc.desktop}
                type="video/mp4"
              />
              {/* Puedes agregar más formatos de fuente si están disponibles */}
              Your browser does not support the video tag.
            </video>
          </div>
        )}

        {/* Play button overlay - only shown if video is available and on mobile */}
        {!hasVideoError && showPlayButton && (
          <div className="absolute inset-0 flex items-center justify-center z-20 md:hidden">
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

      {/* Text Overlay - No dark background on mobile */}
      <div className="mt-[56px] pb-[56px] md:pb-0 h-full md:h-auto absolute md:bg-black md:bg-opacity-50 top-0 md:top-auto bottom-0 left-0 right-0 flex text-white mx-auto z-10 pointer-events-none">
        <div className="max-w-screen-2xl mx-auto w-full md:py-4">
          <div className="relative flex flex-col lg:flex-row justify-between gap-5 h-full pointer-events-auto">
            {/* Title section - No overlay on mobile */}
            <div className="flex flex-col relative py-4 px-4 md:px-20">
              {/* Decorative border line */}
              <div className="hidden md:block absolute left-0 h-10 md:h-20 w-0.5 bg-gray-500  mx-4 md:mx-16"></div>

              <h2 className="font-normal mb-1">All-new</h2>
              <h1 className="font-bold mb-1">{title}</h1>
              <h3 className=" font-normal">{tagline}</h3>
              <div className="md:hidden h-[1px] md:h-20 w-7 mt-1 bg-white  md:mx-16"></div>
            </div>

            {/* Hero Icons - Has dark overlay on both mobile and desktop */}
            {heroInfo && (
              <div className="py-4 px-4 md:px-20 bg-black bg-opacity-50 md:bg-transparent w-full lg:w-fit max-w-[628px]">
                <div className="flex flex-wrap md:flex-nowrap md:justify-center w-full">
                  {/* Top row - first 3 items */}
                  <div className="w-full flex justify-between mb-6 md:mb-0 md:justify-start">
                    {Object.entries(heroInfo)
                      .slice(0, 3)
                      .map(([key, item]) => (
                        <div
                          key={key}
                          className="flex flex-col items-center text-center md:w-[30%] md:mx-5 w-fit">
                          <div className="grid place-items-center h-8 w-full md:h-10">
                            {renderIcon(key, "w-6 h-6 md:h-8 md:w-8")}
                          </div>
                          <h6 className="mt-2 font-normal whitespace-pre-line w-full text-center h-12 md:h-14 flex items-start justify-center">
                            {item.description.replace(/<br\/>/g, "\n")}
                          </h6>
                        </div>
                      ))}
                  </div>

                  {/* Bottom row - remaining items */}
                  {Object.entries(heroInfo).length > 3 && (
                    <div className="flex justify-evenly md:justify-start md:mx-auto w-fit">
                      {Object.entries(heroInfo)
                        .slice(3)
                        .map(([key, item]) => (
                          <div
                            key={key}
                            className="flex flex-col items-center text-center md:w-auto md:mx-5">
                            <div className="grid place-items-center h-8 w-full md:h-10">
                              {renderIcon(key, "w-6 h-6 md:h-8 md:w-8")}
                            </div>
                            <h6 className="mt-2 font-normal whitespace-pre-line w-full text-center h-12 md:h-14 flex items-start justify-center">
                              {item.description.replace(/<br\/>/g, "\n")}
                            </h6>
                          </div>
                        ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelHero;
