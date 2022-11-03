import React from "react";
import TuitStats from "./tuit-stats";
import {useDispatch} from "react-redux";
import {deleteTuit} from "../reducers/tuits-reducer";

const TuitsItem = (
    {
        tuit = {
            topic: 'Space',
            userName: "SpaceX",
            time: "2h",
            title: "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
            image: "spacex.jpeg",
            liked: true,
            replies: 123,
            retuits: 432,
            likes: 2345,
            handle: "@spacex",
            tuit: "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }

    return(
        <div className="row">
            <div className="col-1">
                <img className="mt-3 rounded-circle" height={48} src={`/images/${tuit.image}`} alt=""/>
            </div>
            <div className="col-11">
                <i className="bi bi-x-lg float-end"
                   onClick={() => deleteTuitHandler(tuit._id)}></i>
                <div className="mt-2 fw-bold text-wrap">
                    <span className="ms-3">{tuit.userName} <i className="bi bi-patch-check-fill text-primary"></i></span>
                    <span className="fs-6 fw-normal text-secondary"> {tuit.handle} • {tuit.time}</span>
                    <br/>
                    <div className="ms-3 fw-normal text-wrap">{tuit.tuit}</div>
                </div>
                <TuitStats
                    liked={tuit.liked}
                    replies={tuit.replies}
                    retuits={tuit.retuits}
                    likes={tuit.likes}
                />
            </div>
        </div>
    )
}

export default TuitsItem;