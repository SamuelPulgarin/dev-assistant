# DevAssistant

> Construye un agente de IA real desde cero con TypeScript. Sin LangChain. Sin LangGraph. Solo tu código.

DevAssistant es un agente de IA funcional que **lee documentación con RAG**, **ejecuta herramientas reales** (leer archivos, buscar código, crear issues) y **razona sobre múltiples pasos** — usando únicamente Node.js, TypeScript en modo estricto, el SDK oficial de Anthropic y SQLite con `sqlite-vec`.

Este repositorio es el proyecto que se construye a lo largo de un curso. **Cada commit corresponde a un video del curso** y cada sección deja el proyecto en un estado funcional. No hay magia, no hay frameworks que oculten la lógica, no hay cajas negras: hay código que tú escribes y entiendes.

## ¿Por qué sin frameworks?

Frameworks como LangChain o LangGraph prometen velocidad, pero a cambio esconden justo lo que necesitas entender para llevar un agente a producción: cómo se arma el loop de tool calling, qué pasa exactamente en una búsqueda vectorial, o por qué tu factura de tokens creció de un día para otro. Este curso va en la otra dirección: construir cada pieza a mano, sobre los SDKs oficiales, para que el conocimiento no dependa de una API de terceros que puede cambiar mañana.

## Qué vas a aprender

- **La Messages API de Claude desde cero** — mensajes, system prompts, streaming, conversaciones multi-turno.
- **Function calling y el agentic loop completo a mano** — enviar → `tool_use` → ejecutar → `tool_result`.
- **Structured output garantizado** con `tool_choice` forzado, sin parsear texto libre.
- **RAG profundo** — chunking de Markdown por headings, embeddings con la API de OpenAI, vector store en SQLite con `sqlite-vec` y búsqueda KNN.
- **Combinar API + Tools + RAG** en un agente que decide cuándo usar cada cosa.
- **Guardrails de seguridad reales** — sanitización, detección de prompt injection (16 patrones en inglés y español), rate limiting con sliding window.
- **Cálculo de costos en USD** por modelo y por request, sin sorpresas en la factura.
- **Deploy automatizado** en GitHub Codespaces con `.devcontainer` y secrets.

## Stack

| Pieza | Tecnología |
|---|---|
| Runtime | Node.js 20+ |
| Lenguaje | TypeScript en modo `strict` (con `noUncheckedIndexedAccess`) |
| Modelo de lenguaje | Anthropic SDK — `claude-sonnet-4-6` |
| Embeddings | OpenAI SDK — `text-embedding-3-small` |
| Vector store | SQLite (`better-sqlite3`) + `sqlite-vec` |
| Deploy | GitHub Codespaces |

## Requisitos previos

- JavaScript o TypeScript a nivel intermedio.
- Node.js instalado (v20+).
- API keys de [Anthropic](https://console.anthropic.com) y [OpenAI](https://platform.openai.com/api-keys). El costo total del curso es mínimo — del orden de centavos de dólar.
- Curiosidad por lo que hay debajo de los frameworks.

## ¿Para quién es este curso?

- Developers cansados de tutoriales que se resumen en "instala LangChain".
- Backend developers que necesitan entender cómo funcionan los agentes por dentro antes de llevarlos a producción.
- Equipos que no pueden permitirse el lujo de una caja negra en su stack crítico.
- Cualquiera que quiera construir su propio asistente de IA sobre su propia documentación.

## Instalación

```bash
# 1. Clona el repositorio
git clone <url-del-repo>
cd dev-assistant

# 2. Instala dependencias
npm install

# 3. Configura tus variables de entorno
cp .env.template .env
# Edita .env y agrega tus API keys de Anthropic y OpenAI
```

## Scripts disponibles

```bash
npm run dev         # Ejecuta el agente en modo desarrollo (src/index.ts)
npm start           # Ejecuta el agente
npm run ingest      # Indexa la documentación en docs/ hacia el vector store
npm run demo        # Corre la demo del agente (src/agent/demo.ts)
npm run review      # Ejercicio de code review con tools (src/exercises/code-reviewer.ts)
npm run typecheck   # Verifica tipos sin emitir código
npm run build       # Compila el proyecto a dist/
```

## Estado del proyecto

🚧 **En construcción.** Este repositorio se está desarrollando en vivo como parte del curso, sección por sección. La estructura final incluirá, entre otras, estas piezas:

- `src/agent/` — el agentic loop y la orquestación del agente.
- `src/rag/` — ingesta, chunking, embeddings y búsqueda vectorial.
- `src/tools/` — herramientas reales que el agente puede invocar (lectura de archivos, búsqueda de código, creación de issues).
- `src/guardrails/` — sanitización, detección de prompt injection y rate limiting.
- `src/types.ts` — los tipos centrales que conectan mensajes, tools y RAG.
- `.devcontainer/` — configuración para deploy en GitHub Codespaces.

A medida que el curso avanza, este README se irá actualizando para reflejar el estado real del proyecto.

## Licencia

MIT
