
const models = require("../../models");
const ModelValidation = require("../../helpers/Validations/ModelValidation");
const { extractKeys } = require("../../helpers/HelperMethods");
class BookRepository {
  static async create(data) {
    const transaction = await models.sequelize.transaction();
    const modelValidate = new ModelValidation(models.Book);
    modelValidate.ModelKeysValidate(data, []);
    const record = await models.Book.create(data , {transaction});
    return [record , transaction];
  }

  static async getAll(data) {
    const [country,p] = extractKeys(data, ["country" , "p"])
    const whereCountry = !p ? {
      isocode : country
  } : {}

  

    return await models.Book.findAll({
      where : data,
      include : [
        {
            model : models.Section,
            as : "section"
        },
        {
            model : models.Age,
            as : "age"
        },
        {
          model : models.Prices,
          as : "prices",
          include : [
              {
                  model : models.Currency,
                  as : "currency",
                  where : whereCountry
              }
          ],
          where : {
              type : "book"
          }
      }
      ]
    });
  }

  static async ById(data,id) {
    const [country] = extractKeys(data,["country"])
    return await models.Book.findByPk(id , {
      include : [
        {
            model : models.Section,
            as : "section"
        },
        {
            model : models.Age,
            as : "age"
        },
        {
          model : models.Prices,
          as : "prices",
          include : [
              {
                  model : models.Currency,
                  as : "currency",
                  where : {
                      isocode : country
                  }
              }
          ],
          where : {
              type : "book"
          }
      }
      ]
    });
  }

  static async update(id, data) {
    return await models.Book.update(data, { where: { id } });
  }
}

module.exports = BookRepository;
