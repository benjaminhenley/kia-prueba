import { resolveAllImageRefs } from "../mappers/imageMapper";

// Import JSON models
import k3SedanJson from "./json/k3-sedan.json";
import k3CrossJson from "./json/k3-cross.json";
import ceratoJson from "./json/cerato.json";

// Export the processed models
const k3Sedan = resolveAllImageRefs(k3SedanJson);
const k3Cross = resolveAllImageRefs(k3CrossJson);
const cerato = resolveAllImageRefs(ceratoJson);

export const carModelsData = {
  "k3-sedan": k3Sedan,
  "k3-cross": k3Cross,
  // sportage: jsonSportage,
  cerato: cerato,
};

// Model ID constants
export const MODEL_IDS = {
  SEDAN: "k3-sedan",
  CROSS: "k3-cross",
  // SPORTAGE: "sportage",
  CERATO: "cerato",
};

// Available models for UI components
export const availableModels = [
  { id: MODEL_IDS.SEDAN, name: "K3 Sedán" },
  { id: MODEL_IDS.CROSS, name: "K3 Cross" },
  // { id: MODEL_IDS.SPORTAGE, name: "Sportage" },
  { id: MODEL_IDS.CERATO, name: "Cerato" },
];

// Helper function to check if model exists
export const modelExists = (modelId) => {
  return availableModels.some((model) => model.id === modelId);
};

// Helper function to get model data safely
export const getSafeModelData = (modelId) => {
  return modelExists(modelId) ? carModelsData[modelId] : null;
};
