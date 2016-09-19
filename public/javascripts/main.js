/**
 * Created by ChristopherBorum on 19/09/16.
 */
Vue.config.delimiters = ['${', '}']
Vue.config.debug = true

var vm = new Vue({
    el: '#app',
    data: {
        email: "",
        signedUp: false
    },
    methods: {
        onSubmit: function () {
            // this.signedUp = true
            var signup = {
                email: this.email,
                timestamp: new Date().getTime()
            }
            console.log(signup)
            Vue.http.post('/', signup).then(function (response) {
                if (response.body === 'ok') {
                    vm.signedUp = true
                    // todo better feedback
                    alert('Signed up')
                } else {
                    alert(response.body)
                }
            }, function (response) {
                console.log(response)
            })
        }
    }
})
