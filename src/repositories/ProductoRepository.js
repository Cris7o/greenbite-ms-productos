const { v4: uuidv4 } = require("uuid");
const Producto = require("../models/Producto");

class ProductoRepository {
  constructor() {
    this._store = new Map();
    this._seedData();
  }

  _seedData() {
    const ejemplos = [
      { nombre: "Caja Orgánica Familiar", descripcion: "Verduras y frutas de temporada para toda la familia", precio: 15990, stock: 50, categoria: "familiar" },
      { nombre: "Caja Vegana Premium", descripcion: "Selección vegana con superalimentos", precio: 18990, stock: 30, categoria: "vegana" },
      { nombre: "Caja Detox Semanal", descripcion: "Jugos y verduras para una semana de detox", precio: 12990, stock: 20, categoria: "detox" },
      { nombre: "Caja Frutas de Estación", descripcion: "Las mejores frutas según la temporada", precio: 9990, stock: 40, categoria: "frutas" },
    ];
    ejemplos.forEach(data => {
      const id = uuidv4();
      this._store.set(id, new Producto({ id, ...data }));
    });
  }

  findAll() { return Array.from(this._store.values()); }
  findById(id) { return this._store.get(id) || null; }
  create(data) {
    const id = uuidv4();
    const producto = new Producto({ id, ...data });
    this._store.set(id, producto);
    return producto;
  }
  update(id, data) {
    const producto = this._store.get(id);
    if (!producto) return null;
    const actualizado = new Producto({ ...producto, ...data, id });
    this._store.set(id, actualizado);
    return actualizado;
  }
  delete(id) {
    if (!this._store.has(id)) return false;
    this._store.delete(id);
    return true;
  }
}

module.exports = new ProductoRepository();
