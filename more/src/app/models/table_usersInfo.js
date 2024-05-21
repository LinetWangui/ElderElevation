import { model, models, Schema } from "mongoose";

const UserInfoSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    DOB: { type: Date },
    phone: { type: String },
    streetAddress: { type: String },
    city: { type: String },
    country: { type: String },
  },
  { timestamps: true }
);

export const UserInfo = models?.UserInfo || model('UserInfo', UserInfoSchema);

