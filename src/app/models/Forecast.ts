import { Coords } from './Coords';
import { ForecastList } from './ForecastList';

export interface Forecast {
  city: {
    id: number;
    name: string;
    coord: Coords;
    country: string;
    population: number;
    sunrise: string | null;
    sunset: string | null;
    timezone: number;
  };
  cnt: 10;
  cod: '200';
  list: Array<ForecastList>;
  message: 0;
}
