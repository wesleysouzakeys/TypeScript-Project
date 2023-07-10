export class Pessoa {
    private _name: String
    private _role: String
    private _image: String
    private _team: String

    constructor(name: String, role: String, image: String, team: String) {
        this._name = name
        this._role = role
        this._image = image
        this._team = team
    }

    mostra() {
        console.log(this._name)
        console.log(this._role)
        console.log(this._image)
        console.log(this._team)
    }
}