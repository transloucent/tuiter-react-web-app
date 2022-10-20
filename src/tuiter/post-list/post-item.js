import React from "react"

const PostItem = (
    {
        post = {
            "avatarIcon": "../../images/spacex.png",
            "username": "SpaceX",
            "handle": "@SpaceX",
            "time": "23h",
            "description": "Dennis and Akiko Tito are the first two crew members on Starship's second commercial spaceflight around the moon -> ",
            "descriptionLink" : "spacex.com/updates",
            "image": "../../images/countdown.jpeg",
            "imageTitle": "",
            "imageDescription": "",
            "replies": "4.2K",
            "retuits": "3.5K",
            "likes": "37.5K"
        }
    }
) => {
    return(
        <div className="row border">
            <div className="col-1">
                <img className="mt-3 rounded-circle" height={48} src={post.avatarIcon} alt=""/>
            </div>
            <div className="col-11">
                <div className="mt-2 fw-bold text-wrap">
                    <span className="ms-3">{post.username} <i className="bi bi-patch-check-fill text-primary"></i></span>
                    <span className="fs-6 fw-normal text-secondary"> {post.handle} • {post.time}</span>
                    <i className="float-end bi bi-three-dots"></i>
                    <br/>
                    <div className="ms-3 fw-normal text-wrap">{post.description}<span className="text-primary">{post.descriptionLink}</span></div>
                    <div className="ms-3 mt-3 fs-6 fw-normal text-white">
                        <div className="border border-secondary rounded">
                            <img className="img-fluid rounded" src={post.image} alt=""/>
                        </div>
                    </div>
                    <div className="row text-truncate mt-4 ms-2 mb-4 fw-normal">
                        <div className="col">
                             <a className="text-decoration-none text-secondary" href="src/tuiter/post-list/post-item">
                                 <i className="bi bi-chat"></i>
                                <span className="p-1">{post.replies}</span>
                            </a>
                        </div>
                        <div className="col">
                            <a className="text-decoration-none text-secondary" href="src/tuiter/post-list/post-item">
                                <i className="bi bi-arrow-left-right"></i>
                                <span className="p-1">{post.retuits}</span>
                            </a>
                        </div>
                        <div className="col">
                            <a className="text-decoration-none text-secondary" href="src/tuiter/post-list/post-item">
                                <i className="bi bi-heart"></i>
                                <span className="p-1">{post.likes}</span>
                            </a>
                        </div>
                        <div className="col">
                            <a className="text-decoration-none text-secondary" href="src/tuiter/post-list/post-item">
                                <i className="bi bi-box-arrow-up"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
};

export default PostItem