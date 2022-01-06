import styled from 'styled-components';
import {Input, Button} from 'antd';

export const Container = styled.div`
  margin-top: 150px;
  align-content: center;
  align-items: center;
  padding: 30px;
  overflow: hidden;
`;

export const StyledInput = styled(Input)`
  border: 1px solid #d8d6de;
  border-radius: 6px;
`;

export const StyledPassword = styled(Input.Password)`
  border: 1px solid #d8d6de;
  border-radius: 6px;
`;

export const StyledButton = styled(Button)`
  border-color: #7367f0 !important;
  background-color: #7367f0 !important;
  width: 100%;
  color: white;
  border-radius: 6px;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const SignupContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const StyledTextlink = styled.a`
  color: '#7367f0';
`;

export const SubtitledContainer = styled.div`
  margin-top: 10px;
  margin-bottom: 50px;
`;
