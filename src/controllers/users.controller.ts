import * as usersService from "../services/usersService";

export async function getAll(req, res, next) {
  try {
    const allUsers = await usersService.getAll(req.query);
    return res.json(allUsers);
  } catch (err) {
    next(err);
  }
}

export async function getOneById(req, res, next) {
  try {
    const user = await usersService.getOneById(req.params.id);
    res.json(user);
  } catch (err) {
    next(err);
  }
}

export async function create(req, res, next) {
  try {
    const created = await usersService.addNew(req.body);
    res.json(created);
  } catch (err) {
    next(err);
  }
}

export async function updateWhereId(req, res, next) {
  try {
    const updatedUser = await usersService.updateWhereId(req.params.id, req.body);
    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
}

export async function deleteWhereId(req, res, next) {
  try {
    await usersService.deleteWhereId(req.params.id);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
}
