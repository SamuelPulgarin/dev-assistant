/* ============================================================================
 * 💬 Mensajes y Tools
 * ============================================================================ */
export type Role = 'user' | 'assistant';

export interface Message {
  role: Role;
  content: string;
}

export interface ToolDefinition {
    name: string;
    description: string;
    inputSchema: {
        type: "object";
        properties: Record<string, unknown>;
        required?: string[];
    }
}

export interface ToolResult {
    toolName: string;
    toolUseId: string;
    result: string;
    isError: boolean;
}

/* ============================================================================
 * 📚 RAG (Retrieval-Augmented Generation)
 * ============================================================================ */
export interface Chunk {
    id: string;
    content: string;
    metadata: {
        source: string;
        heading: string;
        position: number;
        charCount: number;
    }
}

export interface RetrievedChunk extends Chunk {
    score: number;
}

export interface SearchResult {
    chunk: Chunk;
    score: number;
}

/* ============================================================================
 * ⚙️ Configuración y Agente
 * ============================================================================ */
export type ModelProvider = 'openai' | 'anthropic';

export interface AppConfig
{
    Provider: ModelProvider;
    anthropicApiKey?: string;
    openaiApiKey?: string;
    anthropicModel?: string;
    openaiModel?: string;
    openaiEmbeddingModel?: string;
    docsPath: string;
    dbPath: string;
    rangTopK: number;
}

export interface AgentResponse {
    text: string;
    toolUsed: string[];
    inputTokens: number;
    outputTokens: number;
}
