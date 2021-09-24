import React, { useContext, useEffect } from "react";
import RestaurantCard from "../../components/RestaurantCard";
import { Paragraph } from "react-native-paper";
// prettier-ignore
import { HomeWrapper, HomeTitleWrapper, HomeCurrent, HomeTitle, HomeRestaurantList, HomeTitleInfo, HomeTitleMapWrapper } from "./Home.styles";
import { RestaurantsContext } from "../../services/restaurants/restaurants.context";
import Loading from "../../components/Loading";
import Search from "../../components/Search";
import { LocationContext } from "../../services/restaurants/location/location.context";
import Empty from "../../components/Empty";

const Home: React.FC = ({}) => {
    const { error: locationError, keyword } = useContext(LocationContext);
    const { restaurants, isLoading } = useContext(RestaurantsContext);

    return (
        <HomeWrapper>
            <Search />

            <HomeTitleWrapper>
                <HomeTitleInfo>
                    <HomeTitle>All restaurants</HomeTitle>
                    <HomeCurrent>
                        {keyword ? `in ${keyword}` : "Everywhere"}
                    </HomeCurrent>
                </HomeTitleInfo>

                <HomeTitleMapWrapper>
                    <Paragraph>See map</Paragraph>
                </HomeTitleMapWrapper>
            </HomeTitleWrapper>

            {isLoading ? (
                <Loading />
            ) : locationError || restaurants.length === 0 ? (
                <Empty />
            ) : (
                <HomeRestaurantList
                    data={restaurants}
                    renderItem={({ item }) => (
                        // @ts-ignore
                        <RestaurantCard restaurant={item} />
                    )}
                    showsVerticalScrollIndicator={false}
                    // @ts-ignore
                    keyExtractor={(item) => item.name}
                />
            )}
        </HomeWrapper>
    );
};
export default Home;
