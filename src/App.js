import React, { useEffect } from "react";
import { conjunctions, adjectives, adverbs } from "./dictionary";
import { startState } from "./state/start-state";
import { sampleText1 } from "./sample-text/sample-text";

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

  return <h1>hehe</h1>;
}
