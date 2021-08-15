import React from 'react';
import {
    Switch,
    Route,
    useLocation
} from "react-router-dom";
import SearchPanel from './SearchPanel';
import List from './List'

const Page = () => {
    const search = useLocation().search;
    const name = new URLSearchParams(search).get('name');
    const status = new URLSearchParams(search).get('status');
    const gender = new URLSearchParams(search).get('gender');

    return (

        <Switch>
            <Route exect="true" path="/" exact component={SearchPanel} />
            <Route path="/List" exact render={(props) => <List {...props} name={name} status={status} gender={gender} />} />
        </Switch>

    );
}

export default Page;
