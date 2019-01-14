import { GetterTree, ActionTree, MutationTree } from 'vuex';
import { Dependencies } from '~/plugins/dependencies';

export interface State {
  loading: boolean;
  count: number;
}

export const state = (): State => ({
  loading: false,
  count: 0,
});

export const actionTypes = {
  FETCH_GITHUB_STARS: 'FETCH_GITHUB_STARS',
};

export const mutationTypes = {
  SET_COUNT: 'SET_COUNT',
  SET_LOADING: 'SET_LOADING',
};

export const getters: GetterTree<State, State> = {
  loading(state) {
    return state.loading;
  },
  countResult(state) {
    if (state.loading) {
      return '-';
    }

    return `${state.count} stars`;
  },
};

export const actions: ActionTree<State, State> = {
  async [actionTypes.FETCH_GITHUB_STARS]({ commit }) {
    const { gitGateway } = this.$deps as Dependencies;

    commit(mutationTypes.SET_LOADING, true);
    const { count } = await gitGateway.fetchStars();
    commit(mutationTypes.SET_LOADING, false);

    commit(mutationTypes.SET_COUNT, count);
  },
};

export const mutations: MutationTree<State> = {
  [mutationTypes.SET_COUNT](state, count: number) {
    state.count = count;
  },
  [mutationTypes.SET_LOADING](state, loading: boolean) {
    state.loading = loading;
  },
};
