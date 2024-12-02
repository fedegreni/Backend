import { Router } from "express";
const   chatRouter = Router()

chatRouter.get('/', (req, res) => {
    res.render('template/chat')
}) 
export default chatRouter