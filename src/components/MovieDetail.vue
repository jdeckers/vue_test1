<template>
    <div>
        <div class="jumbotron">
            <h2>{{ currentMovie.Title}} - {{ currentMovie.Year }}</h2>
            <img class="imgMovie"
                 :src="currentMovie.Poster"
                 :alt="'Poster for ' + currentMovie.Title ">
            <p>
                {{ currentMovie.Plot }}
            </p>
            <h4>Actors</h4>
            <p>
                {{ currentMovie.Actors}}
            </p>
            <h4>Awards</h4>
            <p>
                {{ currentMovie.Awards}}
            </p>
            <h4>Director</h4>
            <p>
                {{ currentMovie.Director}}
            </p>
            <h4>Website</h4>
            <p v-if="currentMovie.Website !== 'N/A' ">
                <a :href="currentMovie.Website"
                   target="_blank">
                    {{ currentMovie.Title }} -
                </a>
                {{ currentMovie.Production}}
            </p>
        </div>

    </div>
</template>

<script>
    export default {
        name: "MovieDetail",
        created() {
            this.$store.dispatch('movies/clearMovie');
            this.id = this.$route.params.id;
            this.$store.dispatch('movies/getMovie', this.id);
        },
        computed: {
            currentMovie() {
                return this.$store.state.movies.currentMovie;
            }
        }
    }
</script>

<style scoped>
    .imgMovie {
        float: left;
        display: inline-block;
        max-width: 200px;
        margin: 6px;
        /*padding: 6px;*/
        /*border: 2px solid cornflowerblue;*/
        /*border-radius: 4px;*/

    }
</style>
