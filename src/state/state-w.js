let state = { nextState: 84, status: "" };

export const startStateW = (word) => {
  if (word.length === 1) {
    state = { ...state, status: "reject" };
  } else {
    for (let i = 1; i < word.length; i++) {
      switch (state.nextState) {
        case 84: {
          stateW84(word[i]);
          break;
        }
        case 85: {
          stateW85(word[i]);
          break;
        }
        case 86: {
          stateW86(word[i]);
          break;
        }
        case 88: {
          stateW88(word[i]);
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

const stateW84 = (char) => {
  switch (char) {
    case "h": {
      state = { nextState: 85, status: "continue" };
      break;
    }

    default: {
      state = { nextState: -1, status: "reject" };
    }
  }
};

const stateW85 = (char) => {
  switch (char) {
    case "e": {
      state = { nextState: 86, status: "continue" };
      break;
    }

    default: {
      state = { nextState: -1, status: "reject" };
    }
  }
};

const stateW86 = (char) => {
  switch (char) {
    case "n": {
      state = { nextState: 87, status: "accept" };
      break;
    }
    case "r": {
      state = { nextState: 88, status: "continue" };
      break;
    }

    default: {
      state = { nextState: -1, status: "reject" };
    }
  }
};

const stateW88 = (char) => {
  switch (char) {
    case "e": {
      state = { nextState: 89, status: "accept" };
      break;
    }

    default: {
      state = { nextState: -1, status: "reject" };
    }
  }
};
