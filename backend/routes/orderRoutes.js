import express from 'express'
const router = express.Router()

import {addOrderItems, getOrderById, updateOrderToPaid, updateOrderToDelivered, getOrders} from '../controllers/orderController.js'
import { protect, admin } from '../middleware/authMiddleWare.js'

router.route('/:id').get(protect, getOrderById)
router.route('/:id/pay').get(protect, updateOrderToPaid)
router.route('/').post(protect, addOrderItems).get(protect, admin, getOrders)

router.route('/:id/deliver').put(protect, admin, updateOrderToDelivered)
router.route('/:id').get(protect, getOrderById)

export default router
