import express from "express";
import ClientController from "./controllers/ClientController";
import OperationController from "./controllers/OperationController";
import UserController from "./controllers/UserController";

const router = express.Router();

router.post("/users", UserController.create);

router.get("/users", UserController.findAll);

router.get("/users/:userId", UserController.findOne);

router.put("/users/:userId", UserController.update);

router.delete("/users/:userId", UserController.destroy);
/* clients */
router.post("/clients", ClientController.create);

router.get("/clients", ClientController.findAll);

router.get("/clients/:clientId", ClientController.findOne);

router.put("/clients/:clientId", ClientController.update);

router.delete("/clients/:clientId", ClientController.destroy);
/* operation */
router.post("/operations", OperationController.create);

router.get("/operations", OperationController.findAll);

router.get("/operations/:operationId", OperationController.findOne);

router.put("/operations/:operationId", OperationController.update);

router.delete("/operations/:operationId", OperationController.destroy);

export { router };
