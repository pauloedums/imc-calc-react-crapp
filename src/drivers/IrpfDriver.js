import HttpUtil from "../http/HttpUtil.js";

export default class IrpfDriver {
    constructor() {
        this.xhr = new HttpUtil();
    }

    async calculate(person) {
        const response = await this.xhr.post("http://localhost:8080", "/irpf/calculate", person.toObj());
        return await response.json();
    }
}