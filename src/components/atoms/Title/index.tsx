import styled from "@emotion/styled";

interface COntaiverProps {
  type?: string;
  color?: string;
}

const Container = styled.h1<COntaiverProps>`
  font-size: ${(props) => (props.type === "sencondary" ? "50%" : "100%")};
  margin-bottom: 5px;
  color: ${(props) => props.color || "black"};
`;

interface Props {
  text: string;
  type?: string;
  color?: string;
}

export const Title = ({ text, type = "primary", color }: Props) => {
  return (
    <Container type={type} color={color}>
      {text}
    </Container>
  );
};
