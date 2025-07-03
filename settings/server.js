class Server {
  constructor() {}

  static async fireServer(app, port, setUpFunctions) {
    try {
      for (const setUp of setUpFunctions) {
        await setUp();
      }
      app.listen(port, () => {
        console.log(`Server is fired successfully on port ${port}`);
      });
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  }
}

module.exports = Server;
