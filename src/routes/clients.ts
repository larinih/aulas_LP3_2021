import { Request, Response, Router } from 'express'
import { CLIENT_RENEG_WINDOW } from 'tls'
import { ClientController } from '../controllers/ClientController'
import { Client } from '../models/Client'

export const clientsRouter = Router()
const clientCtrl = new ClientController()
let idCounter = 1

clientsRouter.post('/', (req: Request, res: Response) => {
    /*const name = req.body.name
    const phone = req.body.phone*/

    /**
     * Associação por desestruturação
     */
    const { name, phone } = req.body
    const client = new Client(idCounter, name, phone)
    if (clientCtrl.save(client)) {
        idCounter++
        /**
         * 201 - Created
         */
        return res.status(201).json({
            message: 'Client created'
        })
    } else {
        /**
         * 409 - Conflict
         */
        return res.status(409).json({
            message: 'A client with this id already exists'
        })
    }

})

clientsRouter.get('/', (req: Request, res: Response) => {
    return res.json({ clients: clientCtrl.findAll() })
})


clientsRouter.delete('/:id', (req: Request, res: Response) => {
    const { id } = req.params
    const idClients: number = parseInt(id)
    clientCtrl.delete(idClients)
    return res.status(204).json({
      
    })
})


clientsRouter.put('/', (req: Request, res: Response) => {
  
    const { id, name, phone } = req.body
    const client = new Client(id, name, phone)
    if (clientCtrl.update(client)) {
     
     
        return res.status(202).json({
            message: 'Sucesso'
        })
   
    }

})


