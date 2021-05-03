import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory, Redirect, Route, Switch } from 'react-router';
import { AppHeader } from 'containers';
import { authRoute, privateRoute } from 'routes';

const PrivateLayout = () => {
  const history = useHistory();
  const { token } = useSelector(({ profile }) => profile);
  
  React.useEffect(() => {
    if (token) {
    } else {
      // history.replace(authRoute.login.path);
    }
  }, [history, token]);

  return (
    <div className="App Private-Layout">
      <AppHeader />
      <div className="App-Body">
        <Switch>
          {Object.values(privateRoute).map(({ path, component }) => (
            <Route exact key={path} path={path} component={component} />
          ))}
          <Redirect from="/" to={privateRoute.home.path} />
        </Switch>
      </div>
    </div>
  );
};

export default PrivateLayout;
