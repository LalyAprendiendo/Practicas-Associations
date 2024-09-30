import express from "express";
import { User, Course, Teacher, Addresses } from "./models";
import sequelize from "./db";

const app = express();

sequelize.sync({ alter: true });


app.get("/users", async (req, res, next) => {
  const usersAll = await User.findAll({ include: Addresses });
  res
    .status(200)
    .json({ message: "Listado de usuarios", usersAll });
});


app.get("/teachers", async (req, res, next) => {
    const teachers = await Teacher.findAll({ include: Course });
    res
      .status(200)
      .json({ message: "Listado de Profesores", teachers });
  });

  app.get("/courses/:id", async (req, res, next) => {
    const course = await Course.findByPk(req.params.id, { include: Teacher });
    res
      .status(200)
      .json({ message: "Curso por Id", course});
  });
 
  app.get("/courses", async (req, res, next) => {
    const courseAll = await Course.findAll({ include: User });
    res
      .status(200)
      .json({ message: "Listado de Cursos y Usuarios", courseAll});
  });
   

app.listen(8080, () => {
  console.log("server running");
});
