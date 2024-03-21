import React, { useContext} from "react";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import {FavoritesContext} from "../store/favorites/context"
import NewsCardList from "../components/NewsCardList";

function Favorites() {
  const { state } = useContext(FavoritesContext);

  return (
    <Layout>
      <Container>
        {
          state.news.length > 0 ? (
            <NewsCardList newsList={state.news} />
          ) : ( 
          <p>You don't have any favorites news yet.</p>
        )}
      </Container>
    </Layout>
  );
}

export default Favorites;
