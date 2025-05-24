// src/services/openai.js
import axios from "axios";

const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

export const getFortune = async ({
  givenName,
  familyName,
  dob,
  city,
  nationality,
  gender,
  category,
}) => {
  const prompt = `
You are a fortune teller. Based on the following information, provide a short-term and long-term fortune for the user:

Name: ${givenName} ${familyName}
Date of Birth: ${dob}
City: ${city}
Nationality: ${nationality}
Gender: ${gender}
Concern: ${category}

Format response as:
Short-term: ...
Long-term: ...
`;

  const response = await axios.post(
    "https://api.openai.com/v1/chat/completions",
    {
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
    },
    {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
    }
  );

  return response.data.choices[0].message.content;
};
