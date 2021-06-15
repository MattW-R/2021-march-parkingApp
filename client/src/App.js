import {Route, BrowserRouter as Router} from 'react-router-dom'
import AllCarParks from './Component/AllCarParks/AllCarParks'
import Home from './Component/Home/Home'


const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Home}/>
      <Route path="/all" component={AllCarParks}/>
    </Router>
  )
}

export default App
