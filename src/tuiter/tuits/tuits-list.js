import React, {useEffect} from "react";
import {useDispatch, useSelector}
    from "react-redux";
import TuitItem from "./tuits-item";
import {findTuitsThunk}
    from "../../services/tuits-thunks";

const TuitsList = () => {
    const {tuits, loading} = useSelector(
        state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])

    return (
        <>
            <ul className="list-group">
                {
                    loading &&
                    <li className="list-group-item">
                        Loading...
                    </li>
                }
                {
                tuits.map((tuit) =>
                    <li key={tuit._id}
                        className="list-group-item">
                        <TuitItem
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