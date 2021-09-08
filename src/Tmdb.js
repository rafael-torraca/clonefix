import API_KEY from "./secretkey";

const API_BASE = 'https://api.themoviedb.org/3';
const DEFAULT_LANG = 'language=pt-BR';
const API_QUERY = `${DEFAULT_LANG}${API_KEY}`;

const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
}


const exportedFunctions = {

  getHomeList: async () => {
    return [
      {
        slug: 'originals',
        title: 'Originais do Cloneflix',
        items: await basicFetch(`/discover/tv?with_network=213&${API_QUERY}`)
      },
      {
        slug: 'trending',
        title: 'Recomendados para Você',
        items: await basicFetch(`/trending/all/week?&${API_QUERY}`)
      },
      {
        slug: 'toprated',
        title: 'Em Alta',
        items: await basicFetch(`/movie/top_rated?${API_QUERY}`)
      },
      {
        slug: 'action',
        title: 'Ação',
        items: await basicFetch(`/discover/movie?with_genres=28&${API_QUERY}`)
      },
      {
        slug: 'comedy',
        title: 'Comédia',
        items: await basicFetch(`/discover/movie?with_genres=35&${API_QUERY}`)
      },
      {
        slug: 'horror',
        title: 'Terror',
        items: await basicFetch(`/discover/movie?with_genres=27&${API_QUERY}`)
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: await basicFetch(`/discover/movie?with_genres=10749&${API_QUERY}`)
      },
      {
        slug: 'documentary',
        title: 'Documentários',
        items: await basicFetch(`/discover/movie?with_genres=99&${API_QUERY}`)
      }
    ];
  },

  getMovieInfo: async (movieId, type) => {
    let info = {};

    if (movieId) {
      info = type === 'movie'
        ? await basicFetch(`/movie/${movieId}?${API_QUERY}`)
        : await basicFetch(`/tv/${movieId}?${API_QUERY}`);
    }
    return info;
    }
    
}

export default exportedFunctions;
