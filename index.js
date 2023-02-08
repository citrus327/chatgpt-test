const run = async () => {
  const { Configuration, OpenAIApi } = require("openai");
  const configuration = new Configuration({
    apiKey: "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",
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
