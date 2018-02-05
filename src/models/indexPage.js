
export default {
  
    namespace: 'indexPage',
  
    state: {
      data: {
        nodes: [
          {
            color: '#4f19c7',
            label: 'jquery',
            attributes: {},
            id: 'jquery',
            size: 74.7252817,
          },
          {
            color: '#c71969',
            label: 'backbone',
            attributes: {},
            id: 'backbone',
            size: 36.1554675,
          },
          {
            color: '#c71969',
            label: 'underscore',
            attributes: {},
            id: 'underscore',
            size: 100,
          },
          {
            color: '#c71969',
            label: 'faye',
            attributes: {},
            id: 'faye',
            size: 50.67816025,
          },
          {
            color: '#c71919',
            label: 'socket.io',
            attributes: {},
            id: 'socket.io',
            size: 19.818306,
          },
          {
            color: '#c71969',
            label: 'requirejs',
            attributes: {},
            id: 'requirejs',
            size: 4.0862627,
          },
        ],
        edges: [
          {
            sourceID: 'jquery',
            attributes: {},
            targetID: 'backbone',
            size: 1,
          },
          {
            sourceID: 'jquery',
            attributes: {},
            targetID: 'socket.io',
            size: 1,
          },
          {
            sourceID: 'jquery',
            attributes: {},
            targetID: 'requirejs',
            size: 1,
          },
          {
            sourceID: 'jquery',
            attributes: {},
            targetID: 'faye',
            size: 1,
          },
          {
            sourceID: 'backbone',
            attributes: {},
            targetID: 'faye',
            size: 1,
          },
          {
            sourceID: 'faye',
            attributes: {},
            targetID: 'underscore',
            size: 1,
          },
        ],
      },
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
      save(state, action) {
        return { ...state, ...action.payload };
      },
    },
  
  };
  