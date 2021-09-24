import React, { useState, useContext, useEffect } from "react";
import { LocationContext } from "../../services/restaurants/location/location.context";
import { SearchMapWrapper, SearchMapInput } from "./SearchMap.styles";
import { Alert } from "react-native";

const SearchMap: React.FC = ({}) => {
    const { keyword, search } = useContext(LocationContext);
    const [searchKeywordMap, setsearchKeywordMap] = useState<string>(keyword);

    const handleSubmit = () => {
        if (!searchKeywordMap || searchKeywordMap === "") {
            Alert.alert("Please write something! 😑");
            return false;
        }

        search(searchKeywordMap);
    };

    useEffect(() => {
        setsearchKeywordMap(keyword);
    }, [keyword]);

    useEffect(() => {
        search(searchKeywordMap);
    }, []);

    return (
        <SearchMapWrapper>
            <SearchMapInput
                placeholder="Search for a location"
                icon="map"
                onChangeText={(text) => setsearchKeywordMap(text)}
                value={searchKeywordMap}
                onSubmitEditing={handleSubmit}
            />
        </SearchMapWrapper>
    );
};
export default SearchMap;
