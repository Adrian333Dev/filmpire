import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const tmdbApiKey = process.env.REACT_APP_TMDB_KEY;
const page = 1;

export const tmdbApi = createApi({
	reducerPath: 'tmdbApi ',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
	endpoints: (builder) => ({
		getGenres: builder.query({
			query: () => `/genre/movie/list?api_key=${tmdbApiKey}`,
		}),
		getMovies: builder.query({
			query: ({ categorieName, page }) => {
				// ! get Movies by Category
				if (categorieName && typeof categorieName === 'string') {
					return `movie/${categorieName}/?page=${page}&api_key=${tmdbApiKey}`;
				}
				// ! get Movies by Id
				if (categorieName && typeof categorieName === 'number') {
					return `discover/movie?with_genres=${categorieName}&page=${page}&api_key=${tmdbApiKey}`;
				}
				// ! get Popular Movies
				return `/movie/popular?page=${page}&api_key=${tmdbApiKey}`;
			},
		}),
		getMovie: builder.query({
			query: (id) =>
				`/movie/${id}?append_to_response=videos,credits&api_key=${tmdbApiKey}`,
		}),
	}),
});

export const { useGetMoviesQuery, useGetGenresQuery, useGetMovieQuery } =
	tmdbApi;
