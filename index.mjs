import dotenv from 'dotenv'
import { Configuration, OpenAIApi } from "openai";
dotenv.config()

const run = async () => {
  const configuration = new Configuration({
    apiKey: process.env.API_KEY
  });
  const openai = new OpenAIApi(configuration);

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "Say this is a test",
    temperature: 0,
    max_tokens: 7,
  });

  console.log(response.data);
};

run()
// const Koa = require("koa");
// const app = new Koa();

// app.use(async (ctx) => {
//   ctx.body = "Hello World";
// });

// app.listen(3000);
