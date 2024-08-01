import express from "express"
import {getItem,postItem,updateItem,deleteItem} from '../controllers/itemController.js'
const router = express.Router()
router.post('/',postItem)
router.get('/',getItem)
router.put('/:id',updateItem)
router.delete('/:id',deleteItem)
export default router