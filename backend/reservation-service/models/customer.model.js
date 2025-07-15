import mongoose from "mongoose";

const customerSchema = new mongoose.Schemmm({
  name: {
    type: String,
    required: function () {
      return !this.isAnonymous; // name is required unless the customer is anonymous
    },
  },
  email: {
    type: String,
    required: function () {
      return !this.isAnonymous; // email is required unless the customer is anonymous
    },
  },
  phone: {
    type: String,
    required: function () {
      return !this.isAnonymous; // phone is required unless the customer is anonymous
    },
  },
  isAnonymous: {
    type: Boolean,
    default: false,
  },
});
const customerModel = mongoose.model("Customer", customerSchema);
export default customerModel;
