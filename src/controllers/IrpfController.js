export default class IrpfController {
    constructor() {
        this.IrpfDriver = null;
    }
  
    async calculate(person) {
        if (!this.IrpfDriver) {
            const { default: IrpfDriver } = await import("../drivers/IrpfDriver.js")
            this.IrpfDriver = new IrpfDriver();
        }
  
        return await this.IrpfDriver.calculate(person);
    }
  }