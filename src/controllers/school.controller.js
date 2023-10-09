const schoolService = require("../services/school.service");

async function get(req, res, next) {
  try {
    res.json(await schoolService.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting data`, err.message);
    next(err);
  }
}

module.exports = {
  get,
};
