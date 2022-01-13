import {ReactElement, useEffect, useState} from 'react';
import {Redirect, useLocation} from 'react-router-dom';

/* styles antd */
import {Form} from 'antd';
import {
  Container,
  StyledButton,
  SubtitledContainer,
  StyledPassword,
} from './styled';
import {LabelStyled} from 'compositions/WebsiteYou/styled';

/* redux action */
import {useSelector, useDispatch} from 'react-redux';
import {changePassword} from 'ducks/authentication/actionCreator';
import {rulesConfig} from 'utils/helpers';
import {RootState} from 'ducks/store';
import {PASSWORD_REGEX, PASSWORD_NOT_MATCH} from 'utils/constants';

const ChangePassword = (): ReactElement => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [redirect, setRedirect] = useState(false);

  const {password_change}: any = useSelector<RootState>(
    (state) => state.authentication,
  );

  const search = useLocation().search;
  const id = new URLSearchParams(search).get('id');
  const token = new URLSearchParams(search).get('token');
  const password = form.getFieldValue('password');
  const confirm_password = form.getFieldValue('confirm_password');

  const handlesubmit = (values: any) => {
    values.token = token;
    values.id = id;

    dispatch(changePassword(values));
  };

  const setFormFields = (field: string, errors: string) => {
    form.setFields([
      {
        name: field,
        errors: [errors],
      },
    ]);
  };

  useEffect(() => {
    if (!id || !token || (!id && !token)) {
      setRedirect(true);
    } else {
      setRedirect(false);
    }
  }, []);

  useEffect(() => {
    if (password !== confirm_password) {
      setFormFields('confirm_password', PASSWORD_NOT_MATCH);
    }
  }, [password, confirm_password]);

  useEffect(() => {
    if (password_change === 104) {
      setFormFields('password', PASSWORD_REGEX);
      setFormFields('confirm_password', PASSWORD_REGEX);
    }
  }, [password_change]);

  return (
    <Container>
      {redirect && <Redirect to="/" />}

      <LabelStyled size={22}>
        <b>Change Password 🔒</b>
      </LabelStyled>

      <SubtitledContainer>
        <LabelStyled>Enter your password and confirm password</LabelStyled>
      </SubtitledContainer>

      <Form
        form={form}
        layout="vertical"
        requiredMark={false}
        onFinish={handlesubmit}
        initialValues={{
          password: '',
          confirm_password: '',
        }}>
        <Form.Item
          name="password"
          rules={rulesConfig()}
          label={<LabelStyled>Password</LabelStyled>}>
          <StyledPassword placeholder="Input Password" size="large" />
        </Form.Item>

        <Form.Item
          name="confirm_password"
          rules={rulesConfig()}
          label={<LabelStyled>Corfim Password</LabelStyled>}>
          <StyledPassword placeholder="Confirm Password" size="large" />
        </Form.Item>

        <StyledButton size="large" onClick={() => form.submit()}>
          Send
        </StyledButton>
      </Form>
    </Container>
  );
};

export default ChangePassword;
