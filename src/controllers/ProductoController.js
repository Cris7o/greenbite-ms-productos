const ProductoService = require("../services/ProductoService");

class ProductoController {
  obtenerTodos(req, res, next) {
    try {
      const productos = ProductoService.obtenerTodos();
      res.json({ success: true, data: productos, total: productos.length });
    } catch (e) { next(e); }
  }
  obtenerPorId(req, res, next) {
    try {
      res.json({ success: true, data: ProductoService.obtenerPorId(req.params.id) });
    } catch (e) { next(e); }
  }
  crear(req, res, next) {
    try {
      res.status(201).json({ success: true, message: "Producto creado", data: ProductoService.crear(req.body) });
    } catch (e) { next(e); }
  }
  actualizar(req, res, next) {
    try {
      res.json({ success: true, message: "Producto actualizado", data: ProductoService.actualizar(req.params.id, req.body) });
    } catch (e) { next(e); }
  }
  eliminar(req, res, next) {
    try {
      ProductoService.eliminar(req.params.id);
      res.json({ success: true, message: "Producto eliminado" });
    } catch (e) { next(e); }
  }
}

module.exports = new ProductoController();
