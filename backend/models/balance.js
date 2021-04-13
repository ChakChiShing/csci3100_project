const mongoose = require("mongoose");

const currencySchema = new mongoose.Schema({
  currency_choice: {
    type: String,
    default: "HKD",
  },
});

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
  expenseType_id: {
    type: Number,
    required: true,
    unique: true,
  },
  description: {
    type: String,
  },
  date: {
    type: Date,
    min: "1901-01-01",
    max: "2099-12-31",
  },
  budget: {
    type: Number,
    min: 0,
    max: 999999,
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
  incomeType_id: {
    type: Number,
    required: true,
    unique: true,
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
  currency: {
    type: currencySchema,
    default: () => ({}),
  },
});

modules.exports = mongoose.models("Balance", balanceSchema);
