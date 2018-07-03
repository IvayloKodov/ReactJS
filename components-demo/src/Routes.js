import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import SomeParamsPage from './components/SomeParamsPage'
import NotFoundPage from './components/NotFoundPage'

const Routes = () => (
    <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/home' component={HomePage}/>
        <Route path='/about' component={AboutPage}/>
        <Route path='/params/:id' component={SomeParamsPage}/>
        <PrivateRoute path='/private' component={AboutPage} />
        <Route path='/contacts' render={
            (props) => (
                <div>
                    <h1>You can find us at the following adress...</h1>
                </div>
            )
        }/>
        <Redirect from='/about-us' to='/about' />
        <Route component={NotFoundPage}/>
    </Switch>
)

export default Routes