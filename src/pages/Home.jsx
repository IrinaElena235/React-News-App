import React from "react";
import SimpleHomePage from "./SimpleHomePage";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import { useFetch } from "../utils/hooks/useFetch";
import { getNewsCategoriesEndpoint } from "../api/endpoints";
import NewsCardList from "../components/NewsCardList";
import { getNewsList } from "../api/adaptors";
import { Link } from "react-router-dom";

function Home() {
  const travelNewsEndpoint = getNewsCategoriesEndpoint("travel", 1, 3);
  const foodNewsEndpoint = getNewsCategoriesEndpoint("food", 1, 3);
  const fashionNewsEndpoint = getNewsCategoriesEndpoint("fashion", 1, 3);
  const scienceNewsEndpoint = getNewsCategoriesEndpoint("science", 1, 3);
  const musicNewsEndpoint = getNewsCategoriesEndpoint("music", 1, 3);
  const filmNewsEndpoint = getNewsCategoriesEndpoint("film", 1, 3);

  let travelData = useFetch(travelNewsEndpoint);
  let foodData = useFetch(foodNewsEndpoint);
  let fashionData = useFetch(fashionNewsEndpoint);
  let scienceData = useFetch(scienceNewsEndpoint);
  let musicData = useFetch(musicNewsEndpoint);
  let filmData = useFetch(filmNewsEndpoint);

  const adaptedTravelData = getNewsList(travelData);
  const adaptedFoodData = getNewsList(foodData);
  const adaptedFashionData = getNewsList(fashionData);
  const adaptedScienceData = getNewsList(scienceData);
  const adaptedMusicData = getNewsList(musicData);
  const adaptedfilmData = getNewsList(filmData);

  return (
    <Layout>
      <SimpleHomePage />
      <section id="travelSection" className="travel my-5">
        <Container>
          <h1 className="mb-5 pt-3">Travel</h1>
          <NewsCardList newsList={adaptedTravelData} />
          <p>
            See all travel related news in the section{" "}
            <Link to="/category/travel" className="text-secondary">
              Travel
            </Link>
            .
          </p>
        </Container>
      </section>
      <section className="food my-5">
        <Container>
          <h1 className="mb-5 pt-3">Food</h1>
          <NewsCardList newsList={adaptedFoodData} />
          <p>
            See all food related news in the section{" "}
            <Link to="/category/food" className="text-secondary">
              Food
            </Link>
            .
          </p>
        </Container>
      </section>
      <section className="fashion my-5">
        <Container>
          <h1 className="mb-5 pt-3">Fashion</h1>
          <NewsCardList newsList={adaptedFashionData} />
          <p>
            See all fashion related news in the section{" "}
            <Link to="/category/fashion" className="text-secondary">
              Fashion
            </Link>
            .
          </p>
        </Container>
      </section>
      <section className="science my-5">
        <Container>
          <h1 className="mb-5 pt-3">Science</h1>
          <NewsCardList newsList={adaptedScienceData} />
          <p>
            See all science related news in the section{" "}
            <Link to="/category/science" className="text-secondary">
              Science
            </Link>
            .
          </p>
        </Container>
      </section>
      <section className="music my-5">
        <Container>
          <h1 className="mb-5 pt-3">Music</h1>
          <NewsCardList newsList={adaptedMusicData} />
          <p>
            See all music related news in the section{" "}
            <Link to="/category/music" className="text-secondary">
              Music
            </Link>
            .
          </p>
        </Container>
      </section>
      <section className="film my-5">
        <Container>
          <h1 className="mb-5 pt-3">Film</h1>
          <NewsCardList newsList={adaptedfilmData} />
          <p>
            See all movies related news in the section{" "}
            <Link to="/category/film" className="text-secondary">
              Film
            </Link>
            .
          </p>
        </Container>
      </section>
      <section className="favorites my-5">
        <Container>
          <h1 className="mb-5 pt-3">Favorite</h1>
          <p>
            Do you want to save your favorite news to read them later?
          </p>
          <p>
          Within each news you will find a button through which you can add news to favorites.
          </p>
          <p className="pb-3">
            
            Visit the section{" "}
            <Link to="/favorites" className="text-secondary">
              Favorite
            </Link>{" "}
            to see added news.
          </p>
        </Container>
      </section>
    </Layout>
  );

}

export default Home;
