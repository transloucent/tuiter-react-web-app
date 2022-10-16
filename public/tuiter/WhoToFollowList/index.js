import who from "./who.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js";

function followLoop() {
    let code = ""
    for (let i = 0; i < who.length; i++)
        code += `${WhoToFollowListItem(who[i])}`
    return code
}

const WhoToFollowList = () => {
    return (`
        <ul class="list-group">
            <span class="list-group-item fs-6 fw-bold">Who to Follow</span>
            ${followLoop()}
        </ul>
    `);
}
$(WhoToFollowList);

export default WhoToFollowList;