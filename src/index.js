const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const productoRoutes = require("./routes/productoRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();
const PORT = process.env.PORT || 3002;

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/health", (req, res) => {
  res.json({ service: "MS Productos", status: "UP", timestamp: new Date().toISOString() });
});

app.use("/productos", productoRoutes);

app.use((req, res) => {
  res.status(404).json({ success: false, error: `Ruta ${req.path} no encontrada` });
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`MS Productos corriendo en puerto ${PORT}`);
});
