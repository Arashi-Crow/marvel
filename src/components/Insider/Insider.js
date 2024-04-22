import { Grid, Header, Image, Button } from "semantic-ui-react";
import ImageInsider from "../../img/insider.jpeg";
import "./Insider.scss";

export default function Insider() {

  const handleClick = () => {
    window.open("https://www.marvel.com", "_blank");
  };

  return (
    <div className="container-insider">
      <Grid container columns="2">
        <Grid.Column>
          <Image src={ImageInsider} alt="Image Insider" />
        </Grid.Column>
        <Grid.Column>
          <Header size="large" color="red" as="h1">
            Watch, Earn, and Redeem
          </Header>
          <Header size="large" as="h3">
            Earn points doing what you love
          </Header>
          <div className="container-insider-content-button">
            <Button onClick={handleClick}>Join now</Button>
          </div>
        </Grid.Column>
      </Grid>
    </div>
  );
}
