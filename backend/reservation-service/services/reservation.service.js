import reservationModel from "../models/reservation.model.js";

const reservationService = {
  createReservation: async (data) => {
    const { quantity, checkInTime } = data;

    data.checkInTime = new Date(checkInTime);

    data.deposit = quantity >= 6 ? 100000 : 0;

    const reservation = await reservationModel.create(data);

    reservation.statusHistory.push({
      status: "Pending",
      changeAt: new Date(),
    });

    await reservation.save();

    return reservation;
  },

  getAllReservations: async () => {
    const reservations = await reservationModel.find().sort({ checkInTime: 1 });
    return reservations;
  },
};

export default reservationService;
