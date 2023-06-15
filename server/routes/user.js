import express from "express";
import { registerCity, getCities, deleteCity } from "../controllers/user.js";
import { verifyJwt } from "../middleware/verifyJwt.js";

const router = express.Router();

router.post("/city/save", verifyJwt, registerCity);
router.post("/city/delete", verifyJwt, deleteCity);
router.get("/city/get", verifyJwt, getCities);

// router.get("/id", getId);

export default router;
