import assert from 'assert';
import { fetchLaunches } from '../fetchSaga';
import { ActionMapper } from '../../redux/actions';

it('fetchLaunches({}) should work without NO filters', async () => {
  // empty filter
  const iterator = fetchLaunches({});
  // first call should start fetching
  assert.deepEqual(
    iterator.next().value.payload.action.type,
    ActionMapper.FETCH_START,
  );
  // second call should invoke an ajax query
  assert.deepEqual(
    iterator.next().value.payload,
    {
      fn: fetch,
      args: ['https://api.spacexdata.com/v3/launches'],
      context: null,
    },
  );
});

it('fetchLaunches(filter) should work with a filter', async () => {
  // filled filter
  const iterator = fetchLaunches({
    type: 'REQ_FETCH_LAUNCHES',
    payload: { limit: 5, offset: 2 },
  });
  // first call should start fetching
  assert.deepEqual(
    iterator.next().value.payload.action.type,
    ActionMapper.FETCH_START,
  );
  // second call should invoke an ajax query
  assert.deepEqual(
    iterator.next().value.payload,
    {
      fn: fetch,
      args: ['https://api.spacexdata.com/v3/launches?limit=5&offset=2'],
      context: null,
    },
  );
});
