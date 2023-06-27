import User from "../models/User.js";
import City from "../models/City.js";
/* REGISTER USER */
export const registerCity = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.user.token });
    console.log(req.body.cityCoords);
    console.log(user);
    if (!user && !req.body.cityCoords) return res.status(400);

    let city = new City({
      cityCoords: req.body.cityCoords,
      userId: user._id,
    });

    await city.save();

    return res.status(201).send({ msg: "City Created" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getCities = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.user.token });
    let cities = await City.find({ userId: user._id });

    if (!user) return res.status(403).send({ msg: "User not found" });

    if (cities.length > 0) return res.status(200).send(cities);
    else return res.status(204).send({ msg: "No cities found" });
    //
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteCity = async (req, res) => {
  let user = await User.findOne({ email: req.user.token });

  if (!user || !req.body.cityCoords)
    return res.status(400).send({ msg: "Bad Request" });

  await City.deleteOne({
    cityCoords: req.body.cityCoords,
    userId: user._id,
  });

  return res.send({ msg: "City deleted" });
};
