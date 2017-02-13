var example1 = new Vue({
    el: '#example-1',
    data: {
        counter: 0
    }
});

var example2 = new Vue({
    data: {
        name: 'Vue.js'
    },
    methods: {
        greet: function(event) {
            alert('Hello ' + this.name);
            alert(event.target.tagName);
        }
    }
}).$mount('#example-2');

var example3 = new Vue({
    el: '#example-3',
    methods: {
        say: function(message, e) {
            alert(message + ' ' + e.target.tagName);
        }
    }
});

new Vue({
    el: '#example-4'
});