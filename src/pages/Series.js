import { Grid, Header } from "semantic-ui-react";
import Container from "../components/Container";
import ListSeries from "../components/ListSeries";
import useFetch from "../hooks/useFetch";

export default function Series() {
  const listSeries = useFetch(
    `${process.env.REACT_APP_URL_BASE}/series?ts=1&apikey=${process.env.REACT_APP_API_KEY}&hash=${process.env.REACT_APP_HASH_ID}&orderBy=startYear&limit=20`
  );

  return (
    <div className="series-page">
      <div id="slide-series-image" />
      <Grid>
        <Grid.Column>
          <Container bg="light">
            <Header as="h2" className="ui grey inverted header">
              Newest Marvel Series
            </Header>
            <ListSeries listSeries={listSeries} />
          </Container>
        </Grid.Column>
      </Grid>
    </div>
  );
}
