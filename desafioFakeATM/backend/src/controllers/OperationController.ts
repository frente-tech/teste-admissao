import { Request, Response } from "express";
import { OperationModel } from "../database/models/OperationModel";

class OperationController {
  async findAll(req: Request, res: Response) {
    const operations = await OperationModel.findAll();
    return operations.length > 0
      ? res.status(200).json(operations)
      : res.status(204).send();
  }

  async findOne(req: Request, res: Response) {
    const { operationId } = req.params;
    const operation = await OperationModel.findOne({
      where: {
        id: operationId,
      },
    });

    return operation ? res.status(200).json(operation) : res.status(404).send();
  }

  async create(req: Request, res: Response) {
    const { value, origin, recipient } = req.body;
    const operation = await OperationModel.create({
      value,
      origin,
      recipient,
    });

    return res.status(201).json(operation);
  }

  async update(req: Request, res: Response) {
    const { origin, recipient } = req.body;
    const { operationId } = req.params;
    const operation = await OperationModel.update(
      { origin, recipient },
      { where: { id: operationId } }
    );

    return operation ? res.status(200).json(operation) : res.status(404).send();
  }

  async destroy(req: Request, res: Response) {
    const { operationId } = req.params;
    await OperationModel.destroy({ where: { id: operationId } });
    return res.status(204).send();
  }
}

export default new OperationController();
