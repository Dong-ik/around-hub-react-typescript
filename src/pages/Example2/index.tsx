import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const Container = styled.section`
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
`;

const Card = styled.div`
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 100%;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const Text = styled.p`
  font-size: 16px;
`;

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export const Example2 = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
    scrollToTop();
  };

  return (
    <Container>
      <Title>Example 2 Page</Title>
      <Content>
        <Card>
          <Image src="https://placehold.co/250" alt="Example 2 Image" />
          <Text>This is an example of a card component.</Text>
          <button onClick={handleClick}>Go Home</button>
        </Card>
        <Card>
          <Image src="https://placehold.co/250" alt="Example 2 Image" />
          <Text>This is an example of a card component.</Text>
        </Card>
      </Content>
    </Container>
  );
};
