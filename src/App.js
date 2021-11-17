import React from "react";

import ImcView from "./views/ImcView"
import ImcForm from "./views/forms/ImcForm";

const App = () => (
  <div className="container">
    <div className="data">
      <ImcForm />
    </div>
    <ImcView className="result" />
  </div>
)

export default App