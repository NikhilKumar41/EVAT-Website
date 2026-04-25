import express from "express";
import WeatherAwareRoutingController from "../controllers/weather-aware-routing-controller";

const router = express.Router();

router.post("/predict", WeatherAwareRoutingController.predict);

export default router;