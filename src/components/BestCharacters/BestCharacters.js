import { Header, Button, Grid, Image } from "semantic-ui-react";
import marvelImage from "../../img/marvel.png";

import "./BestCharacters.scss";
import Container from "../Container";

export default function BestCharacters() {
  return (
    <Container>
      <div className="best-characters">
        <Grid columns={2} divided="vertically">
          <Grid.Column>
            <Header as="h1">
              The best Marvel characters everyone is talking about
            </Header>
            <Header as="h3">Enjoy the top-notch content.</Header>
            <Button>View all characters</Button>
          </Grid.Column>
          <Grid.Column className="image-container">
            <Image src={marvelImage} alt="Marvel APP" />
          </Grid.Column>
        </Grid>
      </div>
    </Container>
  );
}
