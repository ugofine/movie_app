import './App.css';
import Header from './components/Header';
import {BrowserRouter, Route, Switch} from  'react-router-dom';
import { Container } from '@material-ui/core';
import SimpleBottomNavigation from './MainNav';
import Trending from './pages/trending/Trending';
import Movies from './pages/movies/Movies';
import TV from './pages/tv/Tv';
import Search from './pages/search/Search';

function App() {
  return (
     <BrowserRouter>
     <Header/>
     <div className="app">
       <Container>
         <Switch>
           <Route path="/" component={Trending} exact />
           <Route path="/Movies" component={Movies}  />
           <Route path="/TV" component={TV}  />
           <Route path="/Search" component={Search}  />

         </Switch>

       </Container>
      

    </div>
    <SimpleBottomNavigation />
     
     </BrowserRouter>
  );
}

export default App;
