var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});

var app2 = new Vue({
    el: '#app2',
    data: {
        message: 'You loaded this page on ' + new Date()
    }
});

var app3 = new Vue({
    el: '#app3',
    data: {
        seen: true
    }
});

var app4 = new Vue({
    el: '#app4',
    data: {
        todos: [
            {text: 'Learn JavaScript'},
            {text: 'Learn Vue'},
            {text: 'Build  something awesome'}
        ]
    }
});

var app5 = new Vue({
    data: {
        message: 'Hello Vue.js!'
    },

    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('');
        }
    }
}).$mount('#app5');

var app6 = new Vue({
    el: '#app6',
    data: {
        message: 'Hello Vue!'
    }
});

Vue.component('todo-item', {
    props: ['todo'],
    template: '{{<li>{{todo.text}}</li>}}'
});

var app7 = new Vue({
    el: '#app7',
    data: {
        groceryList: [
            {text: 'Vegetables'},
            {text: 'Cheese'},
            {text: 'Whatever else humans are supposed to eat'}
        ]
    }
});