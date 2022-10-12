export const addTodo = (title, newId) => ({
    type: 'ADD_TODO',
    id: newId,
    title: title
})