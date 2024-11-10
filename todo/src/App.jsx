import React from 'react'
import {Provider} from "react-redux"
import store from './redux/Store.js'
import Todo from "./Components/Todo.jsx"

const App = () => {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  )
}

export default App