import {ReactElement, useState} from 'react';

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

import {useDispatch} from 'react-redux';
import {postWebBriefOnboaring} from 'ducks/onboarding/actionCreator';

const WebsiteForms = ({
  page,
  setPage,
  setInitialValues,
  initialValues,
  handleSubmit,
}) => {
  switch (page) {
    case 0:
      return (
        <WebsiteYou
          setInitialValues={setInitialValues}
          initialValues={initialValues}
        />
      );
    case 1:
      return (
        <WebsiteGoals
          setInitialValues={setInitialValues}
          initialValues={initialValues}
        />
      );
    case 2:
      return (
        <WebsiteAudience
          setInitialValues={setInitialValues}
          initialValues={initialValues}
        />
      );
    default:
      setPage(0);
      handleSubmit();

      return <></>;
  }
};

const ModalWebsiteBrief = (props: PropsType): ReactElement => {
  const dispatch = useDispatch();
  const {visible, setVisible} = props;

  const [page, setPage] = useState(0);
  const [initialValues, setInitialValues] = useState({
    you_tell_the_brand: '',
    you_what_products_service: '',
    you_what_apart_competitors: '',
    goal_what_accomplish_new_website: '',
    goal_what_accomplish_similar_goals: '',
    goal_what_do_you_like_about_website: '',
    audience_who_target: '',
    audience_what_they_care: '',
    audience_what_they_need_to_be_seen: '',
  });

  const handleSubmit = () => {
    setVisible(false);
    dispatch(postWebBriefOnboaring(initialValues));
  };

  return (
    <Modal
      afterClose={() => setPage(0)}
      width={800}
      visible={visible}
      footer={false}
      centered={true}
      closable={false}
      onCancel={() => {
        setPage(0);
        setVisible(false);
      }}
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
            <IconContainer background={page >= 1 ? '' : theme.SUBTITLE_GRAY}>
              <Command color={theme.WHITE} />
            </IconContainer>
            <IconTitle title={page >= 1 ? '' : theme.BLACK}>
              Goal <br /> <IconSubtitle>What do you need?</IconSubtitle>
            </IconTitle>
          </Col>

          <Col span={24} style={{display: 'flex', flexDirection: 'row'}}>
            <IconContainer background={page >= 2 ? '' : theme.SUBTITLE_GRAY}>
              <Columns color={theme.WHITE} />
            </IconContainer>
            <IconTitle title={page >= 2 ? '' : theme.BLACK}>
              Audience <br /> <IconSubtitle>Who’s your user?</IconSubtitle>
            </IconTitle>
          </Col>
        </Col>

        <Col span={15}>
          <WebsiteForms
            page={page}
            setPage={setPage}
            setInitialValues={setInitialValues}
            initialValues={initialValues}
            handleSubmit={handleSubmit}
          />
        </Col>
      </Row>

      <Col offset={20}>
        <Button
          title="Next"
          width={98}
          onClick={() => {
            if (page < 3) {
              setPage(page + 1);
            }
          }}
        />
      </Col>
    </Modal>
  );
};

export default ModalWebsiteBrief;
