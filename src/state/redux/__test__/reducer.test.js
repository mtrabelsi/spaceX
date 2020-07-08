import assert from 'assert';
import fetchTasksReducer, { INITIAL_STATE } from '../reducer';
import { ActionMapper } from '../actions';

it('Reducer should initialize its content', async () => {
  assert.deepEqual(
    fetchTasksReducer(),
    INITIAL_STATE,
  );
});

it('Reducer should isFetching to true when FETCH_START is emitted', async () => {
  assert.deepEqual(
    fetchTasksReducer(INITIAL_STATE, { type: ActionMapper.FETCH_START }),
    { ...INITIAL_STATE, isFetching: true },
  );
});

it('Reducer should Fill History on success', async () => {
  const historyList = [{ name: 'Test' }];
  assert.deepEqual(
    fetchTasksReducer(INITIAL_STATE,
      { type: ActionMapper.FETCH_SUCCESS_HISTORY, payload: historyList }),
    { ...INITIAL_STATE, historyData: historyList },
  );
});
