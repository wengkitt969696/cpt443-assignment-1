let state;

export const startStateR = (word) => {
  state = { nextState: 64, status: "" };
  if (word.length === 1) {
    state = { ...state, status: "reject" };
  } else {
    for (let i = 1; i < word.length; i++) {
      switch (state.nextState) {
        case 64: {
          stateR64(word[i]);
          break;
        }
        case 65: {
          stateR65(word[i]);
          break;
        }
        case 66: {
          stateR66(word[i]);
          break;
        }
        case 67: {
          stateR67(word[i]);
          break;
        }
        case 68: {
          stateR68(word[i]);
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

const stateR64 = (char) => {
  switch (char) {
    case "e": {
      state = { nextState: 65, status: "continue" };
      break;
    }

    default: {
      state = { nextState: -1, status: "reject" };
    }
  }
};

const stateR65 = (char) => {
  switch (char) {
    case "a": {
      state = { nextState: 66, status: "continue" };
      break;
    }

    default: {
      state = { nextState: -1, status: "reject" };
    }
  }
};

const stateR66 = (char) => {
  switch (char) {
    case "l": {
      state = { nextState: 67, status: "continue" };
      break;
    }

    default: {
      state = { nextState: -1, status: "reject" };
    }
  }
};

const stateR67 = (char) => {
  switch (char) {
    case "l": {
      state = { nextState: 68, status: "continue" };
      break;
    }

    default: {
      state = { nextState: -1, status: "reject" };
    }
  }
};
const stateR68 = (char) => {
  switch (char) {
    case "y": {
      state = { nextState: 69, status: "accept" };
      break;
    }

    default: {
      state = { nextState: -1, status: "reject" };
    }
  }
};
