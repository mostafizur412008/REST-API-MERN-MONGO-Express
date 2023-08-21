const express = require('express');
const router = express.Router();
const {getAllusers, getOneusers, Createusers,Deleteusers,Updateusers  } = require('../controllers/user.controller')


router.get('/',getAllusers);
router.get('/:id', getOneusers);
router.delete('/:id', Deleteusers);
router.post('/', Createusers);
router.patch('/:id', Updateusers);



module.exports=router;

