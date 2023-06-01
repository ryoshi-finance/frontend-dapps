import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Home from './Home';
import Access from './Access';

function App(): JSX.Element {

    return (

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/access' element={<Access/>} />
      </Routes>

    )
}

export default App
