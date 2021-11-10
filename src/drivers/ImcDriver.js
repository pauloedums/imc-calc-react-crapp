import HttpUtil from "../http/HttpUtil.js";

export default class ImcDriver {
    constructor() {
        this.xhr = new HttpUtil();
    }

    async calculate(person) {
        const response = await this.xhr.post("http://localhost:8080", "/imc/calculate", person.toObj());
        return await response.json();
    }
}