const Post = require('../models/Post');

class PostController {
    index(req, res, next) {
        Post.find({})
            .then((posts) => {
                posts = posts.map((post) => post.toObject());
                res.render('index', { title: 'Express', posts });
            })
            .catch((error) => next(error));
    }
}

module.exports = new PostController();
