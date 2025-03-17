// useAssetsLoader.js
import { useState, useEffect } from "react";

const useAssetsLoader = (assets) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const promises = assets.map((asset) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = asset;
        img.onload = resolve;
        img.onerror = reject;
      });
    });

    Promise.all(promises)
      .then(() => setLoaded(true))
      .catch((err) => console.error("Failed to load assets", err));
  }, [assets]);

  return loaded;
};

export default useAssetsLoader;
