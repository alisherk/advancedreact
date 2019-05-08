export default ({ dispatch }) => next => async action => {
  if (!action.payload || !action.payload.then) {
    return next(action);
  }
  const res = await action.payload;
  const newAction = { ...action, payload: res };
  dispatch(newAction);
};
