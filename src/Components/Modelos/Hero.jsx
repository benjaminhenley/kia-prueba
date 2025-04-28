import React, { useState, useRef, useEffect } from "react";
import { PlayIcon } from "../Common/Icons/PlayButton";
import { getHeroIcon } from "../Common/Icons/HeroIcons";
import renderWithLineBreaks from "../../Data/mappers/renderWithLineBreaks";

const ModelHero = ({ title, tagline, videoSrc, heroInfo, allNew = false }) => {
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
            <PlayIcon
              onClick={handlePlayClick}
              className="w-[106px] h-[106px]"
            />
          </div>
        )}
      </div>

      {/* Text Overlay - No dark background on mobile */}
      <div className="mt-[56px] pb-[56px] md:pb-0 h-full md:h-auto absolute md:bg-black md:bg-opacity-50 top-0 md:top-auto bottom-0 left-0 right-0 flex text-white mx-auto z-10 pointer-events-none">
        <div className=" mx-auto w-full md:py-[30px]">
          <div className="relative flex flex-col justify-between items-center flex-wrap md:flex-row h-full pointer-events-auto md:px-16">
            {/* Title section - No overlay on mobile */}
            <div className="flex flex-col relative mt-5 md:mt-0 pl-4 flex-shrink-0 w-full md:w-fit">
              {/* Decorative border line */}
              <div className="hidden md:block absolute left-0 h-10 md:h-[66px] w-[1px] bg-gray-500"></div>

              {allNew && <h2 className="font-normal mb-1">All-new</h2>}
              <h1 className="font-bold mb-1">{title}</h1>
              <h3 className=" font-normal">{tagline}</h3>
              <div className="md:hidden h-[1px] md:h-20 w-7 mt-1 bg-white  md:mx-16"></div>
            </div>

            <div className="bg-black bg-opacity-50 md:bg-transparent w-full xl:w-fit justify-center">
              <div className="justify-between flex flex-wrap mx-auto lg:mx-0 p-4">
                {heroInfo.map((item) => (
                  <div
                    key={item.id}
                    className={`${
                      heroInfo.length === 4 ? "w-fit" : "w-fit min-w-[70px]"
                    } md:w-fit flex flex-col items-center text-center py-2 xl:p-2`}>
                    <div className="flex justify-center items-end h-8 w-full md:h-10">
                      {getHeroIcon(item.iconId, "w-6 h-6 md:h-8 md:w-8")}
                    </div>
                    <h6 className="md:hidden mt-1 whitespace-pre-line font-normal text-nowrap">
                      {(item.description_mobile || item.description).replace(
                        /<br\/>/g,
                        "\n"
                      )}
                    </h6>
                    <h6 className="hidden md:block mt-1 font-normal text-center min-w-[80px] text-pretty">
                      {renderWithLineBreaks(item.description)}
                    </h6>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelHero;
