import camelize from "camelize";
import { locations } from "./location.mock";

export const locationRequest = (searchTerm: string) => {
    return new Promise((resolve, reject) => {
        // @ts-ignore
        const locationMock = locations[searchTerm];
        if (locationMock === undefined) {
            reject("not found location");
            return;
        }

        resolve(locationMock);
    });
};

export const locationTransform = (result: any) => {
    const formattedResponse = camelize(result);
    const { geometry = {} } = formattedResponse.results[0];
    const { lat, lng } = geometry.location;

    return { lat, lng, viewport: geometry.viewport };
};
