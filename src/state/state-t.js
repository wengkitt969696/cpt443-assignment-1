let state = { nextState: 74, status: "" };

export const startStateT = (word) => {
  if (word.length === 1) {
    state = { ...state, status: "reject" };
  } else {
    for (let i = 1; i < word.length; i++) {
      switch (state.nextState) {
        case 74: {
          stateT74(word[i]);
          break;
        }
        case 75: {
          stateT75(word[i]);
          break;
        }
        case 76: {
          stateT76(word[i]);
          break;
        }
        case 78: {
          stateT78(word[i]);
          break;
        }
        case 80: {
          stateT80(word[i]);
          break;
        }
        case 82: {
          stateT82(word[i]);
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

const stateT74 = (char) => {
  switch (char) {
    case "h": {
      state = { nextState: 75, status: "continue" };
      break;
    }
    case "o": {
      state = { nextState: 82, status: "continue" };
      break;
    }

    default: {
      state = { nextState: -1, status: "reject" };
    }
  }
};

const stateT75 = (char) => {
  switch (char) {
    case "a": {
      state = { nextState: 76, status: "continue" };
      break;
    }
    case "e": {
      state = { nextState: 78, status: "continue" };
      break;
    }

    default: {
      state = { nextState: -1, status: "reject" };
    }
  }
};

const stateT76 = (char) => {
  switch (char) {
    case "t": {
      state = { nextState: 77, status: "accept" };
      break;
    }

    default: {
      state = { nextState: -1, status: "reject" };
    }
  }
};

const stateT78 = (char) => {
  switch (char) {
    case "n": {
      state = { nextState: 79, status: "accept" };
      break;
    }
    case "r": {
      state = { nextState: 80, status: "continue" };
      break;
    }

    default: {
      state = { nextState: -1, status: "reject" };
    }
  }
};

const stateT80 = (char) => {
  switch (char) {
    case "e": {
      state = { nextState: 81, status: "accept" };
      break;
    }

    default: {
      state = { nextState: -1, status: "reject" };
    }
  }
};

const stateT82 = (char) => {
  switch (char) {
    case "o": {
      state = { nextState: 83, status: "accept" };
      break;
    }

    default: {
      state = { nextState: -1, status: "reject" };
    }
  }
};
