import React from "react";
import CardData from "./CardData";

type groupData = {
  id: number;
  campus: string;
  demographic: string;
  group_type: string;
  meeting_date: string;
  zip_code: number;
};

interface Props {
  Groups: groupData[];
}
const Card: React.FC<Props> = ({ Groups }) => {
  return (
    <div>
      {Groups.map((group: groupData) => {
        let newApiDate = group.meeting_date;
        let timestamp = new Date(newApiDate).getTime();
        let Day = new Date(timestamp).getDate();
        let Month = new Date(timestamp).toLocaleString("default", {
          month: "long",
        });
        let Year = new Date(timestamp).getFullYear();
        const ourNewDate = `${Month} ${Day}, ${Year}`;
        group.meeting_date = ourNewDate;
        return (
          <CardData
            key={group.id}
            campus={group.campus}
            demographic={group.demographic}
            group_type={group.group_type}
            meeting_date={group.meeting_date}
            zip_code={group.zip_code}
            id={group.id}
          />
        );
      })}
    </div>
  );
};

export default Card;
