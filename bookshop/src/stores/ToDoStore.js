import { EventEmmiter } from 'events'

class TodDoStore extends EventEmmiter {
    constructor () {
        super()

        this.todos = [
            {id: 1, title: "Go Shopping!", complited: false},
            {id: 2, title: "Go Walking!", complited: false},
            {id: 3, title: "Go Sleeping!", complited: true},
        ]
    }

    getAll() {
        return new Promise((resolve, reject) => {
            resolve(this.todos.slice(0))
        })
    } 

    createToDo (title) {
        const id = this.todos.length + 1

        this.todos.push({
            id,
            title,
            complited = false
        })

        this.emit('change')
    }

    handleAction (action){
        switch (action.type){
            case 'CREATE_TODO':{
                this.createToDo(action.title)
                break;
            }
            default: {
                throw new Error('Invalid action type.')
            }
        }
    }
}