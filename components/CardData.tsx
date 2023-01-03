import { time } from "console";
import React from "react";
import Image from "next/image";
import Logo from "../public/e-logo.png";

interface Props {
  id: number;
  campus: string;
  demographic: string;
  group_type: string;
  meeting_date: string;
  zip_code: number;
}

const CardData: React.FC<Props> = ({
  id,
  campus,
  demographic,
  group_type,
  meeting_date,
  zip_code,
}) => {
  return (
    <div className="bg-white md:w-96 lg:w-[400px] 2xl:w-[550px] h-24 shadow-xl mt-6 rounded-md flex justify-around items-center ">
      <Image
        className="rounded-full"
        src={Logo}
        alt={"/"}
        height={0}
        width={80}
      />
      <div className="w-64">
        <h1>{meeting_date}</h1>
        <h1>Location: {campus}</h1>
        <div>{group_type} Group</div>
      </div>
    </div>
  );
};

export default CardData;
