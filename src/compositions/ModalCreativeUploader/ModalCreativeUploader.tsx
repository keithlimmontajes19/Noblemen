import {ReactElement, useState} from 'react';

import type {PropsType} from './types';
import {} from './styled';

import {
  StyledTitle,
  IconContainer,
  IconTitle,
  IconSubtitle,
} from 'compositions/ModalWebsiteBrief/styled';
import {Modal, Row, Col} from 'antd';
import {theme} from 'utils/colors';
import {CREATIVE_UPLOADER} from 'utils/constants';
import {FileText, Command, Columns} from 'react-feather';

import CreativeImages from 'compositions/CreativeImages';
import CreativeColors from 'compositions/CreativeColors';
import CreativeBrands from 'compositions/CreativeBrands';
import Button from 'components/Button';

/* reducer action */
import {postCreativeProvider} from 'ducks/onboarding/actionCreator';
import {useDispatch} from 'react-redux';

const CreativeForms = ({
  page,
  setPage,
  setInitialValues,
  initialValues,
  handleSubmit,
}) => {
  switch (page) {
    case 0:
      return (
        <CreativeImages
          setInitialValues={setInitialValues}
          initialValues={initialValues}
        />
      );
    case 1:
      return (
        <CreativeBrands
          setInitialValues={setInitialValues}
          initialValues={initialValues}
        />
      );
    case 2:
      return (
        <CreativeColors
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

const ModalCreativeUploader = (props: PropsType): ReactElement => {
  const {visible, setVisible} = props;
  const dispatch = useDispatch();

  /*
   * TODO:
   * catch error if not succes dont close the modal
   */

  const [page, setPage] = useState(0);
  const [initialValues, setInitialValues] = useState({
    images: [],
    brand_marks: {
      primary_logo: null,
      primary_icon: null,
      alternate_logos_icons: [],
    },
    colors: [],
  });

  const handleSubmit = () => {
    setVisible(false);
    dispatch(postCreativeProvider(initialValues));
  };

  return (
    <Modal
      width={700}
      visible={visible}
      footer={false}
      centered={true}
      closable={false}
      onCancel={() => {
        setPage(0);
        setVisible(false);
        setInitialValues({
          images: [],
          brand_marks: {
            primary_logo: null,
            primary_icon: null,
            alternate_logos_icons: [],
          },
          colors: [],
        });
      }}
      maskStyle={{background: theme.MODAL}}>
      <StyledTitle align="left">{CREATIVE_UPLOADER}</StyledTitle>

      <Row gutter={21} style={{marginTop: 33}}>
        <Col span={7}>
          <Col span={24} style={{display: 'flex', flexDirection: 'row'}}>
            <IconContainer>
              <FileText color={theme.WHITE} />
            </IconContainer>
            <IconTitle>
              Images <br /> <IconSubtitle>Pictures to use</IconSubtitle>
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
              Brand Marks <br /> <IconSubtitle>Logos and icons</IconSubtitle>
            </IconTitle>
          </Col>

          <Col span={24} style={{display: 'flex', flexDirection: 'row'}}>
            <IconContainer background={page >= 2 ? '' : theme.SUBTITLE_GRAY}>
              <Columns color={theme.WHITE} />
            </IconContainer>
            <IconTitle title={page >= 2 ? '' : theme.BLACK}>
              Colors <br /> <IconSubtitle>Brand palette</IconSubtitle>
            </IconTitle>
          </Col>
        </Col>

        <Col span={17}>
          <CreativeForms
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

export default ModalCreativeUploader;
