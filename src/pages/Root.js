import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Home} from "./Home";
import {Hero} from "./heroes/Hero";
import {Heroes} from "./heroes/Heroes";
import Scoreboard from "./scoreboard/Scoreboard";
import {Menu} from "./menu";

export class Root extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <Menu />
                {/*네스티드 라우팅 영역*/}
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/heroes" component={Heroes}></Route>
                    <Route path="/scoreboard" component={Scoreboard}></Route>
                    <route path="/hero/:id" component={Hero}></route>
                </Switch>
            </BrowserRouter>
        );
    }
}