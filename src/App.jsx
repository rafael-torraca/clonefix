import React, { useEffect, useState } from "react";
import './App.css';
import Tmdb from "./Tmdb";
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';

export default function App() {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      
      // Getting all list
      const list = await Tmdb.getHomeList();
      setMovieList(list);

      // Getting Featured Movie
      const originals = list.filter(item => item.slug === 'originals');
      const randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      const chosen = originals[0].items.results[randomChosen];
      const chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
    };

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    }
    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);

  return (
    <div className="page">
      <Header black={ blackHeader }/>
      
      {featuredData && 
        <FeaturedMovie item={featuredData} />
      }

      <section className="lists">
        {movieList.map((item, key) => {
          return <MovieRow key={key} title={item.title} items={item.items}/>;
        })}
      </section>

      <footer>
        <div>Feito com <span role="img" aria-label="coração">💖</span> por Rafael Torraca Leandro.</div>
        <div>Direitos de imagem para Netflix</div>
        <div>Dados API site Themoviedb.org</div>
      </footer>

      {movieList.length <= 0 &&
        <div className="loading">
          <img src="eclipse.gif" alt="loading" />
        </div>
      }
      

    </div>
  );
}

