import { PORT } from "./email/process.js";
import app from "./app.js";

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
