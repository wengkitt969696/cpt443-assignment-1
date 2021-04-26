let state = { nextState: 42, status: "" };

export const startStateI = (word) => {
  if (word.length === 1) {
    state = { ...state, status: "reject" };
  } else {
    for (let i = 1; i < word.length; i++) {
      switch (state.nextState) {
        case 42: {
          stateI42(word[i]);
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

const stateI42 = (char) => {
  switch (char) {
    case "n": {
      state = { nextState: 43, status: "accept" };
      break;
    }
    default: {
      state = { nextState: -1, status: "reject" };
    }
  }
};
