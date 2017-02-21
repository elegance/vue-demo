Vue.component('accordion', {
    template: `
        <div class="accordtion">
            <expander v-for="expand of data" :title="expand.title" v-on:toggle="handleItemClick"> <!--  2. TODO 这里写v-on 好像也不太合理 -->
                {{expand.text}}
            </expander>
        </div>
    `,
    props: {
        data: {
            type: Array,
            default: function() {
                return []
            }
        }
    },
    methods: {
        handleItemClick: function(expander) {
            this.data.forEach((item) => {
                if (expander.title !== item.title) {
                    // console.log('before', item.title, item.showMe)
                    item.showMe = false; // TODO 1. 这里的改变 好像不会生效哦， 待再学习后再看
                    // console.log('after', item.title, item.showMe)
                }
            });
        }
    }
});

Vue.component('expander', {
    props: ['title', 'showMe'],
    template: `
        <div class="item">
            <div class="title" @click="toggle()">{{title}}</div>
            <div class="body" v-show="showMe">
                <slot></slot>
            </div>
        </div>
    `,
    methods: {
        toggle: function() {
            this.showMe = !this.showMe;
            this.$emit('toggle', this);
        }
    }}
);

new Vue({
    el: '#app',
    data: {
        expanders: [
            {
                title: '手风琴效果',
                text: '典型的手风琴效果的UI就是当前这个效果。',
                showMe: true
            },
            {
                title: '有一些变体',
                text: '手风琴效果还有一些变体。模样虽不像，本质一致。'
            },
            {
                title: '甚至这个',
                text: '更多展开与收起效果也算，因此，会在下面展示。'
            }
        ]
    }
});