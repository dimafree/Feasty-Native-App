export interface RestaurantMockProps {
    businessStatus?: string;
    geometry?: {
        location?: {
            lat?: number;
            lng?: number;
        };
        viewport?: {
            northeast?: {
                lat?: number;
                lng?: number;
            };
            southwest?: {
                lat?: number;
                lng?: number;
            };
        };
    };
    icon?: string;
    name?: string;
    openingHours?: {
        openNow?: boolean;
    };
    photos?: string[];
    placeId?: number | string;
    plusCode?: {
        compound_code?: string | undefined;
        global_code?: string | undefined;
    };
    priceLevel?: number;
    rating?: number;
    reference?: string | undefined;
    scope?: string | undefined;
    types?: [string];
    userRatingsTotal?: number;
    vicinity?: string;
    isOpenNow?: boolean;
    isClosedTemporarily?: boolean;
}

export interface Params {
    data: RestaurantMockProps;
}
