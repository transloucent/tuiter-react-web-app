import "./index.css"
import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const ProfileComponent = () => {
    const profile =
        useSelector(state => state.profile);

    const dateForm = (date) => {
        let arr = date.split("-")

        return arr[1] + "/" + arr[2] + "/" + arr[0];
    }

    return (
        <>
            <h1>Profile</h1>
            <div className="row border">
                <div className="col-1 p-3">
                    <i className="bi bi-arrow-left"></i>
                </div>
                <div className="col-10 p-2">
                    <h5 className="fw-bold">{profile[0].firstName} {profile[0].lastName}</h5>
                    <h6 className="text-secondary">{profile[0].tuits} Tuits</h6>
                </div>
            </div>
            <div className="row">
                <div className="p-0 position-relative">
                    <img className="img-fluid border" src={`/images/${profile[0].bannerPicture}`} alt=""></img>
                    <img className="rounded-circle wd-nudge-up" height={200} src={`/images/${profile[0].profilePicture}`}  alt=""></img>
                    <div>
                        <Link to="/tuiter/edit-profile">
                            <button type="button" className="border rounded-pill btn btn-light float-end ps-3 mt-2 pe-3 fw-bold">
                                Edit Profile
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div>
                <h5 className="fw-bold">{profile[0].firstName} {profile[0].lastName}</h5>
                <h6 className="text-secondary">{profile[0].handle}</h6>
                <p>{profile[0].bio}</p>
            </div>
            <div className="row">
                <div className="col-4 text-secondary">
                    <h6><i className="bi bi-globe"></i> {profile[0].location}</h6>
                </div>
                <div className="col-4 text-secondary">
                    <h6><i className="bi bi-balloon"></i> Born {dateForm(profile[0].dateOfBirth)}</h6>
                </div>
                <div className="col-4 text-secondary">
                    <h6><i className="bi bi-calendar"></i> Joined {profile[0].dateJoined}</h6>
                </div>
            </div>
            <div className="row">
                <h6 className="col-4 text-secondary"><span className="fw-bold text-dark">{profile[0].followingCount}</span> Following</h6>
                <h6 className="col-4 text-secondary"><span className="fw-bold text-dark">{profile[0].followersCount}</span> Followers</h6>
            </div>
            <br/>
        </>
    );
}

export default ProfileComponent;