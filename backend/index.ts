import app from "./app";
import getDbInstance, { init } from "./db/index";
const port = 8080;

(async () => {
  const dbInstance = await getDbInstance()
  await init(dbInstance)
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
})();
