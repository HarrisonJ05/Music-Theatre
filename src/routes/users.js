const {User} = require('../../models/index.js');
const {router} = require('express');
const userRouter = router();

//get all users
userRouter.get('/', async(req, res) => {
    const users = await User.findAll();
    res.status(200).json(users)
});

//get one user
userRouter.get('/:id', async(req, res) => {
    const user = await User.findByPk(req.params.id);
    res.status(200).json(user)
});

//get all shows watched by a user
userRouter.get('/:id', async(req, res) => {
    const user = await User.findByPk(req.params.id);
    const shows = await user.getShows();
    res.status(200).json(shows)
});

//put a user to a show they have watched
userRouter.put('/:id', async(req, res) => {
    const user = await User.findByPk(req.params.id);
    const show = req.body.show;
    user.addShows(show);
    res.status(200).json(user)
});

module.exports = userRouter;