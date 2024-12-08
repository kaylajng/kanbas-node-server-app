import mongoose from "mongoose";
import schema from "./schema.js";

//CourseModel declares a unique name that can be used as a reference from other mongoose schemas
const model = mongoose.model("CourseModel", schema);

export default model;
