import dispatcher from '../dispatcher'

let todoActions = {
    createToDo: (title) => {
        dispatcher.dispatch({
            type: "CREATE_TODO",
            title
        })
    }
}

export default todoActions