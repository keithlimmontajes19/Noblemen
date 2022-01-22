import {ReactElement} from 'react';
import type {PropsType} from './types';

/* styles antd utils*/
import {
  StyledTextHeader,
  Container,
  StyledAccordion,
  StyledTitle2,
  StyledCol2,
  StyledText3,
  FlexContainer,
  PanelStyledText,
  AvatarStyledText,
  AvatarNameText,
  AvaratPositionText,
  ColStyles,
  CollapseContainer,
  AvatarContainer,
  AvatarPositionContainer,
} from './styled';
import {Row, Col, Collapse} from 'antd';
import {Edit} from 'react-feather';
import {theme} from 'utils/colors';
import {
  TITLE_1,
  TITLE_2,
  TITLE_3,
  DUMMY_TEXT,
  DUMMY_DATA,
} from 'utils/constants';

/* component */
import Card from 'components/Card';
import Avatar from 'components/Avatar';
import Button from 'components/Button';
import {Check} from 'react-feather';

import {LabelStyled} from 'compositions/WebsiteGoals/styled';

const {Panel} = Collapse;

const HomeContent = (props: PropsType): ReactElement => {
  const {setVisible, setVisible2, setVisible3} = props;

  const Header = (title: string) => {
    return <StyledAccordion>{title}</StyledAccordion>;
  };

  return (
    <>
      <Row gutter={20}>
        <Col span={12}>
          <Col>
            <Card>
              <Container>
                <StyledTextHeader>Onboarding Checklist</StyledTextHeader>
              </Container>
              <Container>
                <FlexContainer>
                  <StyledText3>Complete your Project Brief</StyledText3>
                  <Button
                    width={90}
                    onClick={() => setVisible(true)}
                    title="Start"
                    icon={
                      <Edit
                        color={theme.WHITE}
                        style={{marginTop: -5}}
                        size={14}
                      />
                    }
                  />
                </FlexContainer>
              </Container>
              <Container>
                <FlexContainer>
                  <StyledText3>
                    Provide your logos, icons, images, and color palette
                  </StyledText3>
                  <div style={{marginLeft: 20}} />
                  <Button
                    width={90}
                    onClick={() => setVisible2(true)}
                    title="Start"
                    icon={
                      <Edit
                        color={theme.WHITE}
                        style={{marginTop: -5}}
                        size={14}
                      />
                    }
                  />
                </FlexContainer>
              </Container>
              <Container>
                <FlexContainer>
                  <StyledText3>Complete your Visual Voice guide</StyledText3>
                  <Button
                    width={90}
                    onClick={() => setVisible3(true)}
                    title="Start"
                    icon={
                      <Edit
                        color={theme.WHITE}
                        style={{marginTop: -5}}
                        size={14}
                      />
                    }
                  />
                </FlexContainer>
              </Container>
              <Container>
                <FlexContainer>
                  <StyledText3>How To Energize Yourself </StyledText3>
                  <div style={{paddingRight: 20}}>
                    <LabelStyled color={theme.GREEN}>
                      <Check size={14} /> Done
                    </LabelStyled>
                  </div>
                </FlexContainer>
              </Container>
              <Container>
                <FlexContainer>
                  <StyledText3>
                    An Ugly Myspace Profile Will Sure Ruin Your Reputation
                  </StyledText3>
                  <div style={{marginLeft: 20}} />
                  <div style={{paddingRight: 20}}>
                    <LabelStyled color={theme.GREEN}>
                      <Check size={14} /> Done
                    </LabelStyled>
                  </div>
                </FlexContainer>
              </Container>
              <Container>
                <FlexContainer>
                  <StyledText3>
                    Making A New Trend In Poster Printing
                  </StyledText3>
                  <div style={{paddingRight: 20}}>
                    <LabelStyled color={theme.GREEN}>
                      <Check size={14} /> Done
                    </LabelStyled>
                  </div>
                </FlexContainer>
              </Container>
            </Card>
          </Col>

          <Col style={ColStyles}>
            <Collapse bordered={false}>
              <Panel header={Header(TITLE_1)} key="1">
                <PanelStyledText>{DUMMY_TEXT}</PanelStyledText>
              </Panel>
            </Collapse>

            <CollapseContainer>
              <Collapse bordered={false}>
                <Panel header={Header(TITLE_2)} key="1">
                  <PanelStyledText>{DUMMY_TEXT}</PanelStyledText>
                </Panel>
              </Collapse>
            </CollapseContainer>

            <Collapse bordered={false}>
              <Panel header={Header(TITLE_3)} key="1">
                <PanelStyledText>{DUMMY_TEXT}</PanelStyledText>
              </Panel>
            </Collapse>
          </Col>
        </Col>

        <Col span={12}>
          <div style={{marginBottom: 10}}>
            <StyledTitle2>Your Team</StyledTitle2>
          </div>

          <Card>
            <StyledCol2>
              <AvatarContainer>
                <Avatar />
                <AvatarPositionContainer>
                  <AvatarNameText>Mittie Evans</AvatarNameText>
                  <AvaratPositionText>Mittie Evans</AvaratPositionText>
                </AvatarPositionContainer>
              </AvatarContainer>
              <AvatarStyledText>{DUMMY_DATA}</AvatarStyledText>
            </StyledCol2>
          </Card>

          <div style={{marginBottom: 18, marginTop: 18}}>
            <Card>
              <StyledCol2>
                <AvatarContainer>
                  <Avatar />
                  <AvatarPositionContainer>
                    <AvatarNameText>Mittie Evans</AvatarNameText>
                    <AvaratPositionText>Mittie Evans</AvaratPositionText>
                  </AvatarPositionContainer>
                </AvatarContainer>
                <AvatarStyledText>{DUMMY_DATA}</AvatarStyledText>
              </StyledCol2>
            </Card>
          </div>

          <Card>
            <StyledCol2>
              <AvatarContainer>
                <Avatar />
                <AvatarPositionContainer>
                  <AvatarNameText>Mittie Evans</AvatarNameText>
                  <AvaratPositionText>Mittie Evans</AvaratPositionText>
                </AvatarPositionContainer>
              </AvatarContainer>
              <AvatarStyledText>{DUMMY_DATA}</AvatarStyledText>
            </StyledCol2>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default HomeContent;
