const OrderService = require('../services/Order');


const createInvoice = async (req, res) => {
    const order = req.body.pay_load;
    const servant = new OrderService(JSON.parse(order));    
    await servant.create();
    res.status(200).json({ message: 'Invoice created successfully' });

};

module.exports = {
    createInvoice
};
