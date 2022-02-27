import mongoose from "mongoose";
import User from "../models/user";
import { CreateUser } from "../types/createUser";
import { UpdateUser } from "../types/updateUser";

export async function getAll(filters) {
  const allUsers = await User.find().where(filters);
  return allUsers;
}

export async function getOneById(id: string) {
  const user = await User.where({ _id: id });
  return user;
}

export async function addNew(newUser: CreateUser) {
  const user = await new User({
    ...newUser,
  }).save();
  return user;
}

export async function updateWhereId(id: string, newUser: UpdateUser) {
  const updatedUser = await User.findOneAndUpdate({ _id: id }, newUser);
  return updatedUser;
}

export async function deleteWhereId(id: string) {
  await User.deleteOne({ _id: id });
}
