import {ReactElement} from 'react';
import type {PropsType} from './types';

import {
  Container,
  LinkButton,
  colorContainerStyles,
  inputContainerStyles,
} from './styled';
import {LabelStyled} from 'compositions/WebsiteGoals/styled';
import {Input, Row, Col} from 'antd';

// TODO:
// exports: AlphaPicker, BlockPicker, ChromePicker, CirclePicker, CompactPicker, CustomPicker, GithubPicker, GooglePicker, HuePicker, MaterialPicker, PhotoshopPicker, SketchPicker, SliderPicker, SwatchesPicker, TwitterPicker, default)
// import {BlockPicker} from 'react-color';

const CreativeColors = (props: PropsType): ReactElement => {
  const {initialValues, setInitialValues} = props;
  const {colors} = initialValues;

  const onChange = (value: string, index: number) => {
    const newColors = [...colors];
    newColors[index].color = value;

    setInitialValues({...initialValues, colors: newColors});
  };

  const addColor = () => {
    const objColors = [...colors];
    objColors.push({color: '#e9e9e9'});

    setInitialValues({...initialValues, colors: objColors});
  };

  return (
    <Container>
      <LabelStyled>Select your brand colors.</LabelStyled>

      <div>
        <Row gutter={10}>
          {(colors || []).map((item, index) => {
            return (
              <Col span={6} key={index} style={{marginTop: 10}}>
                <div
                  style={{
                    background: item?.color ? item?.color : '#e9e9e9',
                    ...colorContainerStyles,
                  }}>
                  <p
                    style={{
                      textAlign: 'center',
                      color: '#000',
                    }}>
                    {item?.color === '#e9e9e9' ? '' : item?.color}
                  </p>
                </div>
                <div style={inputContainerStyles}>
                  <Input
                    style={{
                      height: 20,
                      alignSelf: 'center',
                      textAlign: 'center',
                    }}
                    onChange={(e) => onChange(e.target.value, index)}
                  />
                </div>
              </Col>
            );
          })}
        </Row>
      </div>

      <div style={{marginTop: 14}} />

      <LinkButton style={{marginTop: 10}} onClick={addColor}>
        + Add Colors
      </LinkButton>
    </Container>
  );
};

export default CreativeColors;
