// 注册
Vue.component('my-component', {
    template: '<div>A custom component!</div>'
});

// 创建根实例
var example = new Vue({
    el: '#example'
});


// 局部注册
var Child = {
    template: '<div>A custom component!</div>'
};

new Vue({
    el: '#example2',
    components: {
        'my-component2': Child
    }
});

// dom 模板解析，受限浏览器解析标准
var Child2 = {
    template: '<td>my row content.</td>'
}
new Vue({
    el: '#example3',
    components: {
        'my-row':  Child2   
    }
})

// data 必须是函数
Vue.component('my-component3', {
    template: '<span>{{message}}</span>',
    data: function() {
        return {message: 'hello'};
    }
    // 直接 报错：message is not defined 
    // data: {
    //     message: 'Hello'
    // }
});

new Vue({
    el: '#example4'
});

var data = { counter: 0};

new Vue({
    el: '#example5',
    components: {
        'simple-counter': {
            template: '<button @click="counter += 1">{{ counter }}</button>',
            data: function() {
                return data; //共享一个data 将会带来问题，组件影响其他组件的数据
            }
        }
    }
});

new Vue({
    el: '#example6',
    components: {
        'simple-counter': {
            template: '<button @click="counter += 1">{{ counter }}</button>',
            data: function() {
                return { counter: 0};
            }
        }
    }
});

// prop 传递数据
new Vue({
    el: '#example7',
    components: {
        'child': {
            props: ['message'],
            template: '<span>{{message}} world.</span>'
        }
    }
});

// 动态Prop
var example8 = new Vue({
    el: '#example8',
    components: {
        'child': {
            props: ['my-message'],
            template: '<span>{{myMessage}}</span>'
        }
    },
    data: {parentMsg: ''}
});

// 字面量 vs 动态语法
new Vue({
    el: '#example9',
    components: {
        'comp': {
            props: ['some-prop'],
            template: '<div>{{someProp}} is {{typeof someProp}}</div>'
        }
    }
});

// Props验证
Vue.component('prop-check', {
    //  props 是一个对象，而不是一个字符串数组时，他包含验证要求
    props: {
        // 基础类型检测 （`null` 意思是任何类型都可以）
        propA: Number,
        // 多种类型
        propB: [String, Number],
        // 必传、字符串
        propC: {
            type: String,
            required: true
        },
        // 数字、有默认值
        propD: {
            type: Number,
            default: 100
        },
        // 数组/对象的默认值应当由一个函数返回
        propE: {
            type: Object,
            default: function() {
                return {message: 'hello'};
            }
        },
        // 自定义验证
        propF: {
            validator: function(value) {
                return value > 10;
            }
        }
    },
    template: '<div>{{propA}}--{{propB}}--{{propC}}</div>'
});

new Vue({
    el: '#example10'
});

// v-on 自定义事件
Vue.component('button-counter', {
    template: '<button v-on:click="increment">{{ counter }}</button>',
    data: function() {
        return {counter: 0};
    },
    methods: {
        increment: function() {
            this.counter += 1;
            this.$emit('child-increment'); // 子组件和外部解耦，所做的是触发一个父组件关心的内部事件
        }
    }
});

new Vue({
    el: '#counter-event-example',
    data: {
        total: 0
    },
    methods: {
        handleChildIncrement: function() {
            this.total += 1;
        }
    }
});

new Vue({
    el: '#example11',
    data: {
        something: ''
    }
});

// 非父子组件通信
var bus = new Vue();

// 要先 监听，后触发哦
bus.$on('id-selected', function(id) {
    console.log('handle id-selected event, arg id: ', id)
});

bus.$emit('id-selected', 1);

Vue.component('comp-slot1', {
    template: `
        <div>
            <h2>子组件标题</h2>
            <slot>没有要分发的内容是才会显示</slot>
        </div>
    `
});

new Vue({
    el: '#example12'
});

Vue.component('app-layout', {
    template: `
        <div class="container">
            <header>
                <slot name="header"></slot>
            </header>
            <main>
                <slot></slot>
            </main>
            <footer>
                <slot name="footer"></slot>
            </footer>
        </div>
    `
});

new Vue({
    el: '#example13'
});

// 作用域插槽
Vue.component('child-slot', {
    template: `
        <div class="child">
            <slot text="hello from child"></slot>
        </div>
    `
})

new Vue({
    el: '#example14'
});