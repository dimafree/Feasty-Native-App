import React, { useState } from "react";
import { useRoute } from "@react-navigation/core";
import { Params } from "../../utils/types";
// prettier-ignore
import {  DetailContent, DetailWrapper, DetailStarWrapper, DetailLittleText } from "./Detail.styles";
import { Card, Title, Paragraph } from "react-native-paper";
import { Rating } from "react-native-ratings";
import Accordion from "../../components/Accordion";
import FavoriteIcon from "../../components/FavoriteIcon";
import {
    RestaurantCardLabelText,
    RestaurantCardLabelWrapper,
} from "../../components/RestaurantCard/RestaurantCard.styles";

const Detail: React.FC = ({}) => {
    const route = useRoute();
    // prettier-ignore
    const { data } = route.params as Params;
    const { photos, name, vicinity, rating, isOpenNow } = data;

    return (
        <DetailWrapper>
            {/* @ts-ignore */}
            <Card.Cover source={{ uri: photos[0] }} />

            <FavoriteIcon restaurant={data} />

            <RestaurantCardLabelWrapper isOpen={isOpenNow}>
                <RestaurantCardLabelText>
                    {isOpenNow ? "Open" : "Closed"}
                </RestaurantCardLabelText>
            </RestaurantCardLabelWrapper>

            <DetailContent>
                <Card.Content>
                    <DetailStarWrapper>
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
                    </DetailStarWrapper>
                    <Title>{name}</Title>
                    <Paragraph>{vicinity}</Paragraph>
                    <DetailLittleText>Menu</DetailLittleText>
                </Card.Content>

                <Accordion />
            </DetailContent>
        </DetailWrapper>
    );
};
export default Detail;
