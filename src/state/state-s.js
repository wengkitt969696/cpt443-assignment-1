let state = { nextState: 69, status: "" };

export const startStateS = (word) => {
  if (word.length === 1) {
    state = { ...state, status: "reject" };
  } else {
    for (let i = 1; i < word.length; i++) {
      switch (state.nextState) {
        case 69: {
          stateS69(word[i]);
          break;
        }
        case 70: {
          stateS70(word[i]);
          break;
        }
        case 71: {
          stateS71(word[i]);
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

const stateS69 = (char) => {
  switch (char) {
    case "a": {
      state = { nextState: 70, status: "continue" };
      break;
    }
    case "o": {
      state = { nextState: 73, status: "accept" };
      break;
    }

    default: {
      state = { nextState: -1, status: "reject" };
    }
  }
};

const stateS70 = (char) => {
  switch (char) {
    case "m": {
      state = { nextState: 71, status: "continue" };
      break;
    }

    default: {
      state = { nextState: -1, status: "reject" };
    }
  }
};

const stateS71 = (char) => {
  switch (char) {
    case "e": {
      state = { nextState: 72, status: "accept" };
      break;
    }

    default: {
      state = { nextState: -1, status: "reject" };
    }
  }
};
