import Anthropic from "@anthropic-ai/sdk";

export const getClaudePoem = async (prompt: string) => {
  const anthropic = new Anthropic();
  return anthropic.messages.create({
    model: "claude-opus-4-20250514",
    max_tokens: 1000,
    temperature: 1,
    system: "Respond only with short poems.",
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: prompt
          }
        ]
      }
    ]
  });
};