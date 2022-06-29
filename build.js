require("esbuild")
  .build({
    entryPoints: ["src/index.tsx"],
    outfile: "build/js/bundle.js",
    minify: true,
    bundle: true,
    sourcemap: true,
    target: ["chrome58", "firefox57", "edge16"],
    loader: { ".ts": "ts" },
  })
  .then(() => console.log("⚡ Done"))
  .catch(() => process.exit(1));
