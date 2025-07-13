import express from "express";
import reservationController from "../controllers/reservation.controller.js";
import reservationMiddleware from "../middlewares/reservation.middleware.js";

const route = express.Router();

route.post(
  "/",
  reservationMiddleware.validateReservationInput,
  reservationMiddleware.validateReservationTime,
  reservationController.createReservation
);
route.put("/:id/assign-table", reservationController.assignTable);
route.put("/:id/checkin", reservationController.checkInReservation);
route.get("/today", reservationController.getAllReservations);
route.get("/customer/:phone", reservationController.getReservationByPhone);
route.put("/:id/cancel", reservationController.cancelReservation);

export default route;
