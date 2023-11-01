import res from "express/lib/response.js";
import chatGPT from "./config/openai.js";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ask me something... ", async (strInput) => {
    try {
      const response = await chatGPT(strInput);
      console.log(response.message.content);
    } catch (error) {
      console.error(error);
    } finally {
      rl.close();
    }
  })
