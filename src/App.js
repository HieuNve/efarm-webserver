import './App.css';

import Index from "./components/Admin";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Login from "./components/Login";
import AppProvider from "./Context/AppProvider";
import AddChanels from "./components/Modals/AddChanels";
import AddAccount from "./components/Modals/AddAccount";
import DangXuat from "./components/Modals/DangXuat"
import Addtheloai from "./components/Modals/Addtheloai";
import XoaAcc from "./components/Modals/XoaAcc";
import AppChanel from "./Context/AppChanel";
import XoaChanle from "./components/Modals/XoaChanle";
import AddKenhYt from "./components/Modals/AddKenhYt";
import {ADMIN, LOGIN} from "./components/router";

function App() {
    return (
        <BrowserRouter>
            <AppChanel>
                <AppProvider>
                    <Switch>
                        <Route component={Index} path={ADMIN}/>
                        <Route component={Login} path={LOGIN}/>
                    </Switch>
                    <AddChanels/>
                    <AddAccount/>
                    <DangXuat/>
                    <Addtheloai/>
                    <XoaAcc/>
                    <XoaChanle/>
                    <AddKenhYt/>
                </AppProvider>
            </AppChanel>
        </BrowserRouter>
    );
}

export default App;
