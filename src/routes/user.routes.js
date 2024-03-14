import {
  create,
  get,
  getById,
  update,
  deleteUserById,
} from "../controllers/user.controller";

const userRoutes = (app) => {
  app.post("/user", create);
  app.get("/user", get);
  app.get("/user/:id", getById);
  app.put("/user/:id", update);
  app.delete("/user/:id", deleteUserById);
};

export default userRoutes;
