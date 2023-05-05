import fs from "fs/promises";
import theme from "./theme.mjs";

// write theme
fs.mkdir("./themes", { recursive: true })
  .then(() =>
    fs.writeFile("./themes/nocturno.json", JSON.stringify(theme, null, 2))
  )
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
