import * as ai from "../services/ai.service.js";
export const getResult = async (req, res) => {
  try  {
    const { prompt } = req.query;

    if (!prompt) {
      return res.status(400).send({ message: "Prompt is required" });
    }

    const result = await ai.generateResult(prompt);
    res.send(result);
  } catch (error) {
    // Send the specific error message from Google back to the client
    res.status(500).send({
      message: "AI Generation Failed",
      error: error.message,
    });
  }
};
