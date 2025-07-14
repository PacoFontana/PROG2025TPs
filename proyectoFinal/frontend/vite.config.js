// vite.config.js
import { defineConfig } from 'vite'
export default defineConfig({
    server: {
        host: true, // Esto es crucial para Docker. Alternativamente, '0.0.0.0'
        port: 5173 // Asegúrate de que este sea el puerto que esperas
    }
})