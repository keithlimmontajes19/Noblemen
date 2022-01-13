import {ReactElement, useEffect} from 'react';
import {Router} from 'react-router-dom';

/* styles utils*/
import {} from './styled';
import {notificationAlert} from 'utils/alerts';
import history from 'utils/history';

/* components */
import MainLayout from 'views/private/MainLayout';
import LoginLayout from 'views/public/LoginLayout';

/* reducer action */
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from 'ducks/store';
import {checkTokenUser} from 'ducks/authentication/actionCreator';
import {closeNotification} from 'ducks/alert/actionCreator';

const ComponentLayout = (): ReactElement => {
  const dispatch = useDispatch();
  const {authentication, alert}: any = useSelector<RootState>((state) => state);

  useEffect(() => {
    alert.onShow &&
      notificationAlert(alert.type, alert.message, () =>
        dispatch(closeNotification()),
      );
  }, [alert]);

  useEffect(() => {
    // dispatch(checkTokenUser());
  }, []);

  return (
    <Router history={history}>
      {authentication.authenticated ? <MainLayout /> : <LoginLayout />}
    </Router>
  );
};

export default ComponentLayout;
