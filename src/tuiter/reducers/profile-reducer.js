import { createSlice } from "@reduxjs/toolkit";

const initialProfile = [
    {
        firstName: "Louis",
        lastName: "Sorrenti",
        handle: "@lsorrenti",
        profilePicture: "louis.png",
        bannerPicture: "polyglot.jpeg",
        bio: "Stupendous student of computer science. Retuits and likes are not endorsements.",
        website: "youtube.com/webdevtv",
        location: "Boston, MA",
        dateOfBirth: "1998-10-28",
        dateJoined: "4/2014",
        tuits: 409,
        followingCount: 3290,
        followersCount: 12806
    }
]

const profileSlice = createSlice({
    name: "profile",
    initialState: initialProfile,
    reducers: {
        saveProfile(state, action) {
            const name = action.payload[1].name;
            let nameArr = name.split(" ");

            const fName = nameArr[0]
            const lName = nameArr[1]

            let arr = [
                {
                    handle: action.payload[0].handle,
                    profilePicture: action.payload[0].profilePicture,
                    bannerPicture: action.payload[0].bannerPicture,
                    dateJoined: action.payload[0].dateJoined,
                    tuits: action.payload[0].tuits,
                    followingCount: action.payload[0].followingCount,
                    followersCount: action.payload[0].followersCount,
                    firstName: fName,
                    lastName: lName,
                    bio: action.payload[2].bio,
                    location: action.payload[3].location,
                    website: action.payload[4].website,
                    dateOfBirth: action.payload[5].dateOfBirth
                }]

            return [...arr]

        }
    }
});

export const {saveProfile} = profileSlice.actions
export default profileSlice.reducer;