<template>
    <div class="container">
        <h2>Movie app</h2>
        <MovieList/>
    </div>
</template>

<script>
    // @ is an alias to /src

    import MovieList from "../components/MovieList";

    export default {
        name: 'home',
        components: {MovieList},
    }
</script>
