import { startStateA } from "./state-a";
import { startStateB } from "./state-b";
import { startStateE } from "./state-e";
import { startStateF } from "./state-f";
import { startStateH } from "./state-h";
import { startStateI } from "./state-i";
import { startStateL } from "./state-l";
import { startStateN } from "./state-n";
import { startStateO } from "./state-o";
import { startStateR } from "./state-r";
import { startStateS } from "./state-s";
import { startStateT } from "./state-t";
import { startStateW } from "./state-w";

export const startState = (word) => {
  let result;
  switch (word[0]) {
    case "a": {
      result = startStateA(word);
      break;
    }
    case "b": {
      result = startStateB(word);
      break;
    }
    case "e": {
      result = startStateE(word);
      break;
    }
    case "f": {
      result = startStateF(word);
      break;
    }
    case "h": {
      result = startStateH(word);
      break;
    }
    case "i": {
      result = startStateI(word);
      break;
    }
    case "l": {
      result = startStateL(word);
      break;
    }
    case "n": {
      result = startStateN(word);
      break;
    }
    case "o": {
      result = startStateO(word);
      break;
    }
    case "r": {
      result = startStateR(word);
      break;
    }
    case "s": {
      result = startStateS(word);
      break;
    }
    case "t": {
      result = startStateT(word);
      break;
    }
    case "w": {
      result = startStateW(word);
      break;
    }
    default: {
      result = "reject";
    }
  }

  return result;
};
