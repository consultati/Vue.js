const counter = new Vue({
  el: '#counter',
  data: {    
    counter: 0
  },
  mounted() {
    setInterval(() => {
      this.counter++
    }, 1000)
  }
})

