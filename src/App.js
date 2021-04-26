import React, { useEffect } from "react";
import { conjunctions, adjectives, adverbs } from "./dictionary";
import { startState } from "./state/start-state";

export default function App() {
  const word = [...conjunctions, ...adjectives, ...adverbs];

  const DFA = (word) => {
    console.log(startState(word));
  };

  useEffect(() => {
    word.sort();
    word.forEach((data) => {
      DFA(data);
    });
  }, []);

  return <h1>hehe</h1>;
}
