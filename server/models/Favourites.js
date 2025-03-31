import mongoose from "mongoose";

const FavouritesSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Refers to the User model
      required: true,
    },
    foodItems: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Food", // Refers to the Food model
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Favourites", FavouritesSchema);
