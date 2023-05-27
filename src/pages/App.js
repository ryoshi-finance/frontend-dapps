import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Home from './Home';

function App(): JSX.Element {

    return (

      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>

    )
}

export default App
