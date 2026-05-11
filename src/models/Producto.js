const CATEGORIAS_VALIDAS = ["familiar", "vegana", "detox", "frutas", "verduras", "mixta"];

class Producto {
  constructor({ id, nombre, descripcion, precio, stock, categoria, disponible }) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
    this.stock = stock || 0;
    this.categoria = categoria || "mixta";
    this.disponible = disponible !== undefined ? disponible : true;
    this.creadoEn = new Date().toISOString();
  }

  static get CATEGORIAS() { return CATEGORIAS_VALIDAS; }
}

module.exports = Producto;
