import "dotenv/config";
import { getClaudePoem } from "./claudeapi";

(async () => {
  try {
    const res = await getClaudePoem("Why is the ocean salty?");
    console.log(res);
  } catch (error) {
    console.error("Claude API error:", error);
  }
})(); 