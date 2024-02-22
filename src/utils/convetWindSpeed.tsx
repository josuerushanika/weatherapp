/** @format */ 

export function convertWindSpeed(speedInMetersPersecond: number): string {
    const speedInKilometersPerHour = speedInMetersPersecond * 3.6;
    return `${speedInKilometersPerHour.toFixed(0)}km/h`;
}