import mongoose from "mongoose";

const CitySchema = new mongoose.Schema({
  userId: {
    type: String,
    required: false,
    min: 3,
    max: 50,
  },
  cityName: {
    type: String,
    required: true,
    max: 50,
    unique: true,
  },
});

const City = mongoose.model("City", CitySchema);
export default City;
