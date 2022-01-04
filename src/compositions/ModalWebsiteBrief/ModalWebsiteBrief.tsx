import {ReactElement, useState, useEffect} from 'react';

import type {PropsType} from './types';
import {
  StyledTitle,
  SyledSubtitle,
  IconContainer,
  IconTitle,
  IconSubtitle,
} from './styled';
import {Modal, Row, Col} from 'antd';
import {theme} from 'utils/colors';
import {DESIGNS_APP, WEBSITE_BRIEF} from 'utils/constants';
import {FileText, Command, Columns} from 'react-feather';

import Button from 'components/Button';
import WebsiteYou from 'compositions/WebsiteYou';
import WebsiteGoals from 'compositions/WebsiteGoals';
import WebsiteAudience from 'compositions/WebsiteAudience';

const WebsiteForms = ({page}) => {
  switch (page) {
    case 1:
      return <WebsiteGoals />;
    case 2:
      return <WebsiteAudience />;
    default:
      return <WebsiteYou />;
  }
};

const ModalWebsiteBrief = (props: PropsType): ReactElement => {
  const {visible, setVisible} = props;

  const [page, setPage] = useState(0);
  const [initialValues, setInitialValues] = useState({
    youField1: '',
    youField2: '',
    youField3: '',
    goalField1: '',
    goalField2: '',
    goalField3: '',
    audienceField1: '',
    audienceField2: '',
    audienceField3: '',
  });

  const handleSubmit = () => {
    console.log(initialValues);
  };

  useEffect(() => {
    setVisible(0);
  }, []);

  return (
    <Modal
      afterClose={() => setPage(0)}
      width={800}
      visible={visible}
      footer={false}
      centered={true}
      closable={false}
      onCancel={() => setVisible(false)}
      maskStyle={{background: theme.MODAL}}>
      <StyledTitle>{WEBSITE_BRIEF}</StyledTitle>
      <SyledSubtitle>{DESIGNS_APP}</SyledSubtitle>

      <Row gutter={21} style={{marginTop: 70}}>
        <Col span={9}>
          <Col span={24} style={{display: 'flex', flexDirection: 'row'}}>
            <IconContainer>
              <FileText color={theme.WHITE} />
            </IconContainer>
            <IconTitle>
              You <br /> <IconSubtitle>What do you do?</IconSubtitle>
            </IconTitle>
          </Col>

          <Col
            span={24}
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginTop: 32,
              marginBottom: 32,
            }}>
            <IconContainer>
              <Command color={theme.WHITE} />
            </IconContainer>
            <IconTitle>
              Goal <br /> <IconSubtitle>What do you need?</IconSubtitle>
            </IconTitle>
          </Col>

          <Col span={24} style={{display: 'flex', flexDirection: 'row'}}>
            <IconContainer>
              <Columns color={theme.WHITE} />
            </IconContainer>
            <IconTitle>
              Audience <br /> <IconSubtitle>Who’s your user?</IconSubtitle>
            </IconTitle>
          </Col>
        </Col>

        <Col span={15}>
          <WebsiteForms page={page} />
        </Col>
      </Row>

      <Col offset={20}>
        <Button
          title="Next"
          width={98}
          onClick={() => {
            page < 4 ? setPage(page + 1) : setVisible(false);
            handleSubmit();
          }}
        />
      </Col>
    </Modal>
  );
};

export default ModalWebsiteBrief;
