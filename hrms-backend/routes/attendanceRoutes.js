const express = require("express");
const router = express.Router();
const Attendance = require("../models/Attendance");

// Mark attendance
router.post("/", async (req, res) => {
  try {
    const { employeeId, date, status } = req.body;

    if (!employeeId || !date || !status) {
      return res.status(400).json({ error: "All fields required" });
    }

    const record = await Attendance.create(req.body);
    res.status(201).json(record);
  } catch (err) {
    if (err.code === 11000) {
      return res
        .status(409)
        .json({ error: "Attendance already marked" });
    }
    res.status(500).json({ error: "Server error" });
  }
});

// Get attendance for employee
router.get("/:employeeId", async (req, res) => {
  const records = await Attendance.find({
    employeeId: req.params.employeeId
  }).sort({ date: -1 });

  res.json(records);
});

module.exports = router;
