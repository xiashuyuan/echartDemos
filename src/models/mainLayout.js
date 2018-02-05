export default {
  namespace: 'mainLayout',
  state: {
    collapsed: false,
    mode: 'inline',
  },
  reducers: {
    concat(state, { payload }) {
      return { ...state, ...payload };
    },
  },
  effects: {},
  subscriptions: {},
};
