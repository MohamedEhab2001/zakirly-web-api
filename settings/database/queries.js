const carCount = (data) => {
  const brandCondition = data.brand_id ? `AND "Brands"."id" = ${data.brand_id}` : "";
  if(data.brand_id){
    delete data["brand_id"]
  }
  const whereCondition = Object.keys(data)
    .map((key) => `"Cars"."${key}" = '${data[key]}'`)
    .join(" AND ");
  return `
      SELECT COUNT(DISTINCT "Cars"."id") AS "count"
      FROM "Cars"
      LEFT JOIN "BrandsCategories" AS "model" ON "Cars"."brand_category_id" = "model"."id"
      LEFT JOIN "Brands" AS "brand" ON "model"."brand_id" = "brand"."id"
      LEFT JOIN "Attachments" AS "images" ON "Cars"."id" = "images"."entity_id" AND "images"."model" = 'Car'
      WHERE 1 = 1
      ${whereCondition ? `AND ${whereCondition}` : ""}
      ${brandCondition}
    `;
};

module.exports = { carCount };
