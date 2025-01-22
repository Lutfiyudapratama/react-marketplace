import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Navbar from './components/Navbar'
import { Provider } from 'react-redux'
import store from './redux/store'
import Cart from './pages/Cart'

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/profile' element={<Profile />} />
          {/* <Route path='/profile' element={<Profile />} /> */}
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
