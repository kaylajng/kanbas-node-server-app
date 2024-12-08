import Database from "../Database/index.js";
import model from "./model.js";

//data handling
//handles database-like operations for assignments, such as fetching, creating, updating, or deleting assignments

//get all assignments for one course
export function getAssignments(courseID) {
  return model.find({ course: courseId });

  // return Database.assignments.filter(
  //   (assignment) => assignment.course === courseID
  // );
}

//get a single assignment by ID
export function getAssignment(assignmentID) {
  return Database.assignments.find(
    (assignment) => assignment._id === assignmentID
  );
}

export function createAssignment(assignment) {
  delete assignment._id;
  return model.create(assignment);

  // const newAssignment = {
  //   _id: Date.now().toString(),
  //   title: "",
  //   available_date: "",
  //   available_time: "",
  //   due_by_date: "",
  //   due_by_time: "",
  //   until_date: "",
  //   until_time: "",
  //   description: "",
  //   points: "",
  //   group: "ASSIGNMENTS",
  //   grade_display: "",
  //   submission_type: "",
  //   entry_options: [],
  //   assigned_to: "Everyone",
  //   ...assignment,
  // };
  // Database.assignments = [...Database.assignments, newAssignment];
  // return newAssignment;
}

export function updateAssignment(assignmentID, assignmentUpdates) {
  return model.updateOne({ _id: assignmentId }, assignmentUpdates);

  // const oldAssignment = Database.assignments.find(
  //   (assignment) => assignment._id === assignmentID
  // );

  // Object.assign(oldAssignment, assignmentUpdates);
  // return oldAssignment;
}

export function deleteAssignment(assignmentID) {
  return model.deleteOne({ _id: assignmentId });
  // const { assignments } = Database;
  // const assignmentIndex = assignments.findIndex(
  //   (assignment) => assignment._id === assignmentID
  // );
  // if (assignmentIndex !== -1) {
  //   assignments.splice(assignmentIndex, 1);
  // }
  // return assignmentIndex;
}
