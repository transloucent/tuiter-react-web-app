import React from "react"
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];

    return (
        <>
            <div className="list-group d-block d-sm-block d-xl-none">
                <a className="list-group-item" href="/"><i className="bi bi-twitter"></i></a>
                <Link to="/tuiter/home" className={`list-group-item ${active === 'home' || active === "" || active === undefined ? 'active':''}`}>
                    <i className="bi bi-house"></i>
                </Link>
                <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore'?'active':''}`}>
                    <i className="bi bi-search"></i>
                </Link>
                <Link to="/" className="list-group-item">
                    <i className="bi bi-clipboard-check"></i>
                </Link>
                <a className={`list-group-item
                        ${active === 'notifications'?'active':''}`} href="/">
                    <i className="bi bi-bell"></i>
                </a>
                <a className={`list-group-item
                        ${active === 'messages'?'active':''}`} href="/">
                    <i className="bi bi-envelope"></i>
                </a>
                <a className={`list-group-item
                        ${active === 'bookmarks'?'active':''}`} href="/">
                    <i className="bi bi-bookmark"></i>
                </a>
                <a className={`list-group-item
                        ${active === 'lists'?'active':''}`} href="/">
                    <i className="bi bi-list-ul"></i>
                </a>
                <Link to="/tuiter/profile" className={`list-group-item
                        ${active === 'profile' || active === 'edit-profile' ?'active':''}`} href="/">
                    <i className="bi bi-person"></i>
                </Link>
                <a className={`list-group-item
                        ${active === 'more'?'active':''}`} href="/">
                    <i className="bi bi-three-dots"></i>
                </a>
            </div>
            <div className="list-group d-none d-xl-block">
                <a className="list-group-item" href="/"><i className="bi bi-twitter"></i> Tuiter</a>
                <Link to="/tuiter/home" className={`list-group-item ${active === 'home' || active === "" || active === undefined ? 'active':''}`}>
                    <i className="bi bi-house"></i> Home
                </Link>
                <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore'?'active':''}`}>
                    <i className="bi bi-search"></i> Explore
                </Link>
                <Link to="/" className="list-group-item">
                    <i className="bi bi-clipboard-check"></i> Labs
                </Link>
                <a className={`list-group-item
                    ${active === 'notifications'?'active':''}`} href="/">
                    <i className="bi bi-bell"></i> Notifications
                </a>
                <a className={`list-group-item
                    ${active === 'messages'?'active':''}`} href="/">
                    <i className="bi bi-envelope"></i> Messages
                </a>
                <a className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`} href="/">
                    <i className="bi bi-bookmark"></i> Bookmarks
                </a>
                <a className={`list-group-item
                    ${active === 'lists'?'active':''}`} href="/">
                    <i className="bi bi-list-ul"></i> Lists
                </a>
                <Link to="/tuiter/profile" className={`list-group-item
                    ${active === 'profile' || active === 'edit-profile' ?'active':''}`} href="/">
                    <i className="bi bi-person"></i> Profile
                </Link>
                <a className={`list-group-item
                    ${active === 'more'?'active':''}`} href="/">
                    <i className="bi bi-three-dots"></i> More
                </a>
            </div>
        </>
    );
}

export default NavigationSidebar;