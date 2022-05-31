import React, {useEffect, useState} from "react";

import "./App.scss";
import {Preloader} from "./componets/common/Preloader/Preloader";
import {UsersInfo} from "./componets/UsersInfo/UsersInfo";

const App = () => {
    const [preloader, setPreloader] = useState(true)
    const showPreloader = () => {
        setTimeout(() => {
            setPreloader(false)
            // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        }, 3000)
    }
    useEffect(() => {
        showPreloader()
    }, [])
    return <div className="App">
        {
            preloader
                ? <Preloader/>
                : <UsersInfo/>}
    </div>
};

export default App;
