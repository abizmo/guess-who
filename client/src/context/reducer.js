import { ADD_POINT, RESET_SCORE } from "./actions";

const initialScore = [0, 0];

export const initialState = {
  score: initialScore
};

const addPoint = ({ state, payload: scorer }) => {
  const { score: oldScore } = state;
  const score = oldScore.map((e, i) => (i === scorer ? e + 1 : e));

  return { ...state, score };
};

const reducer = (state, { payload, type }) => {
  switch (type) {
    case ADD_POINT:
      return addPoint({ state, payload });
    case RESET_SCORE:
      return { ...state, score: initialScore };
    default:
      return state;
  }
};

export default reducer;
