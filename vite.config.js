import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    base: '/site-films/serials' // Вкажіть назву вашого репозиторія
});