import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Albums from './pages/Albums';
import Artist from './pages/Artist';
import Timeline from './pages/Timeline';
import Layout from './components/Layout';


const Routes = () =>{
  return (
    <BrowserRouter>
    <Layout />
    <Switch>
      <Route exact path="/" component={Timeline}/> 
      <Route exact path="/artist" component={Artist}/>
      <Route exact path="/albums" component={Albums}/>  
    </Switch>
    </BrowserRouter>
  );
}

export default Routes;