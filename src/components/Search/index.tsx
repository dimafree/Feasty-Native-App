import React, { useState, useContext, useEffect } from "react";
import { LocationContext } from "../../services/restaurants/location/location.context";
import { SearchWrapper, SearchInput } from "./Search.styles";
import { Alert } from "react-native";

const Search: React.FC = ({}) => {
    const { keyword, search } = useContext(LocationContext);
    const [searchKeyword, setsearchKeyword] = useState<string>(keyword);

    const handleSubmit = () => {
        if (!searchKeyword || searchKeyword === "") {
            Alert.alert("Please write something! 😑");
            return false;
        }

        search(searchKeyword);
    };

    useEffect(() => {
        setsearchKeyword(keyword);
    }, [keyword]);

    useEffect(() => {
        search(searchKeyword);
    }, []);

    return (
        <SearchWrapper>
            <SearchInput
                placeholder="Search for a location"
                onChangeText={(text) => setsearchKeyword(text)}
                value={searchKeyword}
                onSubmitEditing={handleSubmit}
            />
        </SearchWrapper>
    );
};
export default Search;
