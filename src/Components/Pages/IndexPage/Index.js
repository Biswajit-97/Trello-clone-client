import React, { useState } from "react";
import IndexNav from "../../IndexNav";
import { useHistory } from "react-router-dom";
import {
  Container,
  Content,
  LeftSide,
  RightSide,
  LeftWrapper,
  Title,
  Text,
  Button,
  SvgItem,
  Input,
  Register,
} from "./Styled";

const Index = () => {
  let history = useHistory();
  const [userEmail, setUserEmail] = useState();

  return (
    <>
      <IndexNav />
      <Container>
        <Content>
          <LeftSide>
            <LeftWrapper>
              <Title>Trello helps teams move work forward.</Title>
              <Text>
                Collaborate, manage projects, and reach new productivity peaks.
                From high rises to the home office, the way your team works is
                unique—accomplish it all with Trello.
              </Text>
              <Register>
                <Input
                  type="text"
                  placeholder="Enter Email"
                  required
                  value={userEmail}
                  onchange={(e) => setUserEmail(e.target.value)}
                />
                <Button onClick={() => history.push("/register")}>
                  Sign up - it's free
                </Button>
              </Register>
            </LeftWrapper>
          </LeftSide>
          <RightSide>
            <SvgItem src="https://images.ctfassets.net/rz1oowkt5gyp/5QIzYxue6b7raOnVFtMyQs/113acb8633ee8f0c9cb305d3a228823c/hero.png?w=1200&fm=webp" />
          </RightSide>
        </Content>
      </Container>
    </>
  );
};

export default Index;
