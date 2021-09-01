export class Client {
    private _id: number
    private _name: string
    private _phone: string

    constructor(id: number, name: string, phone: string) {
        this._id = id
        this._name = name
        this._phone = phone
    }

    get id(): number {
        return this._id
    }

    get name(): string {
        return this._name
    }

    get phone(): string {
        return this._phone
    }
}