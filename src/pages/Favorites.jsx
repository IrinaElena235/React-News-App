import React, { useContext, useEffect} from "react";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import {FavoritesContext} from "../store/favorites/context"
import NewsCardList from "../components/NewsCardList";
import { useLocalStorage } from "../utils/hooks/useLocalStorage";

function Favorites() {
  const { state } = useContext(FavoritesContext);
  const { news } = state;
  const [_, setLocalStorageState] = useLocalStorage(
    "favorites",
    state
  );
  useEffect(() => {
    setLocalStorageState(state);
  }, [state, setLocalStorageState]);
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
