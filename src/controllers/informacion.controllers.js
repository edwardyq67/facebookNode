const catchError = require('../utils/catchError');
const InformacionImg = require('../models/InformacionImg');
const {Op}=require('sequelize')
const getAll = catchError(async(req, res) => {
    const {imagen,posicion,color}=req.query
    const where={}
    if(color)where.color={[Op.iLike]:`%${color}%`}
    const results = await InformacionImg.findAll({
        where
    });
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const result = await InformacionImg.create(req.body);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await InformacionImg.findByPk(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await InformacionImg.destroy({ where: {id} });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await InformacionImg.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
}