import Groq from "groq-sdk";

const groq = new Groq({
    apiKey:process.env.REACT_APP_OPENAI_KEY,
    dangerouslyAllowBrowser: true 
});


export default groq