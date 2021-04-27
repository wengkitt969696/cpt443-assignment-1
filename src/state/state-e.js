let state;

export const startStateE = (word) => {
  state = { nextState: 24, status: "" };
  if (word.length === 1) {
    state = { ...state, status: "reject" };
  } else {
    for (let i = 1; i < word.length; i++) {
      switch (state.nextState) {
        case 24: {
          stateE24(word[i]);
          break;
        }
        case 25: {
          stateE25(word[i]);
          break;
        }
        case 26: {
          stateE26(word[i]);
          break;
        }
        case 27: {
          stateE27(word[i]);
          break;
        }
        default: {
          state = { nextState: -1, status: "reject" };
        }
      }
    }

    if (state.status === "continue") {
      state = { nextState: -1, status: "reject" };
    }
  }

  return state.status;
};

const stateE24 = (char) => {
  switch (char) {
    case "a": {
      state = { nextState: 25, status: "continue" };
      break;
    }
    default: {
      state = { nextState: -1, status: "reject" };
    }
  }
};

const stateE25 = (char) => {
  switch (char) {
    case "r": {
      state = { nextState: 26, status: "continue" };
      break;
    }
    default: {
      state = { nextState: -1, status: "reject" };
    }
  }
};
const stateE26 = (char) => {
  switch (char) {
    case "l": {
      state = { nextState: 27, status: "continue" };
      break;
    }
    default: {
      state = { nextState: -1, status: "reject" };
    }
  }
};

const stateE27 = (char) => {
  switch (char) {
    case "y": {
      state = { nextState: 28, status: "accept" };
      break;
    }
    default: {
      state = { nextState: -1, status: "reject" };
    }
  }
};
