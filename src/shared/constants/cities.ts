import { City, CityName } from '../types/index.js';

export const Cities: Record<CityName, City> = {
  [CityName.Berlin]: {
    name: CityName.Berlin,
    latitude: 52.520007,
    longitude: 13.404954
  },
  [CityName.Stuttgart]: {
    name: CityName.Stuttgart,
    latitude: 48.775846,
    longitude: 9.182932
  },
  [CityName.London]: {
    name: CityName.London,
    latitude: 51.507351,
    longitude: -0.127758
  },
  [CityName.Amsterdam]: {
    name: CityName.Amsterdam,
    latitude: 52.370216,
    longitude: 4.895168
  },
  [CityName.Moscow]: {
    name: CityName.Moscow,
    latitude: 55.755826,
    longitude: 37.6173
  },
  [CityName.Istanbul]: {
    name: CityName.Istanbul,
    latitude: 41.008238,
    longitude: 28.978359
  }
};
