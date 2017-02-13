// 基本用法
var example1 = new Vue({
    el: '#example-1',
    data: {
        items: [
            {message: 'Foo'},
            {message: 'Bar'}
        ]
    }
});

// 基本用法
// 1. 可选的第二个参数为当前项索引
// 2. 对父作用域有完全的访问权限
var example2 = new Vue({
    el: '#example-2',
    data: {
        parentMessage: 'Parent',
        items: [
            {message: 'Foo'},
            {message: 'Bar'}
        ]
    }
});


// template v-for
// 1. <template></template>标签来渲染多个元素
// 2. 使用 of 替代 in 作为分隔符，使他接近javascript迭代器语法
var example3 = new Vue({
    el: '#example-3',
    data: {
        items: [
            {msg: 'Foo'},
            {msg: 'Bar'}
        ]
    }
});

// 对象迭代 v-for
var repeatObject = new Vue({
    el: '#repeat-object',
    data: {
        object: {
            FirstName: 'John',
            LastName: 'Doe',
            Age: 30
        }
    }
});

// 对象迭代 v-for
// 可选的第二个参数为键名
var repeatObject2 = new Vue({
    el: '#repeat-object2',
    data: {
        object: {
            FirstName: 'John',
            LastName: 'Doe',
            Age: 30
        }
    }
});

// 整数迭代
new Vue({
    el: '#numExample'
});

// 组件 v-for
Vue.component('todo-item', {
    template: `
        <li>
            {{title}}
            <button v-on:click="$emit('remove')">X</button>
        </li>
    `,
    props: ['title']
});

var todoListExample = new Vue({
    el: '#todo-list-example',
    data: {
        newTodoText: '',
        todos: [
            'Do the dishes',
            'Take out the trash',
            'Mow the lawn'
        ]
    },
    methods: {
        addNewTodo: function() {
            this.todos.push(this.newTodoText);
            this.newTodoText = '';
        }
    }
});

// v-for key
var keyExample = new Vue({
    el: '#keyExample',
    data: {
        items: [
            {id: 1, value: 'value1'},
            {id: 2, value: 'value2'}
        ]
    }
});