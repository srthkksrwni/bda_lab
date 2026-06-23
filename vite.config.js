import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import fs from "fs";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: "serve-modest-index",
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === "/modest/" || req.url === "/modest") {
            const filePath = path.resolve(__dirname, "public/modest/index.html");
            res.setHeader("Content-Type", "text/html");
            res.end(fs.readFileSync(filePath));
            return;
          }
          next();
        });
      },
    },
  ],
});