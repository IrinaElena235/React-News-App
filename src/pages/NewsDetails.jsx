import React from "react";
import { useContext, useState, useEffect} from "react"; 
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useFetch } from "../utils/hooks/useFetch";
import { getNewsDetailsEndpoint } from "../api/endpoints";
import { getNewsDetails } from "../api/adaptors";
import Button from "react-bootstrap/Button";
import "./NewsDetails.css";
import Alert from "react-bootstrap/Alert";
import styles from "./NewsDetails.module.css"
import "./NewsDetails.css";
import { getFormattedDate } from "../utils/date";
import { FavoritesContext } from "../store/favorites/context";
import { addToFavorites } from "../store/favorites/actions";
import { useLocalStorage } from "../utils/hooks/useLocalStorage";


function NewsDetails() {
  const { dispatch, state } = useContext(FavoritesContext);
  let { newsId } = useParams();
  newsId = decodeURIComponent(newsId);
  const newsDetailsEndpoint = getNewsDetailsEndpoint(newsId);
  const newsDetails = useFetch(newsDetailsEndpoint);
  const adaptedNewsDetails = getNewsDetails(newsDetails);
  const [isAlertDisplayed, setIsAlertDisplayed] = useState(false);
  const { title, description, image, date, author, content, thumbnail } =
    adaptedNewsDetails;
  const formattedDate = getFormattedDate(date);
  const [_, setLocalStorageState] = useLocalStorage(
    "favorites",
    state
  );
  useEffect(() => {
    setLocalStorageState(state);
  }, [state, setLocalStorageState]);


  function handleAddToFavorites(news) {
    const actionResult = addToFavorites(news);
    dispatch(actionResult);
    setIsAlertDisplayed(true);
    setTimeout(() => {
      setIsAlertDisplayed(false);
    }, 2000);
  }

  return (
    <Layout>
      {isAlertDisplayed && (
        <Alert variant="success" id={styles.alert}>
          Great! You can see the news by accessing the Favorites section.
        </Alert>
      )}
      <Container className="NewsDetails my-5">
        <Row className="d-flex justify-content-center">
          <Col xs={12} lg={8}>
            <h1 className="pt-3 mb-5">{title}</h1>
            <p className="fw-bold">{description}</p>
            <div
              dangerouslySetInnerHTML={{ __html: image }}
              className="mb-4"
            ></div>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div className="fw-bold">
                <p>{author}</p>
                <p className="mb-0">{formattedDate}</p>
              </div>
              <Button
              onClick={() => {
                handleAddToFavorites({
                  id: newsId,
                  thumbnail,                  
                  title,
                  description,
                  hasCloseButton: true,
                });
              }}handleAddToFavorites
              >
              Add to favorites
              </Button>
            </div>
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default NewsDetails;