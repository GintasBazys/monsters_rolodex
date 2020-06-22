import React from "react";

import "./searchboxStyles.css";

export const SearchBox = ({ placeholder, handleChange }) => {
    return (
            <input
                className="search"
                type="search"
                placeholder={placeholder}
                onChange={handleChange} />
        )

}