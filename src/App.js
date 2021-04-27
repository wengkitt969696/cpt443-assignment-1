import React, { useEffect } from "react";
import { conjunctions, adjectives, adverbs } from "./dictionary";
import { startState } from "./state/start-state";
import { sampleText1 } from "./sample-text/sample-text";
import { HeaderBar } from "./components/header-bar";
import { LanguageBar } from "./components/language-bar";
import { TextInputArea } from "./components/input-area";
import { ResultArea } from "./components/result-area";
import { ActionArea } from "./components/action-area";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

export default function App() {
  const word = [...conjunctions, ...adjectives, ...adverbs];

  const DFA = (word) => {
    console.log(startState(word));
  };

  useEffect(() => {
    word.sort();
    sampleText1
      .toLowerCase()
      .split(" ")
      .forEach((data) => {
        DFA(data);
      });
  }, []);

  useEffect(() => {
    console.log(sampleText1.toLowerCase().split(" "));
  }, []);

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
          <TextInputArea />
          <ResultArea />
          <ActionArea />
        </div>

        <LanguageBar wordList={word} />
      </div>
    </div>
  );
}
