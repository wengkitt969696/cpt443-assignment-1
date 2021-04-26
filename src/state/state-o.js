let state = { nextState: 58, status: "" };

export const startStateO = (word) => {
  if (word.length === 1) {
    state = { ...state, status: "reject" };
  } else {
    for (let i = 1; i < word.length; i++) {
      switch (state.nextState) {
        case 58: {
          stateO58(word[i]);
          break;
        }
        case 60: {
          stateO60(word[i]);
          break;
        }
        case 61: {
          stateO61(word[i]);
          break;
        }
        case 62: {
          stateO62(word[i]);
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

const stateO58 = (char) => {
  switch (char) {
    case "r": {
      state = { nextState: 59, status: "accept" };
      break;
    }
    case "t": {
      state = { nextState: 60, status: "continue" };
      break;
    }
    default: {
      state = { nextState: -1, status: "reject" };
    }
  }
};

const stateO60 = (char) => {
  switch (char) {
    case "h": {
      state = { nextState: 61, status: "continue" };
      break;
    }

    default: {
      state = { nextState: -1, status: "reject" };
    }
  }
};

const stateO61 = (char) => {
  switch (char) {
    case "e": {
      state = { nextState: 62, status: "continue" };
      break;
    }

    default: {
      state = { nextState: -1, status: "reject" };
    }
  }
};

const stateO62 = (char) => {
  switch (char) {
    case "r": {
      state = { nextState: 63, status: "accept" };
      break;
    }

    default: {
      state = { nextState: -1, status: "reject" };
    }
  }
};
