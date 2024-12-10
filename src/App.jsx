import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages import
import HomePage from "./pages/HomePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index Component={HomePage} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
