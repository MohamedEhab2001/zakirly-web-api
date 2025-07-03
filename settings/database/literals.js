const getFav = (id) => {
  return `(SELECT EXISTS (SELECT * FROM "Wishlists" WHERE user_id = ${id} AND car_id = "Car".id))`;
};
module.exports = { getFav };
