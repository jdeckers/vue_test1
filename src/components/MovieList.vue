<template>
    <div>
        <input type="text"
               @keyup.enter="searchMovies(keyword)"
               class="form-control-lg"
               v-model="keyword"
               placeholder="movie name">
        <button @click="searchMovies(keyword)"
                class="btn btn-info btn-lg">
            Search movies
        </button>
        <!--Loading indicator/spinner-->
        <div v-if="!loading">
            <h3 style="margin: 0 auto;">Loading...</h3>
            <img src="../assets/spinner.gif" alt="Loading indicator...">
        </div>
        <!--Oh no, something bad happened! -->
        <div v-if="error" class="alert alert-danger">
            <h3>Error!</h3>
            <div>{{ errorList }}</div>
        </div>
        <!--List with country data-->
        <ul class="list-group" v-if="movies && movies.length">
            <li class="list-group-item"
                v-for="movie of movies"
                :key="movie.imdbID">
                <img v-if="movie.Poster !=='N/A'"
                     class="imgMovie"
                     :src="movie.Poster"
                     :alt="'Poster from ' + movie.Title"
                     @click="getMovie(movie.imdbID)">
                <h4>{{ movie.Title}} </h4>
                <p>{{ movie.Year}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "MovieList",
        data() {
            return {
                keyword: ''
            }
        },
        methods: {
            searchMovies(keyword) {
                this.$store.dispatch('movies/searchMovies', keyword)
            },
            // go to specific movie
            getMovie(id){
                this.$router.push({
                    name: 'detail',
                    params: {
                        id: id
                    }
                })
            }
        },
        computed: {
            // movies worden uit de module uit de store gehaald.
            movies() {
                return this.$store.state.movies.movies;
            },
            loading() {
                return this.$store.state.movies.loadingStatus === 'notloading'
            },
            error() {
                return this.$store.state.movies.errors.length > 0;
            },
            errorList() {
                return this.$store.state.movies.errors;
            }
        }
    }
</script>

<style scoped>
    .imgMovie {
        float: left;
        display: inline-block;
        max-width: 100px;
        margin: 6px;
        padding: 6px;
        border: 2px solid cornflowerblue;
        border-radius: 4px;
        cursor: pointer;
    }
</style>
