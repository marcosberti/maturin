/** took it from kent c dodds bookshelf  */
/** https://github.com/kentcdodds/bookshelf */
/*eslint-disable*/
import React from 'react';
import nprogress from 'nprogress';

function useSafeDispatch(dispatch) {
  const mounted = React.useRef(false);
  React.useLayoutEffect(() => {
    mounted.current = true;
    return () => (mounted.current = false);
  }, []);
  return React.useCallback(
    (...args) => (mounted.current ? dispatch(...args) : void 0),
    [dispatch]
  );
}

// Example usage:
// const {data, error, status, run} = useAsync()
// React.useEffect(() => {
//   run(fetchPokemon(pokemonName))
// }, [pokemonName, run])
const defaultInitialState = { status: 'idle', data: null, error: null };
function useAsync(initialState) {
  const initialStateRef = React.useRef({
    ...defaultInitialState,
    ...initialState,
  });
  const [{ status, data, error }, setState] = React.useReducer(
    (s, a) => ({ ...s, ...a }),
    initialStateRef.current
  );

  const safeSetState = useSafeDispatch(setState);

  const setData = React.useCallback(
    (data) => safeSetState({ data, status: 'resolved' }),
    [safeSetState]
  );

  const setError = React.useCallback(
    (error) => safeSetState({ error, status: 'rejected' }),
    [safeSetState]
  );

  const setPending = React.useCallback(
    () => safeSetState({ status: 'pending' }),
    [safeSetState]
  );

  const reset = React.useCallback(() => safeSetState(initialStateRef.current), [
    safeSetState,
  ]);

  const run = React.useCallback(
    (promise) => {
      if (!promise || !promise.then) {
        throw new Error(
          `The argument passed to useAsync().run must be a promise. Maybe a function that's passed isn't returning anything?`
        );
      }
      nprogress.start();
      safeSetState({ status: 'pending' });
      return promise
        .then(
          (data) => {
            setData(data);
            return data;
          },
          (error) => {
            setError(error);
            return Promise.reject(error);
          }
        )
        .finally(() => nprogress.done());
    },
    [safeSetState, setData, setError]
  );

  return {
    // using the same names that react-query uses for convenience
    isIdle: status === 'idle',
    isLoading: status === 'pending',
    isError: status === 'rejected',
    isSuccess: status === 'resolved',

    setData,
    setError,
    setPending,
    error,
    status,
    data,
    run,
    reset,
  };
}

export { useAsync };
