const app = {
    data() {
        return {
            msg: 'Hello, Vue3',
            shown: true,
            url: 'http://sit.kmutt.ac.th'
        }
    },
    created() {
        console.log('message is ' + this.msg)
    },
    updated(){
        console.log('message is to ' + this.msg)
    }
}
var mountApp = Vue.createApp(app).mount('#app')