function errorHandler(err, req, res, next) {
  const status = err.status || 500;
  console.error(`[ERROR] ${req.method} ${req.path} → ${status}: ${err.message}`);
  res.status(status).json({ success: false, error: err.message || "Error interno del servidor" });
}

module.exports = errorHandler;
