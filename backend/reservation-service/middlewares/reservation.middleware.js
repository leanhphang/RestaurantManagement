const validateReservationInput = (req, res, next) => {
  const data = req.body;

  const requiredFields = [
    "customerName",
    "customerPhone",
    "customerEmail",
    "quantity",
    "checkInTime",
  ];

  for (let fields of requiredFields) {
    if (!data[fields]) {
      return res.status(400).json({
        message: `${fields} is required`,
        success: false,
      });
    }
  }

  if (typeof data.quantity !== "number" || data.quantity <= 0) {
    return res.status(400).json({
      message: "Quantity must be a positive number",
      success: false,
    });
  }

  next();
};

export default { validateReservationInput };
