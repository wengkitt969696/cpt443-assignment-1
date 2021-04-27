let state;

export const startStateT = (word) => {
  state = { nextState: 75, status: "" };
  if (word.length === 1) {
    state = { ...state, status: "reject" };
  } else {
    for (let i = 1; i < word.length; i++) {
      switch (state.nextState) {
        case 75: {
          stateT75(word[i]);
          break;
        }
        case 76: {
          stateT76(word[i]);
          break;
        }
        case 77: {
          stateT77(word[i]);
          break;
        }
        case 79: {
          stateT79(word[i]);
          break;
        }
        case 81: {
          stateT81(word[i]);
          break;
        }
        case 83: {
          stateT83(word[i]);
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

const stateT75 = (char) => {
  switch (char) {
    case "h": {
      state = { nextState: 76, status: "continue" };
      break;
    }
    case "o": {
      state = { nextState: 83, status: "continue" };
      break;
    }

    default: {
      state = { nextState: -1, status: "reject" };
    }
  }
};

const stateT76 = (char) => {
  switch (char) {
    case "a": {
      state = { nextState: 77, status: "continue" };
      break;
    }
    case "e": {
      state = { nextState: 79, status: "continue" };
      break;
    }

    default: {
      state = { nextState: -1, status: "reject" };
    }
  }
};

const stateT77 = (char) => {
  switch (char) {
    case "t": {
      state = { nextState: 78, status: "accept" };
      break;
    }

    default: {
      state = { nextState: -1, status: "reject" };
    }
  }
};

const stateT79 = (char) => {
  switch (char) {
    case "n": {
      state = { nextState: 80, status: "accept" };
      break;
    }
    case "r": {
      state = { nextState: 81, status: "continue" };
      break;
    }

    default: {
      state = { nextState: -1, status: "reject" };
    }
  }
};

const stateT81 = (char) => {
  switch (char) {
    case "e": {
      state = { nextState: 82, status: "accept" };
      break;
    }

    default: {
      state = { nextState: -1, status: "reject" };
    }
  }
};

const stateT83 = (char) => {
  switch (char) {
    case "o": {
      state = { nextState: 84, status: "accept" };
      break;
    }

    default: {
      state = { nextState: -1, status: "reject" };
    }
  }
};
