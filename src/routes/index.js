import express from "express";
import produtos from "./produtosRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("Sistema de Produtos"));

  app.use(express.json(), produtos);
};

export default routes;