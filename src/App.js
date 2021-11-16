import React, { useState } from "react";

import ImcView from "./views/ImcView"
import ImcForm from "./views/forms/ImcForm";

export default function App() {
  const [person, setPerson] = useState(null)
  const props = { person, setPerson }

   return (
    <div className="container">
      <div className="data">
        <ImcForm {...props} />
      </div>
      <ImcView className="result" person={person} />
    </div>
  );
}
