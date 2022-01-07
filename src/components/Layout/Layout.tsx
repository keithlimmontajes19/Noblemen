import {ReactElement, useEffect} from 'react';
import {BrowserRouter} from 'react-router-dom';

/* styles */
import {} from './styled';
import {notificationAlert} from 'utils/alerts';

/* components */
import MainLayout from 'views/private/MainLayout';
import LoginLayout from 'views/public/LoginLayout';

/* reducer action */
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from 'ducks/store';
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

  return (
    <BrowserRouter>
      {authentication.authenticated ? <MainLayout /> : <LoginLayout />}
    </BrowserRouter>
  );
};

export default ComponentLayout;
