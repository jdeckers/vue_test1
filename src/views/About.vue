<template>
    <div class="about">
        <h1>Movie app</h1>
        <h2>Hoort bij het boek <em>Web Development Library - Vue.JS</em></h2>
        <p>
            Copyright (C) Peter Kassenaar - 2019
        </p>
        <img src="../assets/nemo.jpg"
             style="float: left; margin: 10px"
             width="100"
             alt="Statische afbeelding Finding Nemo"/>
        <p>
            Dit is een voorbeeldapplicatie voor het werken met VueJS waarbij wordt
            gecommuniceerd met een achterliggende database. Deze is beschikbaar op
            <a href="http://www.omdbapi.com/">http://www.omdbapi.com/</a>.
        </p>
        <p>
            Voor http-communicatie wordt axios gebruikt, voor het bewaren van movie-informatie binnen de applicatie is
            Vuex gebruikt. Zie de broncode voor meer commentaar.
        </p>
    </div>
</template>
