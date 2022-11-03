import React from "react"
import TuitsList from "../tuits/tuits-list";

const HomeComponent = () => {
    return(
        <>
            <div className="col">
                <h1>Home</h1>
                <TuitsList/>
            </div>
        </>
    );
}
export default HomeComponent