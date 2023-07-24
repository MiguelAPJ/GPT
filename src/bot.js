import { Configuration, OpenAIApi } from "openai";
import * as dotenv from 'dotenv'
dotenv.config()

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export const create = (prompt) => openai.createChatCompletion({
        model: "got-3.5-turbo",
        messages: [
          {"role": "system", "content": "Você é bom"},         
          {role: "user", content: prompt},
          {"role": "assistant","content": "oi tudo bem"},
        ],   
        max_tokens: 15,        
      });
      



