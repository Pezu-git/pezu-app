import React, { Component } from 'react'
    import ReactDOM from 'react-dom'
    import { BrowserRouter, Route, Routes } from 'react-router-dom'
    import Sport from './Sport/Sport'
    import Profile from './Profile/Profile'
    import Test from './Test'
    import '../../css/profile.css'
    import '../../css/sport.css'

    class App extends Component {
      render () {
        return (
          <BrowserRouter>
            <div>
              <Routes>
                <Route path="/" element={<Sport />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/test" element={<Test />} />
              </Routes>
            </div>
          </BrowserRouter>
        )
      }
    }

    ReactDOM.render(<App />, document.getElementById('app'))