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

  getReservationByPhone: async (phone) => {
    const reservations = await reservationModel
      .find({ customerPhone: phone })
      .sort({ checkInTime: 1 });
    return reservations;
  },

  cancelReservation: async (id) => {
    const reservation = await reservationModel.findByIdAndUpdate(
      id,
      {
        status: "Canceled",
        $push: {
          statusHistory: {
            status: "Canceled",
            changeAt: new Date(),
          },
        },
      },
      { new: true }
    );
    return reservation;
  },

  checkInReservation: async (id) => {
    const reservation = await reservationModel.findById(id);
    if (!reservation) {
      throw new Error("Reservation not found");
    }
    reservation.status = "Arrived";
    reservation.statusHistory.push({
      status: "Arrived",
      changeAt: new Date(),
    });
    await reservation.save();
    return reservation;
  },
};

export default reservationService;
