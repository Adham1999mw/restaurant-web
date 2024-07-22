export interface Position {
    coords: {
        latitude: number;
        longitude: number;
    };
}

export interface Restaurant {
    place_id: string;
    geometry: {
        location: {
            lat: number;
            lng: number;
        };
    };
    name: string;
    vicinity: string;
    types: string[];
}

export interface Location {
    latitude: number;
    longitude: number;
}
