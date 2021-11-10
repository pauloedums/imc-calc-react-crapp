export default class Person {
  constructor(theHeight, theWeight) {
    if (typeof theHeight !== "number" || isNaN(theHeight))
      throw Error("height is not a number");

    if (typeof theWeight !== "number" || isNaN(theWeight))
      throw Error("height is not a number");

    if (theHeight <= 0 || theWeight <= 0)
      throw Error("height and weight must be bigger than zero");

    this.height = theHeight;
    this.weight = theWeight;
    this.imc = null;
    this.imcDescription = "N/A";
  }

  isValid() {
      return this.weight && this.height;
  }

  get height() {
    return this._height;
  }

  set height(theHeight) {
    this._height = theHeight;
  }

  get weight() {
    return this._weight;
  }

  set weight(theWeight) {
    this._weight = theWeight;
  }

  get imc() {
    return this._imc;
  }

  set imc(theImc) {
    this._imc = theImc;
  }

  get imcDescription() {
    return this._imcDescription;
  }

  set imcDescription(theImcDescription) {
    this._imcDescription = theImcDescription;
  }

  toObj() {
      return {
          height: this._height,
          weight: this._weight
      }
  }

}
