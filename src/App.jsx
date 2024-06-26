import React, {useState} from "react"
import "./scss/style.scss"
import { RouterProvider } from "react-router-dom"
import router from "./router"
import { createStore } from "redux"
// import rootReducer from "./redux"
import { Provider } from "react-redux"

// 리덕스에 비동기 작업도 실행시키기 위해 redux-thunk를 적용함
// const store = createStore(rootReducer)

//커밋 테스트
const App = () => {
  console.log('Hello')  //GDSC COMMIT TEST  HELLO GDSC
  const [value, setValue] = useState(0);
  return (
    // <Provider store={store}>
    <div>
      <RouterProvider router={router} />
      <p>
        현재 카운터 값은 <b>{value}</b>
        <button onClick={()=>setValue(value+1)}>+1</button>
        <button onClick={()=>setValue(value-1)}>-1</button>
      </p>
    </div>
    // </Provider>
  )
}

export default App


//커밋 테스트
//GDSC commit test