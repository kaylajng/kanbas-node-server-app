import mongoose from "mongoose";

//The ref property establishes that the primary key stored in course refers to a document stored in the courses collection,
//effectively implementing a one to many relation

const schema = new mongoose.Schema(
  {
    name: String,
    description: String,
    course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
  },
  { collection: "modules" }
);
export default schema;
