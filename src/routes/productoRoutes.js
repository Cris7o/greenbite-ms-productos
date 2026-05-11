const express = require("express");
const router = express.Router();
const ProductoController = require("../controllers/ProductoController");

router.get("/",       (req, res, next) => ProductoController.obtenerTodos(req, res, next));
router.get("/:id",    (req, res, next) => ProductoController.obtenerPorId(req, res, next));
router.post("/",      (req, res, next) => ProductoController.crear(req, res, next));
router.put("/:id",    (req, res, next) => ProductoController.actualizar(req, res, next));
router.delete("/:id", (req, res, next) => ProductoController.eliminar(req, res, next));

module.exports = router;
