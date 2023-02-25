require("dotenv").config();
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

async function generateImage(prompt) {
  const response = await openai.createImage({
    prompt,
    n: 1,
    size: "256x256",
  });

  const image_url = response.data.data[0].url;

  return image_url;
}

module.exports = {
  generateImage,
};
