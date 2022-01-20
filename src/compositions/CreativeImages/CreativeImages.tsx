import {ReactElement, useEffect, useState} from 'react';

import type {PropsType} from './types';
import {Container, StyledText} from './styled';
import {IMAGES_SUBTITLE} from 'utils/constants';
import Upload from 'components/Upload';

const CreativeImages = (props: PropsType): ReactElement => {
  const {initialValues, setInitialValues} = props;
  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    setInitialValues({...initialValues, images: fileList});
  }, [fileList]);

  return (
    <Container>
      <StyledText>{IMAGES_SUBTITLE}</StyledText>
      <Upload fileList={fileList} setFileList={setFileList} />
    </Container>
  );
};

export default CreativeImages;
