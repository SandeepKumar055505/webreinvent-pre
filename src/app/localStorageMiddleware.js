export const localStorageMiddleware = store => next => action => {
    const result = next(action);
    const state = store.getState();
    if (action.type.startsWith('auth/')) {
      localStorage.setItem('user', JSON.stringify(state.auth.user));
      localStorage.setItem('isAuthenticated', String(state.auth.isAuthenticated));
    }
    return result;
  };
  