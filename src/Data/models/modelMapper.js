// Import JSON models
import k3SedanJson from "./json/k3-sedan.json";
import k3CrossJson from "./json/k3-cross.json";
import ceratoJson from "./json/cerato.json";
import sportageJson from "./json/sportage.json";
import k2500Json from "./json/k2500.json";
import carnivalJson from "./json/carnival.json";
import seltosJson from "./json/seltos.json";
import { resolveAllImageRefs } from "./imageMaps/index";

const k3Sedan = resolveAllImageRefs(k3SedanJson);
const k3Cross = resolveAllImageRefs(k3CrossJson);
const cerato = resolveAllImageRefs(ceratoJson);
const sportage = resolveAllImageRefs(sportageJson);
const k2500 = resolveAllImageRefs(k2500Json);
const carnival = resolveAllImageRefs(carnivalJson);
const seltos = resolveAllImageRefs(seltosJson);

export const carModelsData = {
  "k3-sedan": k3Sedan,
  "k3-cross": k3Cross,
  cerato: cerato,
  sportage: sportage,
  k2500: k2500,
  carnival: carnival,
  seltos: seltos,
};

// Model ID constants
export const MODEL_IDS = {
  SEDAN: "k3-sedan",
  CROSS: "k3-cross",
  CERATO: "cerato",
  SPORTAGE: "sportage",
  K2500: "k2500",
  CARNIVAL: "carnival",
  SELTOS: "seltos",
};

// Available models for UI components
export const availableModels = [
  { id: MODEL_IDS.SEDAN, name: "K3 Sedán" },
  { id: MODEL_IDS.CROSS, name: "K3 Cross" },
  { id: MODEL_IDS.SPORTAGE, name: "Sportage" },
  { id: MODEL_IDS.CERATO, name: "Cerato" },
  { id: MODEL_IDS.SELTOS, name: "Seltos" },
  { id: MODEL_IDS.K2500, name: "K2500" },
  { id: MODEL_IDS.CARNIVAL, name: "Carnival" },
];

// Helper function to check if model exists
export const modelExists = (modelId) => {
  return availableModels.some((model) => model.id === modelId);
};

// Helper function to get model data safely
export const getSafeModelData = (modelId) => {
  return modelExists(modelId) ? carModelsData[modelId] : null;
};
