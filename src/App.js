import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import Header from "./components/header";
import Home from "./components/home";
import AboutUs from "./components/aboutus";
import reducers from "./reducers";
import "./App.css";

const store = createStore(reducers, applyMiddleware(thunk));

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        <Route path="/" component={Header} />
                        <Switch>
                            <Route path="/aboutus" component={AboutUs} />
                            <Route path="/" component={Home} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
