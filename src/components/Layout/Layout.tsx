import {ReactElement} from 'react';
import {BrowserRouter} from 'react-router-dom';

/* styles */
import {} from './styled';

/* components */
import MainLayout from 'views/private/MainLayout';
import LoginLayout from 'views/public/LoginLayout';

/* reducer action */
import {useSelector} from 'react-redux';
import {RootState} from 'ducks/store';

const ComponentLayout = (): ReactElement => {
  const {authentication}: any = useSelector<RootState>((state) => state);

  return (
    <BrowserRouter>
      {authentication.authenticated ? <MainLayout /> : <LoginLayout />}
    </BrowserRouter>
  );
};

export default ComponentLayout;
