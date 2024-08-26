import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppState {
  count: number;
}

const initialState: AppState = {
  count: 0,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    /**
     * state: 이미 AppState 선언하고 적용 했으니 타입추론으로 끝, 어노테이션 추가하면 중복되는 꼴
     * action: {type: "string", payload: P} -> PayloadAction<P, ~> payload 타입 지정
     * */
    addCnt: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
    subCnt: (state, action: PayloadAction<number>) => {
      state.count -= action.payload;
    },
  },
});

export const { addCnt, subCnt } = appSlice.actions;
export default appSlice.reducer;
