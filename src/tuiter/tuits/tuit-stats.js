import React from "react";

const TuitStats = (
    tuit = {
    liked: true,
    replies: 123,
    retuits: 432,
    likes: 2345,
}) => {
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
                <a className="text-decoration-none text-secondary" href="src/tuiter/post-list/post-item">
                    <i className={`bi ${tuit.liked ?'bi-heart-fill text-danger':'bi-heart'}`}></i>
                    <span className="p-1">{tuit.likes}</span>
                </a>
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