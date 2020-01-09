// movie-store.js
import axios from 'axios';

const url_list = 'http://www.omdbapi.com/?apikey=f1f56c8e&s=';
const url_detail = 'http://www.omdbapi.com/?apikey=f1f56c8e&i=';

export default {
    namespaced: true,
    state: {
        // State for working with the OMDB API, http://www.omdbapi.com/
        loadingStatus: 'notloading', // status laden (spinner wel/niet zichtbaar).
        movies: [],         // array met alle (10) movies
        currentMovie: {},   // Huidige geselecteerde movie
        errors: []          // array met fouten
    },
    mutations: {
        // All movies
        SET_LOADING_STATUS(state, payload) {
            state.loadingStatus = payload;
        },
        SET_MOVIES(state, payload) {
            state.movies = payload;
        },
        CLEAR_MOVIES(state) {
            state.movies = []
        },
        ADD_ERROR(state, payload) {
            state.errors = [...state.errors, payload]
        },
        // Current movie
        SET_CURRENT_MOVIE(state, payload){
            state.currentMovie = payload;
        },
        CLEAR_CURRENT_MOVIE(state){
            state.currentMovie = {};
        }
    },
    actions: {
        // Haal lijst op met movies, op basis van keyword (10 stuks)
        searchMovies(context, keyword) {
            // 1. Set loading status
            context.commit('SET_LOADING_STATUS', 'loading');
            // 2. Make http-request - optional you can simulate a delay by wrapping it in a setTimeOut
            axios.get(url_list + keyword)
                .then(result => {
                    context.commit('SET_LOADING_STATUS', 'notloading');
                    context.commit('SET_MOVIES', result.data.Search); // result.data.Search, omdat de API zijn movie-resultaten teruggeeft in een array Search[]. Deze bevat de daadwerkelijke movies.
                })
                .catch(err => {
                    context.commit('SET_LOADING_STATUS', 'notloading');
                    context.commit('SET_MOVIES', []);
                    context.commit('ADD_ERROR', err);
                })
        },
        // Haal specifieke movie op, op basis van imdbID
        getMovie(context, id){
            context.commit('SET_LOADING_STATUS', 'loading');
            axios.get(url_detail + id)
                .then(result => {
                    context.commit('SET_LOADING_STATUS', 'notloading');
                    context.commit('SET_CURRENT_MOVIE', result.data);
                })
                .catch(err => {
                    context.commit('SET_LOADING_STATUS', 'notloading');
                    context.commit('SET_CURRENT_MOVIE', {});
                    context.commit('ADD_ERROR', err);
                })
        },
        clearMovies(context) {
            context.commit('CLEAR_MOVIES')
        },
        clearMovie(context) {
            context.commit('CLEAR_CURRENT_MOVIE')
        },

    },
    getters: {
        // Getters for working with the Omdb API
        // only return the requested movie from the store
        getMovie: (state) => (imdbID) => {
            return state.movies.find(c => c.imdbID === imdbID)
        }
    }
}
