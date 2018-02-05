import dva from 'dva';
import './index.css';
import createLoading from 'dva-loading';
import { hashHistory } from 'dva/router';
import { message } from 'antd';

// 1. Initialize
const app = dva({
  history: hashHistory,
  onError(e) {
    message.error(e.message);
  },
});

// 2. Plugins
app.use(createLoading());

// 3. Model
// app.model(require('./models/example'));
app.model(require('./models/mainLayout'));
app.model(require('./models/indexPage'));
app.model(require('./models/test'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
