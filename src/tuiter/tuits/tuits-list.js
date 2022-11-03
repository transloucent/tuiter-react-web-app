import React from "react";
import {useSelector} from "react-redux";
import TuitsItem from "./tuits-item";

const TuitsList = () => {
    const tuits = useSelector((state) => state.tuits)

    return (
        <>
            <ul className="list-group">
            {
                tuits.map((tuit) =>
                    <li key={tuit._id}
                        className="list-group-item">
                        <TuitsItem
                            key={tuit._id}
                            tuit={tuit}
                        />
                    </li>
                )
            }
            </ul>

        </>
    )

}

export default TuitsList;