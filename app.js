var app = new Vue({
    el: '#app',
    data: {
        mode: "main", // dictionary
        birds: Birds,
    },
    mounted: function() {
    },
    computed: {
        favoriteBirds() {
            return this.birds.filter(item => item.favorite);
        },
    },
    methods: {
        devMode() {
            this.mode = "dictionary";
        }
    }
});