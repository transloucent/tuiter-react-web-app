import {Link} from "react-router-dom";
import React, {useState} from "react";
import "./index.css"
import {useDispatch, useSelector} from "react-redux";
import {saveProfile} from "../reducers/profile-reducer";

const EditProfileComponent = () => {
    const profile =
        useSelector(state => state.profile);

    const [name, setName] = useState({
        name: `${profile[0].firstName} ${profile[0].lastName}`
    });
    const [bio, setBio] = useState({
        bio: profile[0].bio
    });
    const [location, setLocation] = useState({
        location: profile[0].location
    });
    const [website, setWebsite] = useState({
        website: profile[0].website
    });
    const [dateOfBirth, setDOB] = useState({
        dateOfBirth: profile[0].dateOfBirth
    });


    const dispatch = useDispatch();
    const saveProfileHandler = () => {
        let arr = [...profile, name, bio, location, website, dateOfBirth]
        dispatch(saveProfile(arr));
    }
    const nameChangeHandler = (event) => {
        const doValue = event.target.value;
        const newName = {
            name: doValue
        };
        setName(newName);
    }
    const bioChangeHandler = (event) => {
        const doValue = event.target.value;
        const newBio = {
            bio: doValue
        };
        setBio(newBio);
    }
    const locationChangeHandler = (event) => {
        const doValue = event.target.value;
        const newLocation = {
            location: doValue
        };
        setLocation(newLocation);
    }
    const websiteChangeHandler = (event) => {
        const doValue = event.target.value;
        const newWebsite = {
            website: doValue
        };
        setWebsite(newWebsite);
    }
    const dateOfBirthChangeHandler = (event) => {
        const doValue = event.target.value;
        const newDOB = {
            dateOfBirth: doValue
        };
        setDOB(newDOB);
    }

    return (
    <>
        <div className="row border">
            <div className="col-1 p-3">
                <Link to="/tuiter/profile">
                    <i className="bi bi-x fs-3 text-dark" onClick={() => {
                    }}></i>
                </Link>
            </div>
            <div className="col-9 p-3">
                <h3>Edit Profile</h3>
            </div>
            <div className="col-2">
                <Link to="/tuiter/profile">
                    <button onClick={saveProfileHandler}
                            className="position-absolute btn btn-dark rounded float-right mt-3 me-1">
                        Save
                    </button>
                </Link>
            </div>
        </div>
        <>
            <div className="row">
                <div className="p-0 position-relative">
                    <img className="img-fluid" src={`/images/${profile[0].bannerPicture}`} alt=""></img>
                    <img className="rounded-circle wd-nudge-up" height={200} src={`/images/${profile[0].profilePicture}`}
                         alt=""></img>
                </div>
            </div>
            <br/>
            <div className="form-floating">
                <label className="p-1 ps-2 text-secondary fs-6" htmlFor="floatingInput">Name</label>
                <input onChange={nameChangeHandler} type="text" className="form-control" id="floatingInput"
                       value={name.name}/>
            </div>
            <br/>
            <div className="form-floating">
                <label className="p-1 ps-2 text-secondary fs-6" htmlFor="floatingInput">Bio</label>
                <input onChange={bioChangeHandler} type="text" className="form-control"
                       id="floatingInput"
                       value={bio.bio}/>
            </div>
            <br/>
            <div className="form-floating">
                <label className="p-1 ps-2 text-secondary fs-6" htmlFor="floatingInput">Location</label>
                <input onChange={locationChangeHandler} type="text" className="form-control text-break"
                       id="floatingInput"
                       value={location.location}/>
            </div>
            <br/>
            <div className="form-floating">
                <label className="p-1 ps-2 text-secondary fs-6" htmlFor="floatingInput">Website</label>
                <input onChange={websiteChangeHandler} type="text" className="form-control text-break"
                       id="floatingInput"
                       value={website.website}/>
            </div>
            <br/>
            <div className="form-floating">
                <label className="p-1 ps-2 text-secondary fs-6" htmlFor="floatingInput">Birth Date</label>
                <input onChange={dateOfBirthChangeHandler} type="date" className="form-control text-break"
                       id="floatingInput" value={dateOfBirth.dateOfBirth}/>
            </div>
            <br/>
            <br/>
        </>
    </>);
}

export default EditProfileComponent;