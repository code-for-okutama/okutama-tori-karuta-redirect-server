var app = new Vue({
    el: '#app',
    data: {
        mode: "main", // dictionary
        birds: Birds,
    },
    mounted: function () {
        let type = getUrlQueries()['type'];
        if (type == "dictionary") {
            this.mode = "dictionary";
        }
        if (type == "bgm") {
            this.mode = "bgm";
        }
    },
    computed: {
        favoriteBirds() {
            return this.birds.filter(item => item.favorite);
        },
    },
    methods: {
        setMode(mode) {
            this.mode = mode;

            switch (mode) {
                case "main" :
                    Howler.stop();
                    break;
                case "bgm" :
                    this.playBgm();
                    break;
            }
        },
        stopSe() {
            Howler.stop();
        },
        deselectAll() {
            this.birds.forEach((bird) => {
                bird.favorite = false;
            });
        },
        async playBgm() {
            while (true) {
                let idx = Math.floor(Math.random() * this.birds.length);
                await playSe(this.birds[idx].filePrefix, 1.0, false);
            }
        }
    }
});