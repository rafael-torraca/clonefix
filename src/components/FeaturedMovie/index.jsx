import React from "react";
import "./FeaturedMovie.css";

export default function FeaturedMovie({ item }) {

  const firstDate = new Date(item.first_air_date);
  
  function genres() {
    const genres = [];
    item.genres.map(genre => genres.push(genre.name));
    return genres.join(', ');
  }
  

  return (
    <section
      className="featured"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <div className="featured--vertical">
        <div className="featured-horizontal">
          <div className="featured--name">{item.original_name}</div>
          <div className="featured--info">
            <div className="featured--points">{item.vote_average} pontos</div>
            <div className="featured--year">{firstDate.getFullYear()}</div>
            <div className="featured--seasons">
              {item.number_of_seasons} temporada
              {item.number_of_seasons !== 1 ? "s" : ""}
            </div>
          </div>
          <div className="featured--description">{item.overview}</div>
          <div className="featured--buttons">
            <a href={`/watch/${item.id}`} className="featured--watchbutton">► Assistir</a>
            <a href={`/watch/${item.id}`} className="featured--mylistbutton">+ Minha Lista</a>
          </div>
          <div className="featured--genres">
            Gêneros: {genres()}
          </div>
        </div>
      </div>
    </section>
  );
}
