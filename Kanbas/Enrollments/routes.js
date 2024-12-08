import * as dao from "./dao.js";

export default function EnrollmentsRoutes(app) {
  app.get("/api/enrollments/:userId", (req, res) => {
    const { userId } = req.params;

    const userEnrollments = dao.getUserEnrollments(userId);

    res.json(userEnrollments);
  });

  app.post("/api/enrollments/enroll/:userId/:courseId", (req, res) => {
    const { courseId, userId } = req.params;

    const numAdded = dao.enrollUserInCourse(userId, courseId);

    if (numAdded === 1) {
      res.status(200);
    } else {
      res
        .status(404)
        .json({ message: `warning: added ${numAdded} enrollments` });
    }
  });

  app.delete("/api/enrollments/un-enroll/:userId/:courseId", (req, res) => {
    const { courseId, userId } = req.params;

    const numRemoved = dao.removeEnrollment(userId, courseId);

    if (numRemoved <= 0) {
      res.status(404).json({
        message: `unable to remove user ${userId} from course ${courseId}`,
      });
    } else {
      res.sendStatus(200);
    }
  });
}
