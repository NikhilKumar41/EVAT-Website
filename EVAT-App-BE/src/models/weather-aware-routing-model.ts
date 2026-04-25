import mongoose, { Schema, Document } from "mongoose";

export interface IWeatherAwareRouting extends Document {
  userId: string;
  email: string;

  // Request fields
  year: number;
  start_lat: number;
  start_lon: number;

  // Result fields from Python API
  prediction: number;
  dist_to_nearest_ev_m: number;
  ev_within_500m: number;
  avg_temp: number;
  total_prcp: number;
  used_SHAPE_Length: number;

  // Status tracking
  status: "pending" | "success" | "error";
  errorMessage?: string;

  createdAt: Date;
  updatedAt: Date;
}

const WeatherAwareRoutingSchema = new Schema<IWeatherAwareRouting>(
  {
    userId: { type: String, required: true },
    email: { type: String, required: true },

    // Request
    year: { type: Number, required: true },
    start_lat: { type: Number, required: true },
    start_lon: { type: Number, required: true },

    // Result
    prediction: { type: Number },
    dist_to_nearest_ev_m: { type: Number },
    ev_within_500m: { type: Number },
    avg_temp: { type: Number },
    total_prcp: { type: Number },
    used_SHAPE_Length: { type: Number },

    // Status
    status: {
      type: String,
      enum: ["pending", "success", "error"],
      default: "pending",
    },
    errorMessage: { type: String },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IWeatherAwareRouting>(
  "WeatherAwareRouting",
  WeatherAwareRoutingSchema
);