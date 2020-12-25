import mongoose from "mongoose";
import config from "./config/index"

const {database} = config
const uri: string = database.dbUrl;

mongoose.connection.once("open", () => {
  console.log("successfully connected to the database!");
});
mongoose.connection.on(
  "error",
  console.error.bind(console, "connection error:")
);
export default async () => {
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};