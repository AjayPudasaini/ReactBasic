
import 'jquery'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter} from 'react-router-dom'


import Header from './Header/Header'
import Body from './Body/Body'
import Register from './Body/Register'
import Footer from './Footer/Footer'


function App() {
  return (
    <div className="App">
      <Header></Header>
      
      <BrowserRouter>
        <Body></Body>
      </BrowserRouter>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
