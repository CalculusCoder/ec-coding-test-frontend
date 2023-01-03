import React, { useState } from "react";
import Card from "./Card";
import DropDownData from "./DropDownData";

type groupData = {
  id: number;
  campus: string;
  demographic: string;
  group_type: string;
  meeting_date: string;
  zip_code: number;
};

interface Props {
  newGroups: groupData[];
}

const DropDown: React.FC<Props> = ({ newGroups }) => {
  const [filterCampus, setFilterCampus] = useState<string>("");
  const [filterDemographic, setFilterDemographic] = useState<string>("");
  const [filterGroupType, setFilterGroupType] = useState<string>("");
  const [filterMeetingDate, setFilterMeetingDate] = useState<string>("");
  const [filterZipCode, setFilterZipCode] = useState<string>("");

  const changeCampus = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "All") {
      setFilterCampus("");
    } else {
      setFilterCampus(e.target.value);
    }
  };

  const changeDemographic = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "All") {
      setFilterDemographic("");
    } else {
      setFilterDemographic(e.target.value);
    }
  };

  const changeGroupType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "All") {
      setFilterGroupType("");
    } else {
      setFilterGroupType(e.target.value);
    }
  };

  const changeMeetingDate = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "All") {
      setFilterMeetingDate("");
    } else {
      setFilterMeetingDate(e.target.value);
    }
  };

  const changeZipCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "All") {
      setFilterZipCode("");
    } else {
      setFilterZipCode(e.target.value);
    }
  };

  let groups = newGroups.slice();

  if (filterCampus) {
    groups = groups.filter(
      (item) => item.campus.toLowerCase() === filterCampus.toLowerCase()
    );
  }
  if (filterDemographic) {
    groups = groups.filter(
      (item) =>
        item.demographic.toLowerCase() === filterDemographic.toLowerCase()
    );
  }
  if (filterGroupType) {
    groups = groups.filter(
      (item) => item.group_type.toLowerCase() === filterGroupType.toLowerCase()
    );
  }

  if (filterMeetingDate) {
    groups = groups.filter(
      (item) =>
        item.meeting_date.toLowerCase() === filterMeetingDate.toLowerCase()
    );
  }

  if (filterZipCode) {
    groups = groups.filter(
      (item) =>
        String(item.zip_code).toLowerCase() === filterZipCode.toLowerCase()
    );
  }

  return (
    <div className="md:flex md:gap-10 lg:gap-48 2xl:gap-80">
      <DropDownData
        filterCampus={filterCampus}
        changeCampus={changeCampus}
        changeDemographic={changeDemographic}
        filterDemographic={filterDemographic}
        filterGroupType={filterGroupType}
        changeGroupType={changeGroupType}
        changeMeetingDate={changeMeetingDate}
        filterMeetingDate={filterMeetingDate}
        filterZipCode={filterZipCode}
        changeZipCode={changeZipCode}
      ></DropDownData>
      <Card Groups={groups}></Card>
    </div>
  );
};

export default DropDown;
