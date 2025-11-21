import { OPENAI_KEY } from "./constant";
import { GoogleGenerativeAI } from '@google/generative-ai';

const MODEL_IDS = {
  flash: "gemini-2.5-flash",
  pro: "gemini-2.0-pro-exp-02-05",
};

const genAI = new GoogleGenerativeAI(OPENAI_KEY);

const models = Object.entries(MODEL_IDS).reduce((acc, [key, id]) => {
  acc[key] = genAI.getGenerativeModel({ model: id });
  return acc;
}, {});

const modelRotation = Object.keys(MODEL_IDS);
let rotationIndex = 0;

export const getGeminiModel = (preferredModel) => {
  if (preferredModel && models[preferredModel]) {
    return { name: preferredModel, model: models[preferredModel] };
  }

  const modelName = modelRotation[rotationIndex];
  rotationIndex = (rotationIndex + 1) % modelRotation.length;

  return { name: modelName, model: models[modelName] };
};

export default models.flash;
export { genAI };
