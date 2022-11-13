import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setData({});
    }, 100);
  }, []);

  const onClick = () => setToggle((prev) => !prev);

  return (
    <div>
      <h2 data-testId="value-elem">{value}</h2>

      {data && <h2 style={{ color: "red" }}>Data</h2>}

      {toggle && <div data-testId="toggle-elem">toggle</div>}

      <h1>Hello world</h1>

      <button data-testId="toggle-btn" onClick={onClick}>
        Click me
      </button>

      <input
        type="text"
        placeholder="value"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default App;
