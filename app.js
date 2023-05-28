var app = new Vue({
    el: '#app',
    data: {
        mode: "main", // dictionary
        birds: Birds,
    },
    mounted: function() {
        let type = getUrlQueries()['type'];
        if (type == "dictionary") {
            this.mode = "dictionary";
        }
    },
    computed: {
        favoriteBirds() {
            return this.birds.filter(item => item.favorite);
        },
    },
    methods: {
        devMode() {
            this.mode = "dictionary";
        },
        stopSe() {
            Howler.stop();
        },
        deselectAll() {
            this.birds.forEach((bird) => {
                bird.favorite = false;
            });
        }
    }
});