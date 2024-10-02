import Groq from "groq-sdk";
import { OPENAI_KEY } from './Constants/constants';

const groq = new Groq({ 
    apiKey:OPENAI_KEY,
    dangerouslyAllowBrowser:true
});


export default groq