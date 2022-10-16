const NavigationSidebar = (active) => {
        return(`
        <div class="list-group d-block d-sm-block d-xl-none">
            <a class="list-group-item" href="/">
            <i class="fab fa-twitter"></i></a>
            
            <a id="home" class="list-group-item">
            <i class="fas fa-home"></i></a>
            
            <a id="explore" class="list-group-item" href="/">
            <i class="fas fa-hashtag"></i></a>
            
            <a id="notifs" class="list-group-item" href="/">
            <i class="fas fa-bell"></i></a>
            
            <a id="messages" class="list-group-item" href="/">
            <i class="fas fa-envelope"></i></a>
            
            <a id="bookmarks" class="list-group-item" href="/">
            <i class="fas fa-bookmark"></i></a>
            
            <a id="list" class="list-group-item" href="/">
            <i class="fas fa-list"></i></a>
            
            <a id="people" class="list-group-item" href="/">
            <i class="fas fa-user"></i></a>
            
            <a id="more" class="list-group-item" href="/">
            <i class="fas fa-ellipsis"></i></a>
        </div>
        <div class="list-group d-none d-xl-block">
            <a class="list-group-item" href="/">
            <i class="fab fa-twitter"></i></a>
            
            <a id="home" class="list-group-item" href="/">
            <i class="fas fa-home"></i> Home</a>
            
            <a id="explore" class="list-group-item" href="/">
            <i class="fas fa-hashtag"></i> Explore</a>
            
            <a id="notifs" class="list-group-item" href="/">
            <i class="fas fa-bell"></i> Notifications</a>
            
            <a id="messages" class="list-group-item" href="/">
            <i class="fas fa-envelope"></i> Messages</a>
            
            <a id="bookmarks" class="list-group-item" href="/">
            <i class="fas fa-bookmark"></i> Bookmarks</a>
            
            <a id="list" class="list-group-item" href="/">
            <i class="fas fa-list"></i> List</a>
            
            <a id="people" class="list-group-item" href="/">
            <i class="fas fa-user"></i> People</a>
            
            <a id="more" class="list-group-item" href="/">
            <i class="fas fa-ellipsis"></i> More</a>
        </div>
        <div class="d-grid">
            <button class="p-2 btn btn-primary override-bs" href="#">Tweet</button>
        </div>
 `);
}

export default NavigationSidebar;