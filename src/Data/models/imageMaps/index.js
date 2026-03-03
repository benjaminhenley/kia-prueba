// src/Data/imageMaps/index.js
import { sedanImages } from "./sedan";
import { crossImages } from "./cross";
import { sportageImages } from "./sportage";
import { k2500Images } from "./k2500";
import { carnivalImages } from "./carnival";
import { seltosImages } from "./seltos";
import { k4Images } from "./k4";

// Export all model images in a single object
export const imageMap = {
  sedan: sedanImages,
  cross: crossImages,
  sportage: sportageImages,
  k2500: k2500Images,
  carnival: carnivalImages,
  seltos: seltosImages,
  k4: k4Images,
};

/**
 * Resolves an image reference string to its actual path
 * @param {string} imageRef - Reference in format "imageMapRef:model.path.to.image"
 * @returns {string} The resolved image path
 */

export const resolveImageRef = (imageRef) => {
  if (!imageRef || typeof imageRef !== "string") {
    return imageRef;
  }

  // Check if this is a direct URL/path
  if (!imageRef.startsWith("imageMapRef:")) {
    return imageRef;
  }

  // Extract the path from the reference (e.g., "sedan.exterior.front")
  const path = imageRef.replace("imageMapRef:", "");

  // Split the path and traverse the imageMap object
  const pathParts = path.split(".");
  let result = imageMap;

  for (const part of pathParts) {
    if (result && result[part] !== undefined) {
      result = result[part];
    } else {
      console.warn(`Image reference not found: ${imageRef}`);
      return null;
    }
  }

  return result;
};

/**
 * Processes an object recursively, resolving all image references
 * @param {Object} obj - The object to process
 * @returns {Object} A new object with resolved image references
 */
export const resolveAllImageRefs = (obj) => {
  if (!obj || typeof obj !== "object") {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => resolveAllImageRefs(item));
  }

  const result = {};

  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === "string" && value.startsWith("imageMapRef:")) {
      result[key] = resolveImageRef(value);
    } else if (typeof value === "object" && value !== null) {
      result[key] = resolveAllImageRefs(value);
    } else {
      result[key] = value;
    }
  }

  return result;
};

export default {
  resolveImageRef,
  resolveAllImageRefs,
};
