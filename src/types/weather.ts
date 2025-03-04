export interface WeatherData {
    name: string;
    main:{
        temp: number;
        temp_min: number;
        temp_max: number;
        humidity: number;
    };
    weather: {
        description: string;
        icon: string;
    }[];
    wind: {
        speed: number;
    };
}

export interface Coordinates {
    lat: number;
    lng: number;
}
