import { addCnt, subCnt } from '@store/modules/appSlice';
import useAppDispatch from '@hooks/useAppDispatch';
import useAppSelector from '@hooks/useAppSelector';

const App = (): JSX.Element => {
  const { count } = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();

  const onAdd = () => dispatch(addCnt(1));
  const onSub = () => dispatch(subCnt(1));

  return (
    <div>
      <h1 onClick={onAdd}>App</h1>
      <div onClick={onSub}>{count}</div>
    </div>
  );
};

export default App;
