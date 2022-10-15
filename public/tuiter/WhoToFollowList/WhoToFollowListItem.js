const WhoToFollowListItem = (who) => {
    return (`
        <div class="list-group text-truncate">
            <div class="list-group-item p-2">
                <span>
                    <button class="mt-2 me-1 pr-1 btn btn-primary override-bs-2" href="#">
                        Follow
                    </button>
                    <img src=${who.avatarIcon} class="wd-image-rounded m-1">
                    <span class="wd-font-small">
                        <span class="m-4 fw-bold">${who.userName} <i class="fa fa-circle-check"></i><br></span>
                        <span class="m-4 fw-light">@${who.handle}</span>
                    </span>
                </span>
            </div>
        </div>
    `);
};

export default WhoToFollowListItem;