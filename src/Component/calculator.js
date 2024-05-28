import { useState } from "react";
import "./styles.css";
const Calculator = () => {
  const [value, setValue] = useState("");

  function handleClick(e) {
    setValue(value + e.target.name);
  }

  function backSpace() {
    setValue(value.slice(0, -1));
  }

  function clear() {
    setValue("");
  }

  function calculate() {
    try {
      setValue(eval(value).toString());
    } catch (error) {
      setValue("Error");
    }
  }

  return (
    <div className="container">
      <div className="calculator">
        <div className="form">
          <div className="display">
            <input type="text" value={value} placeholder="0" />
          </div>
          <div>
            <button onClick={clear} id="clear">
              AC
            </button>
            <button onClick={backSpace} id="backSpace">
              DE
            </button>
            <button name="." onClick={handleClick}>
              .
            </button>
            <button name="/" onClick={handleClick}>
              /
            </button>
          </div>
          <div>
            <button name="7" onClick={handleClick}>
              7
            </button>
            <button name="8" onClick={handleClick}>
              8
            </button>
            <button name="9" onClick={handleClick}>
              9
            </button>
            <button name="*" onClick={handleClick}>
              *
            </button>
          </div>
          <div>
            <button name="4" onClick={handleClick}>
              4
            </button>
            <button name="5" onClick={handleClick}>
              5
            </button>
            <button name="6" onClick={handleClick}>
              6
            </button>
            <button name="+" onClick={handleClick}>
              +
            </button>
          </div>
          <div>
            <button name="1" onClick={handleClick}>
              1
            </button>
            <button name="2" onClick={handleClick}>
              2
            </button>
            <button name="3" onClick={handleClick}>
              3
            </button>
            <button name="-" onClick={handleClick}>
              -
            </button>
          </div>
          <div>
            <button name="00" onClick={handleClick}>
              00
            </button>
            <button name="0" onClick={handleClick}>
              0
            </button>
            <button className="equal" onClick={calculate}>
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
