import React, { useEffect, useState } from "react";
import DropDown from "../components/DropDown";
import Card from "../components/Card";

const Index = () => {
  type groupData = {
    id: number;
    campus: string;
    demographic: string;
    group_type: string;
    meeting_date: string;
    zip_code: number;
  };
  const [groups, setGroups] = useState<groupData[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/users")
      .then((res: Response) => res.json())
      .then((groups: groupData[]) => {
        setGroups(groups);
      });
  }, []);

  const newGroups = groups;

  return (
    <div>
      <h1 className="text-3xl p-4">Choose Your eGroup</h1>
      <div>
        <DropDown newGroups={newGroups}></DropDown>
      </div>
    </div>
  );
};

export default Index;
