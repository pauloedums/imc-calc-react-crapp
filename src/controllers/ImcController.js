export default class ImcController {
  constructor() {
      this.imcDriver = null;
  }

  async calculate(person) {
      if (!this.imcDriver) {
          const { default: ImcDriver } = await import("../drivers/ImcDriver.js")
          this.imcDriver = new ImcDriver();
      }

      return await this.imcDriver.calculate(person);
  }
}