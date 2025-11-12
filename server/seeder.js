import "dotenv/config";
import { connectDB } from "./src/db/dbConnect.js";
import {Product} from "./src/models/product.model.js";
import all_product from "./src/lib/all_product.js";
import data_product from "./src/lib/data.js";
import new_collections from "./src/lib/new_collections.js";
import mongoose from "mongoose";

const popular_ids = data_product.map((p) => p.id);
const new_ids = new_collections.map((p) => p.id);

const all_product_with_tags = all_product.map((p) => ({
  ...p,
  isPopular: popular_ids.includes(p.id),
  isNew: new_ids.includes(p.id),
}));

await connectDB()
  .then(async () => {
    await Product.deleteMany({});
    await Product.insertMany(all_product_with_tags);
    console.log("DB seeded successfully");
  })
  .catch((err) => {
    console.error(err);
  })
  .finally(() => {
    mongoose.connection.close();
    console.log("Disconnected!");
  });
