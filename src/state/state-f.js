let state = { nextState: 29, status: "" };

export const startStateF = (word) => {
  if (word.length === 1) {
    state = { ...state, status: "reject" };
  } else {
    for (let i = 1; i < word.length; i++) {
      switch (state.nextState) {
        case 29: {
          stateF29(word[i]);
          break;
        }
        case 30: {
          stateF30(word[i]);
          break;
        }
        case 32: {
          stateF32(word[i]);
          break;
        }
        case 33: {
          stateF33(word[i]);
          break;
        }
        case 34: {
          stateF34(word[i]);
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

const stateF29 = (char) => {
  switch (char) {
    case "e": {
      state = { nextState: 30, status: "continue" };
      break;
    }
    case "i": {
      state = { nextState: 32, status: "continue" };
      break;
    }
    default: {
      state = { nextState: -1, status: "reject" };
    }
  }
};

const stateF30 = (char) => {
  switch (char) {
    case "w": {
      state = { nextState: 31, status: "accept" };
      break;
    }
    default: {
      state = { nextState: -1, status: "reject" };
    }
  }
};

const stateF32 = (char) => {
  switch (char) {
    case "r": {
      state = { nextState: 33, status: "continue" };
      break;
    }
    default: {
      state = { nextState: -1, status: "reject" };
    }
  }
};

const stateF33 = (char) => {
  switch (char) {
    case "s": {
      state = { nextState: 34, status: "continue" };
      break;
    }
    default: {
      state = { nextState: -1, status: "reject" };
    }
  }
};
const stateF34 = (char) => {
  switch (char) {
    case "t": {
      state = { nextState: 35, status: "accept" };
      break;
    }
    default: {
      state = { nextState: -1, status: "reject" };
    }
  }
};
