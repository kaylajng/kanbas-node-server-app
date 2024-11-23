import assignments from "../Database/assignments.js";
import * as dao from "./dao.js";

//defines API endpoints/routing for assignments
//uses dao.js functions to perform operations on the data and sends responses back to the client

const API = "/api/assignments";

export default function AssignmentRoutes(app) {
  app.get(`${API}/:courseId`, (request, response) => {
    const { courseId } = request.params;
    const assignments = dao.getAssignments(courseId);
    response.json(assignments);
  });

  app.get(`${API}/:courseId/:assignmentId`, (request, response) => {
    const { assignmentId } = request.params;
    const assignment = dao.getAssignment(assignmentId);
    response.json(assignment);
  });

  app.post(`${API}`, (request, response) => {
    const { assignment } = request.body;
    const newAssignment = dao.createAssignment(assignment);
    response.json(newAssignment);
  });

  app.put(`${API}/:assignmentId`, (request, response) => {
    const { assignmentId } = request.params;
    const { assignment } = request.body;
    const updatedAssignment = dao.updateAssignment(assignmentId, assignment);
    response.json(updatedAssignment);
  });

  app.delete(`${API}/:assignmentId`, (request, response) => {
    const { assignmentId } = request.params;
    const deleteIndex = dao.deleteAssignment(assignmentId);

    if (deleteIndex === -1) {
      response.status(404).json({
        message: `Unable to delete assignment with ID ${assignmentId}`,
      });
      return;
    } else {
      response.sendStatus(200);
    }
  });
}
