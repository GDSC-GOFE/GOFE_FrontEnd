import React from "react"
import "./scss/style.scss"
import { RouterProvider } from "react-router-dom"
import router from "./router"
import { createStore } from "redux"
// import rootReducer from "./redux"
import { Provider } from "react-redux"

// 리덕스에 비동기 작업도 실행시키기 위해 redux-thunk를 적용함
// const store = createStore(rootReducer)

const App = () => {
  console.log('Hello')  //GDSC COMMIT TEST  HELLO GDSC
  return (
    // <Provider store={store}>
    <RouterProvider router={router} />
    // </Provider>
  )
}

export default App


//커밋 테스트
//GDSC commit test