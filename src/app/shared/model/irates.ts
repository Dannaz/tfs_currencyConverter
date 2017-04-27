export interface IRates {
  base: string;
  date: string;
  rates: {
    [key: string]: number
  };
}
