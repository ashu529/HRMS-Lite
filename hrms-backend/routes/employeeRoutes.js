const express = require("express");
const router = express.Router();
const Employee = require("../models/Employee");

// Add employee
router.post("/", async (req, res) => {
  try {
    const { employeeId, fullName, email, department } = req.body;

    if (!employeeId || !fullName || !email || !department) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const exists = await Employee.findOne({ employeeId });
    if (exists) {
      return res.status(409).json({ error: "Employee already exists" });
    }

    const employee = await Employee.create(req.body);
    res.status(201).json(employee);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// Get all employees
router.get("/", async (req, res) => {
  const employees = await Employee.find().sort({ createdAt: -1 });
  res.json(employees);
});

// Delete employee
router.delete("/:employeeId", async (req, res) => {
  await Employee.findOneAndDelete({
    employeeId: req.params.employeeId
  });
  res.json({ message: "Employee deleted" });
});

module.exports = router;
