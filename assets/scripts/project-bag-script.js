new Vue({
    el: "#vue-game-app",
    data: {
        health: 100,
        ended: false
    },
    methods: {
        punchBag(){
            this.health -= 10;
            if(this.health <= 0){
                this.ended = true;
            }
            console.log(this.health)
        },
        restratGame(){
            this.health = 100;
            this.ended = false;
        }
    }
});