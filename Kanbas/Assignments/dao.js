import Database from "../Database/index.js";

//data handling
//handles database-like operations for assignments, such as fetching, creating, updating, or deleting assignments

//get all assignments for one course
export function getAssignments(courseID) {
  return Database.assignments.filter(
    (assignment) => assignment.course === courseID
  );
}

//get a single assignment by ID
export function getAssignment(assignmentID) {
  return Database.assignments.find(
    (assignment) => assignment._id === assignmentID
  );
}

export function createAssignment(assignment) {
  const newAssignment = {
    _id: Date.now().toString(),
    title: "",
    available_date: "",
    available_time: "",
    due_by_date: "",
    due_by_time: "",
    until_date: "",
    until_time: "",
    description: "",
    points: "",
    group: "ASSIGNMENTS",
    grade_display: "",
    submission_type: "",
    entry_options: [],
    assigned_to: "Everyone",
    ...assignment,
  };
  Database.assignments = [...Database.assignments, newAssignment];
  return newAssignment;
}

export function updateAssignment(assignmentID, assignmentUpdates) {
  const oldAssignment = Database.assignments.find(
    (assignment) => assignment._id === assignmentID
  );

  Object.assign(oldAssignment, assignmentUpdates);
  return oldAssignment;
}

export function deleteAssignment(assignmentID) {
  const { assignments } = Database;

  const assignmentIndex = assignments.findIndex(
    (assignment) => assignment._id === assignmentID
  );

  if (assignmentIndex !== -1) {
    assignments.splice(assignmentIndex, 1);
  }

  return assignmentIndex;
}
