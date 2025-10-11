
const Service = require("..");
const OrderRepo = require("../../repositories/Order");
const OrderProductService = require("../OrderProduct");
const Zakirly = require("../../helpers/Zakirly");
const UserService = require("../User");
class OrderService extends Service {
  constructor(data = null, id = null) {
    super(data, id);
  }

  async create() {    
    this._checkIfDataProvided(null , ["userId" , "info" , "items"]);

    const total = this.data.items.reduce((total , item) => {
      return total + item.price * item.quantity;
    }, 0);
    const courses = this.data.items.filter(item => item.type === "course" && item?.kind === "online");
    const books = this.data.items.filter(item => item.type === "book");
    


    const [record , transaction] = await OrderRepo.create({
      user_id:this.data.userId,
      delevried:!books.length,
      shopping_info:this.data.info,
      total:total,
    });

    
    if(courses.length > 0){
      await this.#CheckOnlineDashboard(courses);
    }

    const orderProducts = this.data.items.map((item) => {
      const id = item.id;
      delete item.id;
      return {
        ...item,
        price: item.price,
        entity_id: id,
        total: item.price * item.quantity,
        order_id: record.id,
      };
    });

    const orderProductService = new OrderProductService(orderProducts , null , transaction);
    await orderProductService.bulkCreate();

    await transaction.commit();
    return record;
  }

  async getAll() {
    return await OrderRepo.getAll(this.data);
  }

  async count() {
    return await OrderRepo.count(this.data);
  }

  async getById() {
    return await OrderRepo.ById(this.id);
  }

  async update() {
    this._checkIfDataProvided();
    this._checkIfIdProvided();
    return await OrderRepo.update(this.id, this.data);
  }


  /**---------------------------------------*/
  async #CheckOnlineDashboard(courses) {
    const zakirly = new Zakirly();
    const {userId} = this.data;
    const userServant = new UserService(null, userId);
    const user = await userServant.getById();
    const student = await zakirly.getStudentByEmail(user.email);
    const groups = courses.map(course => course.group);
    
    if(!student){
      await zakirly.createStudent({
        email : user.email,
        name : user.name,
        account: ["mohamedelsherbeny@zakirly.onmicrosoft.com"],
        password : Math.random().toString(36).slice(-8),
        groups : [...groups],
      });
    }
    if(student){
      delete student._id;
      delete student.__v;
      await zakirly.updateStudent(student.unique_id, 
        {...student , groups : [...student.groups , ...groups]});
    }
  }
}

module.exports = OrderService;  
