const App = {
    data() {
        return {
            counter: 0,
            header: 'Counter'
        }
    },
    mounted() {
        if(localStorage.counter) {
            this.counter = localStorage.counter;
        }
    },
    watch:{
        counter(newCounter) {
            localStorage.counter = newCounter;
        }
    }
}

Vue.createApp(App).mount('#app')