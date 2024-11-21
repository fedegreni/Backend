import { fileURLToPath } from 'url';
import path from 'path';

// Obtener __filename y __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Exportar __dirname
export { __dirname };
