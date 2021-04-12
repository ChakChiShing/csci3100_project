const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  expense_id: {
    type: Number,
    required: true,
    unique: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  expenseType: {
    type: String,
  },
  description: {
    type: String,
  },
  date: {
    type: Date,
    min: "1901-01-01",
    max: "2099-12-31",
  },
});

const incomeSchema = new mongoose.Schema({
  income_id: {
    type: Number,
    required: true,
    unique: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  incomeType: {
    type: String,
  },
  description: {
    type: String,
  },
  date: {
    type: Date,
    min: "1901-01-01",
    max: "2099-12-31",
  },
});

const balanceSchema = new mongoose.Schema({
  expense: {
    type: expenseSchema,
    default: () => ({}),
  },
  aquaName: {
    type: incomeSchema,
    default: () => ({}),
  },
});

modules.exports = mongoose.models("Balance", balanceSchema);
