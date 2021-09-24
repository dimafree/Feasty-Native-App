import React from "react";
// prettier-ignore
import { RestaurantCardWrapper, RestaurantStarWrapper, RestaurantCardLabelWrapper, RestaurantCardLabelText, RestaurantCardInfoWrapper, RestaurantCardInfo, RestaurantCardType, RestaurantCardIcon} from "./RestaurantCard.styles";
import { Card, Title, Paragraph } from "react-native-paper";
import { Rating } from "react-native-ratings";

import { useNavigation } from "@react-navigation/core";
import { RestaurantMockProps } from "../../utils/types";
import FavoriteIcon from "../FavoriteIcon";

interface RestaurantCardProps {
    restaurant: RestaurantMockProps;
}

const mock = {
    isOpen: true,
    title: "Zuni Café",
    location: "1658 Market Street , San Francisco",
    rating: 2,
    isFavorite: false,
};

const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant }) => {
    const navigation = useNavigation();
    const { name, rating, vicinity, photos, isOpenNow, icon } = restaurant;

    return (
        <RestaurantCardWrapper
            onPress={() => navigation.navigate("detail", { data: restaurant })}
        >
            {/* @ts-ignore */}
            <Card.Cover source={{ uri: photos[0] }} />

            <RestaurantCardLabelWrapper isOpen={isOpenNow}>
                <RestaurantCardLabelText>
                    {isOpenNow ? "Open" : "Closed"}
                </RestaurantCardLabelText>
            </RestaurantCardLabelWrapper>

            <FavoriteIcon restaurant={restaurant} />

            <Card.Content>
                <RestaurantStarWrapper>
                    <Rating
                        readonly
                        type="custom"
                        ratingColor="#F9C74F"
                        ratingBackgroundColor="#c8c7c8"
                        ratingCount={5}
                        imageSize={25}
                        onFinishRating={() => {}}
                        style={{ paddingVertical: 10 }}
                        startingValue={rating}
                    />
                </RestaurantStarWrapper>

                <RestaurantCardInfoWrapper>
                    <RestaurantCardInfo>
                        <Title>{name}</Title>
                        <Paragraph>{vicinity}</Paragraph>
                    </RestaurantCardInfo>

                    <RestaurantCardType>
                        <RestaurantCardIcon source={{ uri: icon }} />
                    </RestaurantCardType>
                </RestaurantCardInfoWrapper>
            </Card.Content>
        </RestaurantCardWrapper>
    );
};
export default RestaurantCard;
