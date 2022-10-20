class UsersController {
    index(req, res, next) {
        res.send('respond with a resource');
      }
}

module.exports = new UsersController;