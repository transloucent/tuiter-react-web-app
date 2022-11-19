import React from "react";
import {updateTuitThunk} from "../../services/tuits-thunks";
import {useDispatch} from "react-redux";

const TuitStats = (
    tuit = {
        _id: 123,
        liked: false,
        replies: 0,
        retuits: 0,
        likes: 0,
        dislikes: 0,
        disliked: false
}) => {
    const dispatch = useDispatch();

    const likedHandler = (liked) => {
        if (liked) {
            return () => dispatch(updateTuitThunk({
                ...tuit,
                likes: tuit.likes - 1,
                liked: !tuit.liked
            }))
        }
        return () => dispatch(updateTuitThunk({
            ...tuit,
            likes: tuit.likes + 1,
            liked: !tuit.liked
        }))
    }

    const dislikedHandler = (disliked) => {
        if (disliked) {
            return () => dispatch(updateTuitThunk({
                ...tuit,
                dislikes: tuit.dislikes - 1,
                disliked: !tuit.disliked
            }))
        }
        return () => dispatch(updateTuitThunk({
            ...tuit,
            dislikes: tuit.dislikes + 1,
            disliked: !tuit.disliked
        }))
    }

    return (
        <div className="row text-truncate mt-4 ms-2 mb-4 fw-normal">
            <div className="col">
                <a className="text-decoration-none text-secondary" href="src/tuiter/post-list/post-item">
                    <i className="bi bi-chat"></i>
                    <span className="p-1">{tuit.replies}</span>
                </a>
            </div>
            <div className="col">
                <a className="text-decoration-none text-secondary" href="src/tuiter/post-list/post-item">
                    <i className="bi bi-arrow-left-right"></i>
                    <span className="p-1">{tuit.retuits}</span>
                </a>
            </div>
            <div className="col">
                <div className="text-decoration-none text-secondary">
                    <i onClick={likedHandler(tuit.liked)} className={`bi ${tuit.liked ?'bi-heart-fill me-2 text-danger':'bi-heart me-2'}`}></i>
                    {tuit.likes}
                </div>
            </div>
            <div className="col">
                <div className="text-decoration-none text-secondary">
                    <i onClick={dislikedHandler(tuit.disliked)} className={`bi ${tuit.disliked ?'bi-hand-thumbs-down-fill me-2':'bi-hand-thumbs-down me-2'}`}></i>
                    {tuit.dislikes}
                </div>
            </div>
            <div className="col">
                <a className="text-decoration-none text-secondary" href="src/tuiter/post-list/post-item">
                    <i className="bi bi-box-arrow-up"></i>
                </a>
            </div>
        </div>
    )
}

export default TuitStats;