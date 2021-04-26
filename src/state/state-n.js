let state = { nextState: 51, status: "" };

export const startStateN = (word) => {
  if (word.length === 1) {
    state = { ...state, status: "reject" };
  } else {
    for (let i = 1; i < word.length; i++) {
      switch (state.nextState) {
        case 51: {
          stateN51(word[i]);
          break;
        }
        case 52: {
          stateN52(word[i]);
          break;
        }
        case 54: {
          stateN54(word[i]);
          break;
        }
        case 56: {
          stateN56(word[i]);
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

const stateN51 = (char) => {
  switch (char) {
    case "e": {
      state = { nextState: 52, status: "continue" };
      break;
    }
    case "o": {
      state = { nextState: 56, status: "continue" };
      break;
    }
    default: {
      state = { nextState: -1, status: "reject" };
    }
  }
};

const stateN52 = (char) => {
  switch (char) {
    case "w": {
      state = { nextState: 53, status: "accept" };
      break;
    }
    case "x": {
      state = { nextState: 54, status: "continue" };
      break;
    }
    default: {
      state = { nextState: -1, status: "reject" };
    }
  }
};

const stateN54 = (char) => {
  switch (char) {
    case "t": {
      state = { nextState: 55, status: "accept" };
      break;
    }

    default: {
      state = { nextState: -1, status: "reject" };
    }
  }
};

const stateN56 = (char) => {
  switch (char) {
    case "w": {
      state = { nextState: 57, status: "accept" };
      break;
    }

    default: {
      state = { nextState: -1, status: "reject" };
    }
  }
};
