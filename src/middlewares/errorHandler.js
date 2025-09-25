import sendResponse from "../utils/response.js";

const errorHandler = (err, req, res, next) => {
  if (err) {
    const statusCode = err.statusCode || 500;
    sendResponse(res, err.message || "Internal Server Error", statusCode, null);
  }
  next();
};

export default errorHandler;
