import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowListItem from "../WhoToFollowList/WhoToFollowListItem.js";
import who from "../WhoToFollowList/who.js";

const WhoToFollowList = () => {
    return (`
        <ul class="list-group">
            <span class="list-group-item fs-6 fw-bold">Who to Follow</span>
            ${WhoToFollowListItem(who[0])}
            ${WhoToFollowListItem(who[1])}
            ${WhoToFollowListItem(who[2])}
            ${WhoToFollowListItem(who[3])}
            ${WhoToFollowListItem(who[4])}
        </ul>
    `);
}
$(WhoToFollowList);

function exploreComponent() {
    $('#wd-explore').append(`
        <h2>Explore</h2>
        <div class="row mt-2">
            <div class="col-2 col-md-2 col-lg-1 col-xl-2">
            <!--<h3>Navigation Sidebar</h3>-->
            ${NavigationSidebar()}
            </div>
            <div class="col-10 col-lg-7 col-xl-6 bg-primary text-white">
            <h3>ExploreComponent</h3>
            
            </div>
            <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 text-white">
            <!--<h3>WhoToFollowList </h3>-->
            ${WhoToFollowList()}
            </div>
        </div>
   `);
}
$(exploreComponent);