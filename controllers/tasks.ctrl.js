import { task } from "../models/task.model.js";

export const getAll = async (req, res) => {
  const tasks = await task.findAll({ where: { userId: req.user.id } });

  if (!tasks) return res.status(404).json(["No tiene ninguna tarea aún"]);

  res.status(200).json(tasks);
};

export const getOne = async (req, res) => {
  const taskFound = await task.findByPk(req.params.id);

  if (!taskFound)
    return res.status(404).json(["No se han encontrado esta tarea"]);

  res.status(200).json(taskFound);
};

export const createOne = async (req, res) => {
  const { title, descr, expiresIn, priority } = req.body;

  try {
    const newTask = await task.create({
      title,
      descr,
      expiresIn,
      priority,
      userId: req.user.id,
    });

    res.status(200).json(newTask);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
};

export const updateOne = async (req, res) => {
  const { title, descr, expiresIn, priority } = req.body;

  try {
    const taskUpdated = await task.update(
      {
        title,
        descr: descr ? descr : null,
        expiresIn: expiresIn ? expiresIn : null,
        priority,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    if (!taskUpdated)
      return res.status(404).json(["No se han encontrado esta tarea"]);

    res.status(200).json(taskUpdated);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
};

export const completeOne = async (req, res) => {
  try {
    const taskUpdated = await task.update(
      {
        state: "completada",
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    if (!taskUpdated)
      return res.status(404).json(["No se han encontrado esta tarea"]);

    res.status(200).json(taskUpdated);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
};

export const deleteOne = async (req, res) => {
  try {
    const taskDeleted = await task.destroy({ where: { id: req.params.id } });

    if (!taskDeleted)
      return res.status(404).json(["No se han encontrado esta tarea"]);

    res.sendStatus(204);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
};
