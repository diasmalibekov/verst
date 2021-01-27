Vue.createApp({
    data: () => ({
        myHtml: '<h1>V-html ckecking</h1>',
        title: 'V-text checking',
        person: {
        fName: 'Dias',
        lName: 'Malibekov',
        age: 23
        },
        items: [1, 2, 3, 4, 5, 6, 7]
    }),

    methods: {
        stopPropagation(event) {
            event.stopPropagation();
        },

        addItem(event) {
            this.items.unshift(this.$refs.myInput.value)
            this.$refs.myInput.value = ''
        }
    },

    computed: {
        evenItems() {
            return this.items.filter(i => i % 2 === 0)
        }
    }
}).mount('#app')
