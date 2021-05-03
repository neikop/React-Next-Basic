import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NextLayout, AuthLayout, PrivateLayout } from 'layouts';
import { AppTheme as MaterialUITheme } from 'containers';
import { store } from 'reducers';
import { ConfigProvider as AntDesign } from 'antd';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { default as MomentUtils } from '@date-io/moment';

const App = () => {
  const [isReady, setIsReady] = React.useState(false);
  React.useEffect(() => {
    setIsReady(true);
  }, []);

  return (
    isReady && (
      <NextLayout>
        <ReduxProvider store={store}>
          <AntDesign componentSize="large">
            <MuiPickersUtilsProvider utils={MomentUtils}>
              <MaterialUITheme>
                <Router>
                  <Switch>
                    <Route path="/auth" component={AuthLayout} />
                    <Route path="/" component={PrivateLayout} />
                  </Switch>
                </Router>
              </MaterialUITheme>
            </MuiPickersUtilsProvider>
          </AntDesign>
        </ReduxProvider>
      </NextLayout>
    )
  );
};

export default App;
