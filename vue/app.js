const App = {
    data() {
        return {
            myPlaceholder: 'Введите название заметки',
            title: 'Список заметок',
            inputValue: '',
            notes: ['note 1', 'note 2']
        }
    },

    methods:  {
        addNewNote() {
            if (this.inputValue !== '') {
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }
        },
        noteToUpperCase(item) {
            return item.toUpperCase()
        },
        deleteNote(idx, event) {
            this.notes.splice(idx, 1)
        }
    },

    computed: {
    doubleCountComputed() {
            console.log('doubleCount method')
            return this.notes.length * 2
        }
    },

    watch: {
        inputValue(value) {
            if(value.length > 10) {
                this.inputValue = ''
            }
        }
    }
}

Vue.createApp(App).mount('#app')

