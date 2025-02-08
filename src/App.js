import { useState } from "react";

import Counter from "./components/Counter";

import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="main">
      <h1>شمارنده من</h1>
      <Counter
        count={count}
        increase={increase}
        decrease={decrease}
        reset={reset}
      />
    </div>
  );
};
export default App;
