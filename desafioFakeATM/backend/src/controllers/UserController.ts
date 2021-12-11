import { Request, Response } from "express";
import { UserModel } from "../database/models/UserModel";

class UserController {
  async findAll(req: Request, res: Response) {
    const users = await UserModel.findAll();
    return users.length > 0
      ? res.status(200).json(users)
      : res.status(204).send();
  }

  async findOne(req: Request, res: Response) {
    const { userId } = req.params;
    const user = await UserModel.findOne({
      where: {
        id: userId,
      },
    });

    return user ? res.status(200).json(user) : res.status(404).send();
  }

  async create(req: Request, res: Response) {
    const { email, name, password } = req.body;
    const user = await UserModel.create({
      email,
      name,
      password,
    });

    return res.status(201).json(user);
  }

  async update(req: Request, res: Response) {
    const { email, name } = req.body;
    const { userId } = req.params;
    const user = await UserModel.update(
      { email, name },
      {
        where: { id: userId },
      }
    );

    return user
      ? res.status(200).json({ email, name })
      : res.status(404).send();
  }

  async destroy(req: Request, res: Response) {
    const { userId } = req.params;
    await UserModel.destroy({ where: { id: userId } });
    return res.status(204).send();
  }
}

export default new UserController();
