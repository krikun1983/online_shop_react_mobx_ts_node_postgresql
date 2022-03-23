import ApiError from './ApiError/ApiError.js';

const errorHandleMiddleware = (err, req, res, next) => {
  if (err instanceof ApiError) {
    return res.status(err.status).json({ message: err.message });
  }

  return res.status(500).json({ message: 'Error unknown' });
}

export default errorHandleMiddleware;