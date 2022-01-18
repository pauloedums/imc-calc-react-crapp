import React from "react";
import IrpfForm from "../views/forms/IrpfForm";
import IrpfView from "../views/IrpfView";

const OtherApp = () => (
  <div className="container">
    <div className="data">
      <IrpfForm />
    </div>
    <IrpfView className="result" />
  </div>
)

export default OtherApp