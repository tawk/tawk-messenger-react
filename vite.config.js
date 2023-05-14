import path from 'path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    
    build : {
        lib : {
            entry : path.resolve(__dirname, 'src/index.js'),
            name : 'tawk-messenger-react',
            fileName : (format) => `tawk-messenger-react.${format}.js`
        },
        rollupOptions : {
            external : ['react'],

            output : {
                globals : {
                    react : 'React'
                }
            }
        }
    }
})
