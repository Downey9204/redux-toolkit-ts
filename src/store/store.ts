import { configureStore } from '@reduxjs/toolkit';
import appReducer from '@store/modules/appSlice';

const store = configureStore({
  reducer: {
    app: appReducer,
  },
});

/**
 * ReturnType<T>: 함수 타입을 받아 해당 함수의 리턴 타입 반환!
 * store.getState()의 메소드의 타입 즉, 함수를 넘겨줘서 리턴 타입 추론
 * */
export type RootState = ReturnType<typeof store.getState>;
/**
 * typeof store.dispath: dispatch 함수의 반환값을 추출하려는 것이 아니라 함수 자체의 타입을 지정
 * dispatch 함수의 반환 타입만이 아닌, 함수의 전체 시그니처(즉, 인자와 반환 타입 모두)를 다뤄야 하기 때문!
 */
export type AppDispatch = typeof store.dispatch;

export default store;
