import config from "./config.js";

const dim = (text: string) => `\x1b[2m${text}\x1b[0m`;
const cyan = (text: string) => `\x1b[36m${text}\x1b[0m`;
const green = (text: string) => `\x1b[32m${text}\x1b[0m`;
const bold = (text: string) => `\x1b[1m${text}\x1b[0m`;

function main(): void {
  console.log(cyan("╔══════════════════════════════════════════╗"));
  console.log(cyan("║") + bold("          🤖  DevAssistant                ") + cyan("║"));
  console.log(cyan("╚══════════════════════════════════════════╝"));
  console.log("");
  console.log(green("✔ ") + "DevAssistant configurado correctamente");
  console.log("");
  console.log(bold("📋 Configuración activa"));
  console.log(dim("   ────────────────────────────────────────"));
  console.log(`   ${dim("Provider")}            ${config.provider}`);
  console.log(`   ${dim("Modelo Anthropic")}    ${config.anthropicModel}`);
  console.log(`   ${dim("Modelo OpenAI")}       ${config.openaiModel}`);
  console.log(`   ${dim("Docs path")}           ${config.docsPath}`);
  console.log(`   ${dim("RAG top-K")}           ${config.ragTopK}`);
  console.log("");
}

main();
