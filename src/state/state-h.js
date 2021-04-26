let state = { nextState: 36, status: "" };

export const startStateH = (word) => {
  if (word.length === 1) {
    state = { ...state, status: "reject" };
  } else {
    for (let i = 1; i < word.length; i++) {
      switch (state.nextState) {
        case 36: {
          stateH36(word[i]);
          break;
        }
        case 37: {
          stateH37(word[i]);
          break;
        }
        case 38: {
          stateH38(word[i]);
          break;
        }
        case 40: {
          stateH40(word[i]);
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

const stateH36 = (char) => {
  switch (char) {
    case "e": {
      state = { nextState: 37, status: "continue" };
      break;
    }
    case "o": {
      state = { nextState: 40, status: "continue" };
      break;
    }
    default: {
      state = { nextState: -1, status: "reject" };
    }
  }
};

const stateH37 = (char) => {
  switch (char) {
    case "r": {
      state = { nextState: 38, status: "continue" };
      break;
    }

    default: {
      state = { nextState: -1, status: "reject" };
    }
  }
};

const stateH38 = (char) => {
  switch (char) {
    case "e": {
      state = { nextState: 39, status: "accept" };
      break;
    }
    default: {
      state = { nextState: -1, status: "reject" };
    }
  }
};

const stateH40 = (char) => {
  switch (char) {
    case "w": {
      state = { nextState: 41, status: "accept" };
      break;
    }
    default: {
      state = { nextState: -1, status: "reject" };
    }
  }
};
