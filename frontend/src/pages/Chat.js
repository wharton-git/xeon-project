import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MessageList from './ChatList';
import React  from 'react';

const AppChat = () => {
    return (
        <Router>
        <Switch>
            <Route path="/messages/:userId">
            <MessageList />
            </Route>
        </Switch>
        </Router>
    );
    };

    export default AppChat;

