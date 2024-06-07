import { condition } from "./condition"

export interface current {
    lastupdate:string
    temp_c: number,
    temp_f: number,
    condition:condition,
    wind_kph: number,
    humidity: string,

}