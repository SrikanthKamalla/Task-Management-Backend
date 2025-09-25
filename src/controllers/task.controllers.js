import Task from "../models/task.model.js";
import sendResponse from "../utils/response.js";

// Create a new task
export const createTask = async (req, res) => {
  try {
    const task = new Task({
      ...req.body,
      status: "pending",
      user: req.user.id,
    });

    await task.save();
    sendResponse(res, "Task created successfully", 201, task);
  } catch (err) {
    sendResponse(res, err.message, 400, null);
  }
};

// Get all tasks for a user with optional search
export const getTasks = async (req, res) => {
  console.log("object");
  try {
    const {
      search = "",
      status = "",
      priority = "",
      page = 1,
      limit = 10,
    } = req.query;

    console.log({ search, status, priority, page, limit });
    const filter = { user: req.user.id };
    if (search) filter.title = { $regex: search, $options: "i" };
    if (status) filter.status = status;
    if (priority) filter.priority = priority;

    const pageNumber = parseInt(page, 10);
    const limitNumber = parseInt(limit, 10);
    const skip = (pageNumber - 1) * limitNumber;

    const tasks = await Task.find(filter)
      .skip(skip)
      .limit(limitNumber)
      .sort({ createdAt: -1 });
    const total = await Task.countDocuments(filter);
    // console.log(total);
    // console.log(tasks);

    sendResponse(res, "Tasks fetched successfully", 200, {
      tasks,
      pagination: {
        total,
        page: pageNumber,
        limit: limitNumber,
        totalPages: Math.ceil(total / limitNumber),
      },
    });
  } catch (err) {
    console.log(err.message);
    sendResponse(res, err.message, 500, null);
  }
};

// Get a single task by ID
export const getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return sendResponse(res, "Task not found", 404, null);
    sendResponse(res, "Task fetched successfully", 200, task);
  } catch (err) {
    sendResponse(res, err.message, 500, null);
  }
};

// Update a task
export const updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) return sendResponse(res, "Task not found", 404, null);
    sendResponse(res, "Task updated successfully", 200, task);
  } catch (err) {
    sendResponse(res, err.message, 400, null);
  }
};

// Delete a task
export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return sendResponse(res, "Task not found", 404, null);
    sendResponse(res, "Task deleted successfully", 200, null);
  } catch (err) {
    sendResponse(res, err.message, 500, null);
  }
};
