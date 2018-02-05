
export default {

  namespace: 'test',

  state: {
    visible: false,
    male: '男',
    female: '女',
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    concat(state, { payload }) {
      console.log(payload);
      return { ...state, ...payload };
    },
  },

};
