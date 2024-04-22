import { Card, Header } from "semantic-ui-react";
import Container from "../Container";
import "./ListLastEvents.scss";
import useFetch from "../../hooks/useFetch";
import LastEvents from "../LastEvents/LastEvents";

export default function ListLastEvents() {
  const lastEventsFetch = useFetch(
    `${process.env.REACT_APP_URL_BASE}/events?ts=1&apikey=${process.env.REACT_APP_API_KEY}&hash=${process.env.REACT_APP_HASH_ID}&orderBy=startDate&limit=5`
  );

  return (
    <div className="container-list-last-events">
      <Header size="large">Last Events</Header>
      <Container>
        <Card.Group itemsPerRow={5} stackable>
          <LastEvents lastEventsFetch={lastEventsFetch} />
        </Card.Group>
      </Container>
    </div>
  );
}
