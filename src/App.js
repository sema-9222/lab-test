import "./App.css";
import React, { useState } from "react";
import { GettingData } from "./gettingData/GettingData";
import { Introduction } from "./components/Introduction";
import { Trial } from "./components/trial";
import { Instruction } from "./components/instruction";
import Introduction2 from "./components/introduction2";
import Introduction3 from "./components/introduction3";
import { TrialFailure } from "./components/trialFaliure";

function App() {
  const [page, setPage] = useState("");

  return (
    <div className="app">
      {(() => {
        switch (page) {
          case "instruction2":
            return <Introduction2 onClick={() => setPage("introduction3")} />;
          case "introduction3":
            return <Introduction3 onClick={() => setPage("trial")} />;
          case "trial":
            return (
              <Trial
                onSuccess={() => setPage("instruction")}
                onFailure={() => setPage("trialFail")}
              />
            );
          case "trialFail":
            return <TrialFailure onClick={() => setPage("trial")} />;
          case "instruction":
            return <Instruction onClick={() => setPage("gettingdata")} />;
          case "gettingdata":
            return <GettingData className="data" />;
          default:
            return <Introduction onClick={() => setPage("instruction2")} />;
        }
      })()}
    </div>
  );
}
export default App;
