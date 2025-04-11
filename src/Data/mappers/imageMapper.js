import { imageMap } from "../models/imageMap";

/**
 * Resolves an image reference string to its actual path
 * @param {string} imageRef - Reference in format "imageMapRef:path.to.image"
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
