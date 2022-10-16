import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
        <div>
            <i class="position-absolute text-secondary m-3 fas fa-search"></i>
            <input type="text"
               class="wd-form-control mb-2 rounded-pill"
               placeholder="Search Tuiter">
            <a href="explore-settings.html"><i class="wd-icon-center mt-1 fa-2x fas fa-gear"></i></a>
        </div>
        <div class="d-none d-md-block">
            <ul class="nav mb-2 nav-tabs">
                <li class="nav-item">
                    <a class="nav-link active" href="#">For You</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Sports</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Entertainment</a>
                </li>
            </ul>
        </div>
        <div class="d-block d-md-none">
            <ul class="nav mb-2 nav-tabs">
                <li class="nav-item">
                    <a class="nav-link active" href="#">For You</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Sports</a>
                </li>
            </ul>
        </div >
        <div class="position-relative">
            <span class="position-absolute bottom-0 fs-1">SpaceX's Starship</span>
            <img class="img-fluid" src="images/starship-x.png">
        </div>
        ${PostSummaryList()}
    `);
}
export default ExploreComponent;
