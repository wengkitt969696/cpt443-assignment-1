let state;

export const startStateW = (word) => {
  state = { nextState: 85, status: "" };
  if (word.length === 1) {
    state = { ...state, status: "reject" };
  } else {
    for (let i = 1; i < word.length; i++) {
      switch (state.nextState) {
        case 85: {
          stateW85(word[i]);
          break;
        }
        case 86: {
          stateW86(word[i]);
          break;
        }
        case 87: {
          stateW87(word[i]);
          break;
        }
        case 89: {
          stateW89(word[i]);
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

const stateW85 = (char) => {
  switch (char) {
    case "h": {
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
    case "e": {
      state = { nextState: 87, status: "continue" };
      break;
    }

    default: {
      state = { nextState: -1, status: "reject" };
    }
  }
};

const stateW87 = (char) => {
  switch (char) {
    case "n": {
      state = { nextState: 88, status: "accept" };
      break;
    }
    case "r": {
      state = { nextState: 89, status: "continue" };
      break;
    }

    default: {
      state = { nextState: -1, status: "reject" };
    }
  }
};

const stateW89 = (char) => {
  switch (char) {
    case "e": {
      state = { nextState: 90, status: "accept" };
      break;
    }

    default: {
      state = { nextState: -1, status: "reject" };
    }
  }
};
