import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const repositoryName =
  process.env.GITHUB_REPOSITORY?.split("/").pop() || "my-app";

export default defineConfig({
  base: repositoryName,
  plugins: [react()],
});
