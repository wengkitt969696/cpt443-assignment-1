let state;

export const startStateS = (word) => {
  state = { nextState: 70, status: "" };
  if (word.length === 1) {
    state = { ...state, status: "reject" };
  } else {
    for (let i = 1; i < word.length; i++) {
      switch (state.nextState) {
        case 70: {
          stateS70(word[i]);
          break;
        }
        case 71: {
          stateS71(word[i]);
          break;
        }
        case 72: {
          stateS72(word[i]);
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

const stateS70 = (char) => {
  switch (char) {
    case "a": {
      state = { nextState: 71, status: "continue" };
      break;
    }
    case "o": {
      state = { nextState: 74, status: "accept" };
      break;
    }

    default: {
      state = { nextState: -1, status: "reject" };
    }
  }
};

const stateS71 = (char) => {
  switch (char) {
    case "m": {
      state = { nextState: 72, status: "continue" };
      break;
    }

    default: {
      state = { nextState: -1, status: "reject" };
    }
  }
};

const stateS72 = (char) => {
  switch (char) {
    case "e": {
      state = { nextState: 73, status: "accept" };
      break;
    }

    default: {
      state = { nextState: -1, status: "reject" };
    }
  }
};
