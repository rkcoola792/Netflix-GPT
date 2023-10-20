import OpenAI from "openai";
import { OPEN_AI_KEY } from "./constants";

export const openai = new OpenAI({
  apiKey: OPEN_AI_KEY,
  dangerouslyAllowBrowser: true
});
