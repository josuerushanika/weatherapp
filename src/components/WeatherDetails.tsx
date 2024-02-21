import React from "react";
import { FiDroplet } from "react-icons/fi";
import { LuEye } from "react-icons/lu";
import {MdAir} from "react-icons/md";
import {ImMeter} from "react-icons/im";

export interface WeatherDetailsProps {
  visability: string;
  humidity: string;
  windSpeed: string;
  airPressure: string;
  sunrize: string;
  sunset: string;
}

export default function WeatherDetails(props: WeatherDetailsProps) {
  return (
    <>
    <SingleWeatherDetail
      icon={<LuEye />}
      information="visability"
      value={props.visability}
    />

    <SingleWeatherDetail
    icon={<FiDroplet />}
    information="humidity"
    value={props.humidity}
  />
  </>
  );
}

export interface SingleWeatherDetailProps {
  information: string;
  icon: React.ReactNode;
  value: string;
}


function SingleWeatherDetail(props: SingleWeatherDetailProps) {
  return (
    <div className="flex flex-col justify-between gap-2 items-center text-xs font-semibold text-black/80">
      <p className="whitespace-nowrap">{props.information}</p>
      <div className="text-3xl">{props.icon}</div>
      <p>{props.value}</p>
    </div>
  );
}
