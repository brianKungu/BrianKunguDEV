export const actionType = {
  SET_MODAL_SHOW: "SET_MODAL_SHOW",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionType.SET_MODAL_SHOW:
      return {
        ...state,
        modalShow: action.modalShow,
      };
    default:
      return state;
  }
};

export default reducer;
