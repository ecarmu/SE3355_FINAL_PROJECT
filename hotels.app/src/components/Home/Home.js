import React from "react";
import Title from "./Title/Title";
import SearchBar from "./SearchBar/SearchBar";
import Hotels from "./Hotels";
import useAuth from "../customHook/useAuth"; // Import the custom hook

function Home() {
    const { isLoggedIn, decoded } = useAuth(); // Use the custom hook

    console.log(isLoggedIn)
    console.log(decoded)

    return (
        <div>
            <Title/>
            <SearchBar />
            <Hotels />
        </div>
    );
}

export default Home;
