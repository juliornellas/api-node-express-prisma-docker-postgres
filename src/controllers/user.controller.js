import bcrypt from "bcrypt";
import {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../repositories/user.repository";
import { userValidation } from "../validations/user.validation";

export const create = async (req, res) => {
  try {
    await userValidation.validate(req.body);
    const hashPassword = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashPassword;
    const user = await createUser(req.body);
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const get = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.status(200).send(users);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getById = async (req, res) => {
  try {
    const user = await getUserById(req.params.id);
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const update = async (req, res) => {
  try {
    const user = await updateUser(req.params.id, req.body);
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const deleteUserById = async (req, res) => {
  try {
    await deleteUser(req.params.id);
    res.status(200).send();
  } catch (error) {
    res.status(400).send(error);
  }
};
