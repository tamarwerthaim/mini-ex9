const express = require('express');
const router = express.Router();
const articleController = require('../controllers/article');

router.route('/')
    .get(articleController.getArticles)     
    .post(articleController.createArticle); 

router.route('/:id')
    .get(articleController.getArticle)       
    .patch(articleController.updateArticle)  
    .delete(articleController.deleteArticle);

module.exports = router;