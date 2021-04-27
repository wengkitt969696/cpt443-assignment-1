import React, { useState } from "react";
import { conjunctions, adjectives, adverbs } from "./dictionary";
import { startState } from "./state/start-state";
import { HeaderBar } from "./components/header-bar";
import { LanguageBar } from "./components/language-bar";
import { TextInputArea } from "./components/input-area";
import { ResultArea } from "./components/result-area";
import { ActionArea } from "./components/action-area";
import { Loading } from "./components/loading";

export default function App() {
  const word = [...conjunctions, ...adjectives, ...adverbs];
  const [load, setLoad] = useState(false);
  const [inputText, setInputText] = useState("");
  const [resultText, setResultText] = useState([]);
  const [numberString, setNumberString] = useState({
    total: 0,
    accept: 0,
    reject: 0,
  });

  const startDFA = () => {
    setLoad(true);
    let timeout = null;
    const resultList = inputText.split(" ").map((word) => {
      return { word, status: startState(word.toLowerCase()) };
    });

    const { acceptNum, rejectNum } = findAcceptRejectNumber(resultList);

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      setNumberString({
        total: resultList.length,
        accept: acceptNum,
        reject: rejectNum,
      });
      setResultText(resultList);
      setLoad(false);
    }, 1000);
  };

  const findAcceptRejectNumber = (resultList) => {
    let acceptNum = 0;
    let rejectNum = 0;
    resultList.forEach((data) => {
      if (data.status === "accept") {
        acceptNum++;
      } else if (data.status === "reject") {
        rejectNum++;
      }
    });

    return { acceptNum, rejectNum };
  };

  const resetDFA = () => {
    setResultText([]);
    setNumberString({
      total: 0,
      accept: 0,
      reject: 0,
    });
  };

  return (
    <div style={{ background: "#c9ada7" }}>
      <HeaderBar />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <TextInputArea setInputText={setInputText} inputText={inputText} />
          <ResultArea resultText={resultText} />
          <ActionArea
            startDFA={startDFA}
            resetDFA={resetDFA}
            disableAction={inputText === ""}
            disableStartAction={resultText.length !== 0}
            numberString={numberString}
          />
        </div>
        <LanguageBar wordList={word.sort()} />
        <Loading load={load} />
      </div>
    </div>
  );
}
