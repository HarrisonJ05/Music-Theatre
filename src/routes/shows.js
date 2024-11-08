const {Show} = require('../../models/index.js');
const {Router} = require('express');
const showRouter = Router();

//get all shows

showRouter.get('/', async(req,res) => {
    const shows = await Show.findAll();
    res.status(200).json(shows)
});

//get one show
showRouter.get('/:id', async(req, res) => {
    const show = await Show.findByPk(req.params.id);
    res.status(200).json(show)
});

//get all users who watched a show
showRouter.get('/:id/users', async(req, res) => {
    const show = await Show.findByPk(req.params.id);
    const users = show.getUsers();
    res.status(200).json(users)
});

//put the available property of a show
showRouter.put('/:id/updateAvailabiltity', async(req, res) => {
    const show = await Show.findByPk(req.params.id);
    const {available} = req.body;
    show.update({available});
    res.status(200).json(show)
});

//delte a show
showRouter.delete('/:id/delete', async(req, res) => {
    const show = await Show.findByPk(req.params.id);
    show.destroy();
    res.status(200)
});

//get shows of a particular genre
showRouter.get('/genre', async(req, res) => {
    const {genre} = req.query;
    const shows = await Show.findAll({where: {genre: genre}});
    res.status(200).json(shows)
});

module.exports = showRouter;