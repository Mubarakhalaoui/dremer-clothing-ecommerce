module.exports = (req, res, next) => {
  // Check if the user role is 'admin'
  if (req.user.role !== "admin") {
    return res.status(403).send({ error: "Access denied. Admins only." });
  }
  // If the user is an admin, proceed to the next middleware/route handler
  next();
};
