import config from "./config.js";
import { askClaude } from "./llm/anthropic-client.js";

const dim = (text: string) => `\x1b[2m${text}\x1b[0m`;
const cyan = (text: string) => `\x1b[36m${text}\x1b[0m`;
const green = (text: string) => `\x1b[32m${text}\x1b[0m`;
const bold = (text: string) => `\x1b[1m${text}\x1b[0m`;

async function main(): Promise<void> {
  console.log(cyan("╔══════════════════════════════════════════╗"));
  console.log(cyan("║") + bold("          🤖  DevAssistant                ") + cyan("║"));
  console.log(cyan("╚══════════════════════════════════════════╝"));
  console.log("");
  console.log(green("✔ ") + "DevAssistant configurado correctamente");
  console.log("");
  const question = "¿Qué es Typescript y en qué se diferencia con Javascript. Responde máximo 3 puntos concisos";
  const answer = await askClaude(question);
  console.log("-".repeat(50));
  console.log(answer);
  console.log("-".repeat(50));
  console.log(bold("📋 Configuración activa"));
  console.log(dim("   ────────────────────────────────────────"));
  console.log(`   ${dim("Provider")}            ${config.provider}`);
  console.log(`   ${dim("Modelo Anthropic")}    ${config.anthropicModel}`);
  console.log(`   ${dim("Modelo OpenAI")}       ${config.openaiModel}`);
  console.log(`   ${dim("Docs path")}           ${config.docsPath}`);
  console.log(`   ${dim("RAG top-K")}           ${config.ragTopK}`);
  console.log("");
}

main().catch((error: Error) => console.error(" Error: ", error.message));
