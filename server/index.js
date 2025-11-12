import "dotenv/config";
import { app } from "./app.js";
import { connectDB } from "./src/db/dbConnect.js";

await connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        `Server is listening on http://localhost:${process.env.PORT}`
      );
    });
  })
  .catch((error) => {
    console.error("Connection Failed!",error);
  });
