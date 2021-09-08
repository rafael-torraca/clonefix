const API_KEY = 'fa110dede82e7a663f2ff7beaa8717a8';
const API_BASE = 'https://api.themoviedb.org/3';
const DEFAULT_LANG = 'language=pt-BR';
const API_QUERY = `&${DEFAULT_LANG}&api_key=${API_KEY}`;


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
        items: await basicFetch(`/trending/all/week?${API_QUERY}`)
      },
      {
        slug: 'toprated',
        title: 'Em Alta',
        items: await basicFetch(`/movie/top_rated?${DEFAULT_LANG}&api_key=${API_KEY}`)
      },
      {
        slug: 'action',
        title: 'Ação',
        items: await basicFetch(`/discover/movie?with_genres=28&${DEFAULT_LANG}&api_key=${API_KEY}`)
      },
      {
        slug: 'comedy',
        title: 'Comédia',
        items: await basicFetch(`/discover/movie?with_genres=35&${DEFAULT_LANG}&api_key=${API_KEY}`)
      },
      {
        slug: 'horror',
        title: 'Terror',
        items: await basicFetch(`/discover/movie?with_genres=27&${DEFAULT_LANG}&api_key=${API_KEY}`)
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: await basicFetch(`/discover/movie?with_genres=10749&${DEFAULT_LANG}&api_key=${API_KEY}`)
      },
      {
        slug: 'documentary',
        title: 'Documentários',
        items: await basicFetch(`/discover/movie?with_genres=99&${DEFAULT_LANG}&api_key=${API_KEY}`)
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
