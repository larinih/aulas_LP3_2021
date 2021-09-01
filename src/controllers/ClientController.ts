import { Client } from "../models/Client";

export class ClientController {

    /**
     * Isto é o nosso banco de dados!
     */
    private _clients: Client[]

    constructor() {
        this._clients = []
    }

    save(client: Client): boolean {
        const clientFound =
            this._clients.find(c => c.id == client.id)

        /**
         * Se não encontrou nenhum cliente com o
         * mesmo id do cliente recebido, salva o
         * novo cliente no "banco de dados"
         */
        if (!clientFound) {
            this._clients.push(client)
            return true
        }

        return false
    }

    update(client: Client): boolean {
        for (let i = 0; i < this._clients.length; i++) {
            if (client.id == this._clients[i].id) {
                this._clients[i] = client
                return true
            }
        }

        return false
    }

    delete(id: number): boolean {
        const length1 = this._clients.length
        this._clients = this._clients.filter(c => c.id != id)
        const length2 = this._clients.length
        return length2 < length1
    }

    findAll(): Client[] {
        return this._clients
    }
}