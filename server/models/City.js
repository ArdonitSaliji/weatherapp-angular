import mongoose from "mongoose";

const CitySchema = new mongoose.Schema({
  userId: {
    type: String,
    required: false,
    min: 3,
    max: 50,
  },
  cityCoords: {
    type: Object,
    required: true,
    unique: false,
  },
});

const City = mongoose.model("City", CitySchema);
export default City;
