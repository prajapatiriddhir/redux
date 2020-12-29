import './App.css';
import { BrowserRouter, Switch, Route, Link, } from "react-router-dom";
import Home from './component/Home'
import Register from './component/Register'
import Login from './component/Login'

const App = () => {
    return(
        <>

        <BrowserRouter>
        <div className="nav">
            <Switch>
                <Route exact  path="/" component={Home}/>
                <Route exact  path="/register" component={Register}/>
                <Route exact  path="/login" component={Login}/>


            </Switch>
        </div>
        </BrowserRouter>
        </>
    )
}


export default App;