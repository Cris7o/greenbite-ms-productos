const ProductoRepository = require("../repositories/ProductoRepository");
const Producto = require("../models/Producto");

class ProductoService {
  obtenerTodos() { return ProductoRepository.findAll(); }

  obtenerPorId(id) {
    const producto = ProductoRepository.findById(id);
    if (!producto) { const e = new Error(`Producto ${id} no encontrado`); e.status = 404; throw e; }
    return producto;
  }

  crear(data) {
    for (const campo of ["nombre", "descripcion", "precio"]) {
      if (!data[campo]) { const e = new Error(`El campo ${campo} es requerido`); e.status = 400; throw e; }
    }
    if (typeof data.precio !== "number" || data.precio <= 0) {
      const e = new Error("El precio debe ser un número mayor a 0"); e.status = 400; throw e;
    }
    if (data.categoria && !Producto.CATEGORIAS.includes(data.categoria)) {
      const e = new Error(`Categoría inválida. Válidas: ${Producto.CATEGORIAS.join(", ")}`); e.status = 400; throw e;
    }
    return ProductoRepository.create(data);
  }

  actualizar(id, data) {
    this.obtenerPorId(id);
    if (data.categoria && !Producto.CATEGORIAS.includes(data.categoria)) {
      const e = new Error(`Categoría inválida. Válidas: ${Producto.CATEGORIAS.join(", ")}`); e.status = 400; throw e;
    }
    return ProductoRepository.update(id, data);
  }

  eliminar(id) {
    this.obtenerPorId(id);
    return ProductoRepository.delete(id);
  }
}

module.exports = new ProductoService();
