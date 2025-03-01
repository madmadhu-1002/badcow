import User from '../models/user.js';

const adminMiddleware = (req, res, next) => {
    console.log(req);
    if (!req.user || req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied. Admins only.' });
    }
    next();
  };
  
  export default adminMiddleware;
  