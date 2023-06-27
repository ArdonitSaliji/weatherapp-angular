export interface ForecastList {
  clouds: { all: number };
  dt: number;
  dt_txt: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    temp_kf: number;
    humidity?: number;
  };
  pop: number;
  sys: { pod: string };
  visibility: number;
  weather: Array<{
    description: string;
    icon: string;
    id: number;
    main: string;
  }>;
  wind: { speed: number; deg: number; gust: number };
  rain?: { '3h': number };
}
