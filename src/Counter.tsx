
import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';
import { AppDispatch, RootState } from './app/store';
import { decrement, increment, selectCounterValue } from './feature/counter/counterSlice';


// Tips: Export and use throughout your app
const useAppDispatch = () => useDispatch<AppDispatch>();

// Tips: Export and use throughout your app
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


export function Counter() {
  const count = useAppSelector(selectCounterValue);
  const dispatch = useAppDispatch();
  
  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </>
  );
}
