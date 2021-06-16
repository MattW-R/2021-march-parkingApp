import {Route, BrowserRouter as Router} from 'react-router-dom'
import Home from './Component/Home/Home'
import AllCarParks from './Component/AllCarParks/AllCarParks'
import SearchResults from './Component/SearchResults/SearchResults'
import BookCarPark from './Component/BookCarPark/BookCarPark'

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Home}/>
      <Route path="/all" component={AllCarParks}/>
      <Route path="/availableCarParks/:duration" component={SearchResults}/>
      <Route path="/book/:id" component={BookCarPark}/>
    </Router>
  )
}

export default App
