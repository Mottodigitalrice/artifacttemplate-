import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  // IMPORTANT: Update this when copying template to a new project
  // basePath: "/artifacts/YOUR-PROJECT-NAME",
};

export default nextConfig;
