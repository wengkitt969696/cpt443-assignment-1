let state = { nextState: 1, status: "" };

export const startStateA = (word) => {
  if (word.length === 1) {
    state = { ...state, status: "reject" };
  } else {
    for (let i = 1; i < word.length; i++) {
      switch (state.nextState) {
        case 1: {
          stateA1(word[i]);
          break;
        }
        case 2: {
          stateA2(word[i]);
          break;
        }
        case 5: {
          stateA5(word[i]);
          break;
        }
        case 8: {
          stateA8(word[i]);
          break;
        }
        case 3: {
          stateA3(word[i]);
          break;
        }
        case 6: {
          stateA6(word[i]);
          break;
        }
        default: {
          state = { ...state, status: "reject" };
        }
      }
    }

    if (state.status === "continue") {
      state = { ...state, status: "reject" };
    }
  }

  return state.status;
};

const stateA1 = (char) => {
  switch (char) {
    case "b": {
      state = { nextState: 2, status: "continue" };
      break;
    }
    case "l": {
      state = { nextState: 5, status: "continue" };
      break;
    }
    case "n": {
      state = { nextState: 8, status: "continue" };
      break;
    }
    case "s": {
      state = { nextState: 10, status: "accept" };
      break;
    }
    default: {
      state = { ...state, status: "reject" };
    }
  }
};

const stateA2 = (char) => {
  switch (char) {
    case "l": {
      state = { nextState: 3, status: "continue" };
      break;
    }
    default: {
      state = { ...state, status: "reject" };
    }
  }
};

const stateA3 = (char) => {
  switch (char) {
    case "e": {
      state = { nextState: 4, status: "accept" };
      break;
    }
    default: {
      state = { ...state, status: "reject" };
    }
  }
};

const stateA5 = (char) => {
  switch (char) {
    case "s": {
      state = { nextState: 6, status: "continue" };
      break;
    }
    default: {
      state = { ...state, status: "reject" };
    }
  }
};

const stateA6 = (char) => {
  switch (char) {
    case "o": {
      state = { nextState: 7, status: "accept" };
      break;
    }
    default: {
      state = { ...state, status: "reject" };
    }
  }
};

const stateA8 = (char) => {
  switch (char) {
    case "d": {
      state = { nextState: 9, status: "accept" };
      break;
    }
    default: {
      state = { ...state, status: "reject" };
    }
  }
};
