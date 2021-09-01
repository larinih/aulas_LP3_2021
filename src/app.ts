import express from 'express'
import cors from 'cors'
import logger from 'morgan'

import { clientsRouter } from './routes/clients'

/**
 * Cria uma aplicação com express
 */
export const app = express()

/**
 * Libera o acesso aos serviços
 */
app.use(cors())

/**
 * Habilitar os logs avançados
 */
app.use(logger('dev'))

/**
 * Habilitar respostas em formato JSON
 */
app.use(express.json())


/**
 * Registra o caminho /clients e
 * associa ao roteador clientsRouter
 */
app.use('/clients', clientsRouter)


