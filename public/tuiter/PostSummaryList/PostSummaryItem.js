const tuits = (post) => {
    if (post.tweets)
        return `<span class="d-block fs-6 text-secondary">
            ${post.tweets} Tuits
        </span>`
}


const PostSummaryItem = (post) => {
    return(`
    <div>
        <img class="mt-2 me-2 wd-image-small" src=${post.image}>
        <div class="ms-3 mt-2 mb-2">
            <span class="fs-6 text-secondary">
                ${post.topic}
            </span><br/>
            <span class="fs-6 fw-bold">${post.userName} <i class="fa fa-circle-check"></i>
                <span class="fs-6 m-1 fw-lighter text-secondary">- ${post.time}</span>
            </span>
            <span class="d-block text-wrap fs-6 fw-bold">
                ${post.title}
            </span>
            ${tuits(post)}
        </div>
    </div>
    `);
}

export default PostSummaryItem;