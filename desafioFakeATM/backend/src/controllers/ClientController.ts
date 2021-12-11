import { Request, Response } from "express";
import { ClientModel } from "../database/models/ClientModel";

class ClientController {
  async findAll(req: Request, res: Response) {
    const clients = await ClientModel.findAll();
    return clients.length > 0
      ? res.status(200).json(clients)
      : res.status(204).send();
  }

  async findOne(req: Request, res: Response) {
    const { clientId } = req.params;
    const client = await ClientModel.findOne({
      where: {
        id: clientId,
      },
    });

    return client ? res.status(200).json(client) : res.status(404).send();
  }

  async create(req: Request, res: Response) {
    const { name, dateBorn, limit, cpf } = req.body;
    const client = await ClientModel.create({
      name,
      dateBorn,
      limit,
      cpf,
    });

    return res.status(201).json(client);
  }

  async update(req: Request, res: Response) {
    const { name, limit } = req.body;
    const { clientId } = req.params;
    const client = await ClientModel.update(
      { name, limit },
      {
        where: { id: clientId },
      }
    );

    return client ? res.status(200).json(client) : res.status(404).send();
  }

  async destroy(req: Request, res: Response) {
    const { clientId } = req.params;
    await ClientModel.destroy({ where: { id: clientId } });
    return res.status(204).send();
  }
}

export default new ClientController();
