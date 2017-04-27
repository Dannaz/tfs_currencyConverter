import {IRates} from './irates';
export interface ICachedRates {
  base: string;
  rates: Array<IRates>;
}
