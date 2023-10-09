const db = require("./db.service");
const helper = require("../utils/helper.util");
const config = require("../configs/general.config");

async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const perPage = config.listPerPage;
  const sql = `SELECT district_number,district_name, total_students_in_district , resident_enrolled , open_enroll_out , open_enroll_in , statewide_voluntary_preschool , total_students_served  FROM ia_school_districts.\`certified_enrollment_22-23\``;
  // const sql = `SELECT district_number,district_name, total_students_in_district , resident_enrolled , open_enroll_out , open_enroll_in , statewide_voluntary_preschool , total_students_served  FROM ia_school_districts.\`certified_enrollment_22-23\` LIMIT ${offset}, ${perPage}`;

  const rows = await db.query(sql, [offset, perPage]);

  // const rows = await db.query(`SELECT * FROM art LIMIT 0,10;`);

  const data = helper.emptyOrRows(rows);
  // const meta = { page };

  return {
    data,
    // meta,
  };
}

module.exports = {
  getMultiple,
};
