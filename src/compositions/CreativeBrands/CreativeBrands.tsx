import {ReactElement, useState, useEffect} from 'react';
import type {PropsType} from './types';

import {Form} from 'antd';
import {Container} from './styled';
import {LabelStyled} from 'compositions/WebsiteGoals/styled';

import InputUpload from 'components/InputUpload';
import Upload from 'components/Upload';

const CreativeBrands = (props: PropsType): ReactElement => {
  const {initialValues, setInitialValues} = props;

  const [primaryLogoId, setPrimaryLogoId] = useState(null);
  const [primaryIconId, setPrimaryIconId] = useState(null);
  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    setInitialValues({
      ...initialValues,
      brand_marks: {
        primary_logo: primaryLogoId,
        primary_icon: primaryIconId,
        alternate_logos_icons: fileList,
      },
    });
  }, [primaryLogoId, primaryIconId, fileList]);

  return (
    <Form layout="vertical">
      <Container>
        <Form.Item label={<LabelStyled>Primary logo</LabelStyled>}>
          <InputUpload fileId={primaryLogoId} setFileId={setPrimaryLogoId} />
        </Form.Item>

        <Form.Item label={<LabelStyled>Primary icon</LabelStyled>}>
          <InputUpload fileId={primaryIconId} setFileId={setPrimaryIconId} />
        </Form.Item>

        <Form.Item label={<LabelStyled>Alternate logos and icons</LabelStyled>}>
          <Upload fileList={fileList} setFileList={setFileList} />
        </Form.Item>
      </Container>
    </Form>
  );
};

export default CreativeBrands;
