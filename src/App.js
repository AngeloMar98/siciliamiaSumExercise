import { useState } from "react";
import "./index.css";
import {
  simpleLoopSum,
  recursiveSum,
  formulaSum,
} from "./calculationFunctions";

function App() {
  return (
    <div className="App">
      <Calculator />
    </div>
  );
}

function Calculator() {
  const [currentTab, setCurrentTab] = useState(1);
  return (
    <div className="w-[600px] mx-auto">
      <Tabs currentTab={currentTab} onClick={setCurrentTab} />
      <CalcWindowsCollection currentTab={currentTab} />
    </div>
  );
}

function Tabs({ currentTab, onClick }) {
  return (
    <div className="rounded-t-sm text-white border-2 border-b-0 border-darkGrayCyan overflow-hidden  w-fit h-fit mx-auto">
      <span
        onClick={() => onClick(1)}
        className={` px-2 py-2 hover:cursor-pointer ${
          currentTab === 1 ? "bg-white" : "bg-darkerGrayCyan"
        } ${currentTab === 1 ? "text-black" : ""}
         hover:bg-darkGrayCyan`}
      >
        1
      </span>
      <span
        onClick={() => onClick(2)}
        className={` px-2 py-2 hover:cursor-pointer ${
          currentTab === 2 ? "bg-white" : "bg-darkerGrayCyan"
        } ${currentTab === 2 ? "text-black" : ""}
         hover:bg-darkGrayCyan`}
      >
        2
      </span>
      <span
        onClick={() => onClick(3)}
        className={` px-2 py-2 hover:cursor-pointer ${
          currentTab === 3 ? "bg-white" : "bg-darkerGrayCyan"
        } ${currentTab === 3 ? "text-black" : ""}
         hover:bg-darkGrayCyan`}
      >
        3
      </span>
    </div>
  );
}

function CalcWindowsCollection({ currentTab }) {
  return (
    <div className="min-h-[400px]">
      {currentTab === 1 && (
        <CalcWindow
          calculation={simpleLoopSum}
          title={"Simple Summation"}
          code={`
      function simpleLoopSum(n) {
      let sum = n;
      for (let i = 1; i < n; i++) {
      sum += i;
      }
      return sum;
      }`}
        />
      )}
      {currentTab === 2 && (
        <CalcWindow
          calculation={recursiveSum}
          title={"Recursive Summation"}
          code={`
     function recursiveSum(n, loopNum = 1, prevSum = 0) {
     const sum = prevSum + loopNum;
     return loopNum < n 
     ? recursiveSum(n, loopNum + 1, sum) 
     : sum;
     }`}
        />
      )}
      {currentTab === 3 && (
        <CalcWindow
          calculation={formulaSum}
          title={"Mathematical Formula"}
          code={`
    function formulaSum(n) {
    return (n / 2) * (1 + n);
    }`}
        />
      )}
    </div>
  );
}

function CalcWindow({ calculation, title, code }) {
  const [number, setNumber] = useState(1);

  return (
    <div className="bg-darkerGrayCyan border-2 rounded-sm border-darkGrayCyan p-2 h-full">
      <h2 className="text-white text-3xl text-center mb-4 ">{title}</h2>
      <pre className="text-white code mb-4 text-left ">{code}</pre>
      <div className="flex flex-col w-1/2 mx-auto">
        <input
          value={number}
          onChange={(e) =>
            setNumber((n) =>
              !isNaN(Number(e.target.value)) ? Number(e.target.value) : n
            )
          }
        />
        <p className="text-3xl text-white text-center">{calculation(number)}</p>
      </div>
    </div>
  );
}

export default App;
