import { k3Sedan, k3Cross } from "./carModelsData";

// Mapping object for easy access to models
export const carModelsData = {
  "k3-sedan": k3Sedan,
  "k3-cross": k3Cross,
};

// Model ID constants
export const MODEL_IDS = {
  SEDAN: "k3-sedan",
  CROSS: "k3-cross",
};

// Available models for UI components
export const availableModels = [
  { id: MODEL_IDS.SEDAN, name: "K3 Sedán" },
  { id: MODEL_IDS.CROSS, name: "K3 Cross" },
];

// Helper function to check if model exists
export const modelExists = (modelId) => {
  return availableModels.some((model) => model.id === modelId);
};

// Helper function to get model data safely
export const getSafeModelData = (modelId) => {
  return modelExists(modelId)
    ? carModelsData[modelId]
    : carModelsData[MODEL_IDS.SEDAN];
};
