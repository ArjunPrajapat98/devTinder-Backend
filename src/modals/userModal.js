import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    /* ================= BASIC TYPES ================= */

    firstName: {
      type: String,
      required: [true, "First name is required"],
      trim: true,
      minlength: 2,
      maxlength: 50,
    },

    lastName: {
      type: String,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Invalid email format"],
      index: true,
    },

    password: {
      type: String,
      required: true,
      select: false, // ❗ Security best practice
    },

    /* ================= NUMBER ================= */

    age: {
      type: Number,
      min: 0,
      max: 120,
    },

    /* ================= BOOLEAN ================= */

    isActive: {
      type: Boolean,
      default: true,
    },

    /* ================= DATE ================= */

    lastLogin: {
      type: Date,
      default: null,
    },

    /* ================= ENUM ================= */

    role: {
      type: String,
      enum: ["USER", "ADMIN", "MANAGER"],
      default: "USER",
    },

    /* ================= ARRAY ================= */

    skills: {
      type: [String], // Array of strings
      default: [],
    },

    /* ================= OBJECT / SUBDOCUMENT ================= */

    address: {
      street: String,
      city: String,
      state: String,
      pincode: {
        type: String,
        match: [/^\d{6}$/, "Invalid pincode"],
      },
    },

    /* ================= MIXED ================= */

    metadata: {
      type: mongoose.Schema.Types.Mixed, // flexible JSON
    },

    /* ================= OBJECT ID (RELATION) ================= */

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userModal", // self reference / admin who created
    },

    /* ================= MAP ================= */

    preferences: {
      type: Map,
      of: String,
    },

    /* ================= DECIMAL ================= */

    walletBalance: {
      type: mongoose.Schema.Types.Decimal128,
      default: 0.0,
    },

    /* ================= ARRAY OF SUBDOCUMENTS ================= */

    loginHistory: [
      {
        ip: String,
        device: String,
        loggedAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const userModal = mongoose.model("userModal", userSchema);
