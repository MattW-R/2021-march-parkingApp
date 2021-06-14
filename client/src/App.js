import {Route, BrowserRouter as Router} from 'react-router-dom'
import AllCarParks from './Component/AllCarParks/AllCarParks'


const App = () => {
  return (
    <Router>
      <Route path="/all" component={AllCarParks}/>
    </Router>
  )
}

export default App
