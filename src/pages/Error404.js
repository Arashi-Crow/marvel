import { Container, Header } from "semantic-ui-react";

export default function Error404() {
  return (
    <Container
      textAlign="center"
      style={{ marginTop: "400px" }}
    >
      <Header as="h1" className="ui grey inverted header">Page not found</Header>
    </Container>
  );
}
