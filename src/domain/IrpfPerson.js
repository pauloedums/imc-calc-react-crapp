export default class IrpfPerson {
  constructor(totalSalary, dependentsNumber) {
    if (typeof totalSalary !== "number" || isNaN(totalSalary))
      throw Error("total salary is not a number");

    if (typeof dependentsNumber !== "number" || isNaN(dependentsNumber))
      throw Error("dependents is not a number");

    if (totalSalary <= 0 || dependentsNumber <= 0)
      throw Error("total salary and dependents must be bigger than zero");

    this.totalSalary = totalSalary;
    this.dependentsNumber = dependentsNumber;
    this.irpf = null;
    this.irpfDescription = "N/A";
  }

  isValid() {
      return this.totalSalary && this.dependentsNumber;
  }


  get totalSalary() {
    return this._totalSalary;
  }

  set totalSalary(theTotalSalary) {
    this._totalSalary = theTotalSalary;
  }

  get dependentsNumber() {
    return this._dependentsNumber;
  }

  set dependentsNumber(theDependentsNumber) {
    this._dependentsNumber = theDependentsNumber;
  }

  get irpf() {
    return this._irpf;
  }

  set irpf(theIrpf) {
    this._irpf = theIrpf;
  }

  get irpfDescription() {
    return this._irpfDescription;
  }

  set irpfDescription(theIrpfDescription) {
    this._irpfDescription = theIrpfDescription;
  }

  toObj() {
      return {
        totalSalary: this._totalSalary,
        dependentsNumber: this._dependentsNumber
      }
  }
  
}