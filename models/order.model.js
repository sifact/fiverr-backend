import mongoose from "mongoose";
const { Schema } = mongoose;

const orderSchema = new Schema(
    {
        gigId: {
            type: String,
            required: true,
        },
        sellerId: {
            type: String,
            required: true,
        },
        buyerId: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        star: {
            type: Number,
            required: true,
            enum: [1, 2, 3, 4, 5],
        },
        title: {
            type: String,
            required: true,
        },
        img: {
            type: String,
            required: true,
        },

        isCompleted: {
            type: Boolean,
            default: false,
        },
        paymentIntent: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Order", orderSchema);
