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
                  <Button
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
                  Done
                </FlexContainer>
              </Container>
              <Container>
                <FlexContainer>
                  <StyledText3>
                    An Ugly Myspace Profile Will Sure Ruin Your Reputation
                  </StyledText3>
                  Mark Complete
                </FlexContainer>
              </Container>
              <Container>
                <FlexContainer>
                  <StyledText3>
                    Making A New Trend In Poster Printing
                  </StyledText3>
                  Mark Complete
                </FlexContainer>
              </Container>
            </Card>
          </Col>

          <Col style={{paddingTop: 34, paddingBottom: 12}}>
            <Collapse bordered={false}>
              <Panel header={Header(TITLE_1)} key="1">
                <Card>
                  <p>{DUMMY_TEXT}</p>
                </Card>
              </Panel>
            </Collapse>

            <div style={{marginTop: 12, marginBottom: 12}}>
              <Collapse bordered={false}>
                <Panel header={Header(TITLE_2)} key="1">
                  <Card>
                    <p>{DUMMY_TEXT}</p>
                  </Card>
                </Panel>
              </Collapse>
            </div>

            <Collapse bordered={false}>
              <Panel header={Header(TITLE_3)} key="1">
                <Card>
                  <p>{DUMMY_TEXT}</p>
                </Card>
              </Panel>
            </Collapse>
          </Col>
        </Col>

        <Col span={12}>
          <StyledTitle2>Your Team</StyledTitle2>
          <Card>
            <StyledCol2>
              <Avatar />
              <p>{DUMMY_DATA}</p>
            </StyledCol2>
          </Card>
          <div style={{marginBottom: 18, marginTop: 18}}>
            <Card>
              <StyledCol2>
                <Avatar />
                <p>{DUMMY_DATA}</p>
              </StyledCol2>
            </Card>
          </div>
          <Card>
            <StyledCol2>
              <Avatar />
              <p>{DUMMY_DATA}</p>
            </StyledCol2>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default HomeContent;
