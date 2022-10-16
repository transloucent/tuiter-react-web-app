const titleDesc = (post) => {
    if (post.imageTitle !== '' && post.imageDescription !== '')
        return(`
        <div class="p-3 text-white border-top border-secondary">
            <span class="fs-6">${post.imageTitle}
                <br>
            </span>
            <span class="fs-6 text-secondary">
                ${post.imageDescription}
            </span>
        </div>
        `);
    else
        return(``);
}

const PostItem = (post) => {
    return(`
    <div>
        <img class="ms-3 mt-3 wd-image-rounded" src="${post.avatarIcon}">
        <div class="ms-5 me-3">
            <div class="ms-3 mt-3 fw-bold text-wrap">
                <span class="ms-3">${post.username}</span>
                <span class="fs-6 fw-normal text-secondary">${post.handle} • ${post.time}</span>
                <i class="float-end fa fa-ellipsis text-secondary"></i>
                <br>
                <div class="ms-3 text-white fw-normal text-wrap">${post.description}</div>
                <div class="ms-3 mt-3 fs-6 fw-normal text-white"> 
                    <div class="border border-secondary rounded">
                        <img class="img-fluid rounded" src="${post.image}">
                        ${titleDesc(post)}
                    </div>
                </div>
                <div class="row text-truncate mt-3 ms-2 fw-normal">
                    <div class="col">
                         <a class="text-decoration-none text-secondary" href=#>
                            <i class="fas fa-message"></i>
                            <span class="p-1">${post.replies}</span>
                        </a>
                    </div>
                    <div class="col">
                        <a class="text-decoration-none text-secondary" href=#>
                            <i class="fas fa-retweet text-decoration-none"></i>
                            <span class="p-1">${post.retuits}</span>
                        </a>
                    </div>
                    <div class="col">
                        <a class="text-decoration-none text-secondary" href=#>
                            <i class="fas fa-heart"></i>
                            <span class="p-1">${post.likes}</span>
                        </a>
                    </div>
                    <div class="col">
                        <a class="text-decoration-none text-secondary" href=#>
                            <i class="fas fa-arrow-up-from-bracket"></i>
                        </a>
                    </div>
                </div>
            </p>
        </div>
    </div>
    `);
}

export default PostItem;