let state = { nextState: 11, status: "" };

export const startStateB = (word) => {
  if (word.length === 1) {
    state = { ...state, status: "reject" };
  } else {
    for (let i = 1; i < word.length; i++) {
      switch (state.nextState) {
        case 11: {
          stateB11(word[i]);
          break;
        }
        case 12: {
          stateB12(word[i]);
          break;
        }
        case 16: {
          stateB16(word[i]);
          break;
        }
        case 22: {
          stateB22(word[i]);
          break;
        }
        case 13: {
          stateB13(word[i]);
          break;
        }
        case 17: {
          stateB17(word[i]);
          break;
        }
        case 18: {
          stateB18(word[i]);
          break;
        }
        case 19: {
          stateB19(word[i]);
          break;
        }
        case 20: {
          stateB20(word[i]);
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

const stateB11 = (char) => {
  switch (char) {
    case "a": {
      state = { nextState: 12, status: "continue" };
      break;
    }
    case "e": {
      state = { nextState: 16, status: "continue" };
      break;
    }
    case "u": {
      state = { nextState: 22, status: "continue" };
      break;
    }
    default: {
      state = { ...state, status: "reject" };
    }
  }
};

const stateB12 = (char) => {
  switch (char) {
    case "c": {
      state = { nextState: 13, status: "continue" };
      break;
    }
    case "d": {
      state = { nextState: 15, status: "accept" };
      break;
    }

    default: {
      state = { ...state, status: "reject" };
    }
  }
};

const stateB13 = (char) => {
  switch (char) {
    case "k": {
      state = { nextState: 14, status: "accept" };
      break;
    }
    default: {
      state = { ...state, status: "reject" };
    }
  }
};

const stateB16 = (char) => {
  switch (char) {
    case "c": {
      state = { nextState: 17, status: "continue" };
      break;
    }
    default: {
      state = { ...state, status: "reject" };
    }
  }
};

const stateB17 = (char) => {
  switch (char) {
    case "a": {
      state = { nextState: 18, status: "continue" };
      break;
    }
    default: {
      state = { ...state, status: "reject" };
    }
  }
};

const stateB18 = (char) => {
  switch (char) {
    case "u": {
      state = { nextState: 19, status: "continue" };
      break;
    }
    default: {
      state = { ...state, status: "reject" };
    }
  }
};

const stateB19 = (char) => {
  switch (char) {
    case "s": {
      state = { nextState: 20, status: "continue" };
      break;
    }
    default: {
      state = { ...state, status: "reject" };
    }
  }
};

const stateB20 = (char) => {
  switch (char) {
    case "e": {
      state = { nextState: 21, status: "accept" };
      break;
    }
    default: {
      state = { ...state, status: "reject" };
    }
  }
};

const stateB22 = (char) => {
  switch (char) {
    case "t": {
      state = { nextState: 23, status: "accept" };
      break;
    }
    default: {
      state = { ...state, status: "reject" };
    }
  }
};
