import React from "react"

import{BrowserRouter, Switch, Route} from "react-router-dom"

import App from "./App"
import DetailView from "./components/DetailView/DetailView"

const Router=()=>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" component={App} exact/>
                <Route path="/detail/:id" component={DetailView}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Router