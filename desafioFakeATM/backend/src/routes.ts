import express from "express";
import UserController from "./controllers/UserController";

const router = express.Router();

// create
router.post("/users", UserController.create);
// read
router.get("/users", UserController.findAll);
// read by id
router.get("/users/:usersID", UserController.findOne);
// update
router.put("/users/:usersID", UserController.update);
// delete
router.delete("/users/:usersID", UserController.delete);

export { router };
