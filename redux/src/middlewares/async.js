export const asyncMiddleware = (store) => (next) => (action) => {
    if (typeof action === "function") {
        return action(store.dispatch, action.getState);
    }
    return next(action);
};
