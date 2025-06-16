import { getEnvVars } from "./email/process.js";
import app from "./app.js";

const { PORT } = getEnvVars();

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
