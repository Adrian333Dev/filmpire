import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const tmdbApiKey = process.env.REACT_APP_TMDB_KEY;

export const tmdbApi = createApi({
	reducerPath: 'tmdbApi ',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
	endpoints: (builder) => ({
		getGenres: builder.query({
			query: () => `/genre/movie/list?api_key=${tmdbApiKey}`,
		}),
		getMovies: builder.query({
			query: ({ categorieName, page, searchQuery }) => {
				// ! Get Search Result
				if (searchQuery) {
					return `/search/movie?query=${searchQuery}&page=${page}&api_key=${tmdbApiKey}`;
				}

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
		// ! Get User Specific Lists
		getList: builder.query({
			query: ({ listName, accountId, sessionId, page }) =>
				`/account/${accountId}/${listName}?api_key=${tmdbApiKey}&session_id=${sessionId}&page=${page}`,
		}),
		// ! get User Specific List
		getRecommendations: builder.query({
			query: ({ id, list }) => `/movie/${id}/${list}?api_key=${tmdbApiKey}`,
		}),
		// !
		getActor: builder.query({
			query: (id) => `/person/${id}?api_key=${tmdbApiKey}`,
		}),
		getMoviesByActor: builder.query({
			query: ({ id, page }) =>
				`/discover/movie?with_cast=${id}&page=${page}&api_key=${tmdbApiKey}`,
		}),
	}),
});

export const {
	useGetMoviesQuery,
	useGetGenresQuery,
	useGetMovieQuery,
	useGetRecommendationsQuery,
	useGetActorQuery,
	useGetMoviesByActorQuery,
	useGetListQuery,
} = tmdbApi;
