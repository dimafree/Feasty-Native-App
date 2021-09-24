import React, { useState } from "react";
import { AccordionWrapper } from "./Accordion.styles";
import { List } from "react-native-paper";

const Accordion: React.FC = ({}) => {
    const [breakfastExpanded, setBreakfastExpanded] = useState(false);
    const [lunchExpanded, setLunchExpanded] = useState(false);
    const [dinnerExpanded, setDinnerExpanded] = useState(false);
    const [drinksExpanded, setDrinksExpanded] = useState(false);

    return (
        <AccordionWrapper>
            <List.Accordion
                title="Breakfast"
                id="1"
                left={(props) => <List.Icon {...props} icon="bread-slice" />}
                expanded={breakfastExpanded}
                onPress={() => setBreakfastExpanded(!breakfastExpanded)}
            >
                <List.Item title="Eggs Benedict" />
                <List.Item title="Classic Breakfast" />
            </List.Accordion>

            <List.Accordion
                title="Lunch"
                id="1"
                left={(props) => <List.Icon {...props} icon="hamburger" />}
                expanded={lunchExpanded}
                onPress={() => setLunchExpanded(!lunchExpanded)}
            >
                <List.Item title="Burguer w/fries" />
                <List.Item title="Steak Sandwich" />
                <List.Item title="Mushroom Soup" />
            </List.Accordion>

            <List.Accordion
                title="Dinner"
                id="1"
                left={(props) => <List.Icon {...props} icon="food-variant" />}
                expanded={dinnerExpanded}
                onPress={() => setDinnerExpanded(!dinnerExpanded)}
            >
                <List.Item title="Spaghetti Bolognese" />
                <List.Item title="Veal cutlet with Chicken MushRoom Rotini" />
                <List.Item title="Steak Fries" />
            </List.Accordion>

            <List.Accordion
                title="Drinks"
                id="1"
                left={(props) => <List.Icon {...props} icon="cup" />}
                expanded={drinksExpanded}
                onPress={() => setDrinksExpanded(!drinksExpanded)}
            >
                <List.Item title="Coffe" />
                <List.Item title="Tea" />
                <List.Item title="Modelo" />
                <List.Item title="Coke" />
                <List.Item title="Fanta" />
            </List.Accordion>
        </AccordionWrapper>
    );
};
export default Accordion;
