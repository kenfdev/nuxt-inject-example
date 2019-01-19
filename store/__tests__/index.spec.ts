import Vuex, { Store } from 'vuex';
import * as index from '@/store';
import { createLocalVue } from '@vue/test-utils';
import _ from 'lodash';
import { IGitGateway } from '~/gateways/interfaces';

const localVue = createLocalVue();
localVue.use(Vuex);

const MockGitGateway = jest.fn<IGitGateway>().mockImplementation(() => {
  return {
    fetchStars: jest.fn(),
  } as IGitGateway;
});

describe('store/index.js', () => {
  let store: Store<index.State>;
  let state: index.State;
  let gitGateway: jest.Mocked<IGitGateway>;
  beforeEach(() => {
    store = new Vuex.Store(_.cloneDeep(index));

    gitGateway = MockGitGateway();
    const deps = {
      gitGateway,
    };
    store['$deps'] = deps;
    state = store.state;
  });

  describe('FETCH_GITHUB_STARS', () => {
    it('countを設定していること', async () => {
      // Arrange
      const expectedCount = 100;
      gitGateway.fetchStars.mockResolvedValue({ count: expectedCount });
      // Act
      await store.dispatch(index.actionTypes.FETCH_GITHUB_STARS);
      // Assert
      expect(state.count).toEqual(expectedCount);
    });
  });
});
