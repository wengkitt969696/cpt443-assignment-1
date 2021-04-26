let state = { nextState: 44, status: "" };

export const startStateL = (word) => {
  if (word.length === 1) {
    state = { ...state, status: "reject" };
  } else {
    for (let i = 1; i < word.length; i++) {
      switch (state.nextState) {
        case 44: {
          stateL44(word[i]);
          break;
        }
        case 45: {
          stateL45(word[i]);
          break;
        }
        case 46: {
          stateL46(word[i]);
          break;
        }
        case 48: {
          stateL48(word[i]);
          break;
        }
        case 49: {
          stateL49(word[i]);
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

const stateL44 = (char) => {
  switch (char) {
    case "a": {
      state = { nextState: 45, status: "continue" };
      break;
    }
    case "i": {
      state = { nextState: 48, status: "continue" };
      break;
    }
    default: {
      state = { nextState: -1, status: "reject" };
    }
  }
};

const stateL45 = (char) => {
  switch (char) {
    case "s": {
      state = { nextState: 46, status: "continue" };
      break;
    }

    default: {
      state = { nextState: -1, status: "reject" };
    }
  }
};

const stateL46 = (char) => {
  switch (char) {
    case "t": {
      state = { nextState: 47, status: "accept" };
      break;
    }

    default: {
      state = { nextState: -1, status: "reject" };
    }
  }
};

const stateL48 = (char) => {
  switch (char) {
    case "k": {
      state = { nextState: 49, status: "continue" };
      break;
    }

    default: {
      state = { nextState: -1, status: "reject" };
    }
  }
};

const stateL49 = (char) => {
  switch (char) {
    case "e": {
      state = { nextState: 50, status: "accept" };
      break;
    }

    default: {
      state = { nextState: -1, status: "reject" };
    }
  }
};
