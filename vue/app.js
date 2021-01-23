const App = {
    data() {
        return {
            myPlaceholder: 'Введите название заметки',
            title: 'Список заметок',
            inputValue: '',
            notes: ['note 1', 'note 2']
        }
    },
    methods: {
        inputChangeHandler(event) {
            this.inputValue = event.target.value
        },
        addNewNote() {
            if (this.inputValue !== '') {
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }
        },
        deleteNote(idx, event) {
            this.notes.splice(idx, 1)
        }
    }
}

Vue.createApp(App).mount('#app')

