import * as actions from "./actions";

const initialScore = [0, 0];
const initialVisibles = [
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0
];

export const initialState = {
  score: initialScore,
  visibles: initialVisibles
};

const addPoint = ({ state, payload: scorer }) => {
  const { score: oldScore } = state;
  const score = oldScore.map((e, i) => (i === scorer ? e + 1 : e));

  return { ...state, score };
};

const coverCard = ({ state, payload: card }) => {
  const { visibles: oldVisibles } = state;
  const visibles = oldVisibles.map((e, i) => (i === card ? (e - 0.9) * -1 : e));

  return { ...state, visibles };
};

const reducer = (state, { payload, type }) => {
  switch (type) {
    case actions.ADD_POINT:
      return addPoint({ state, payload });
    case actions.RESET_SCORE:
      return { ...initialState };
    case actions.COVER_CARD:
      return coverCard({ state, payload });
    case actions.NEW_GAME:
      return { ...state, visibles: initialVisibles };
    default:
      return state;
  }
};

export default reducer;
