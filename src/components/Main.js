import React from 'react';
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom';
import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';
import StateList from './StateList.js';

export default class Main extends React.Component {


    render(){
        return(
            <BrowserRouter>
            <Content/>
            </BrowserRouter>
        );
    }

}

const Content = () => (
        <div>
            <Header/>
            <Menu/>
        </div>

);

const Menu = () => (
    <menu>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/states' component={StateList}/>
        </Switch>
    </menu>
)

const Header = () => (
    <header>
        <div>
            <div align="left">
                <div><Link to='/'>Home</Link></div>
                <div><Link to='/about'>About</Link></div>
                <div><Link to='/contact'>Contact</Link></div>
                <div><Link to='/states'>States</Link></div>
            </div>
        </div>
    </header>
)