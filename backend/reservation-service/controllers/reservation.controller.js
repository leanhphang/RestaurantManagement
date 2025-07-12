import reservationService from "../services/reservation.service.js";

const reservationController = {
  createReservation: async (req, res) => {
    try {
      const data = req.body;

      const reservation = await reservationService.createReservation(data);
      res.status(201).json({
        message: "Reservation created successfully",
        reservation: reservation,
        success: true,
      });
    } catch (error) {
      console.error("Error creating reservation:", error);
      res
        .status(500)
        .json({ message: "Internal server error", success: false });
    }
  },

  assignTable: async (req, res) => {
    res.send("Assign table to reservation endpoint");
  },

  checkInReservation: async (req, res) => {
    res.send("Check-in reservation endpoint");
  },

  getAllReservations: async (req, res) => {
    try {
      const reservations = await reservationService.getAllReservations();
      res.status(200).json({
        message: "Reservations fetched successfully",
        reservations: reservations,
        success: true,
      });
    } catch (error) {
      console.error("Error fetching reservations:", error);
      res
        .status(500)
        .json({ message: "Internal server error", success: false });
    }
  },

  getReservationByPhone: async (req, res) => {
    res.send("Get reservation by customer phone endpoint");
  },

  deleteReservation: async (req, res) => {
    res.send("Delete reservation endpoint");
  },
};

export default reservationController;
