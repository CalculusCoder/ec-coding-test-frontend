import { group, groupCollapsed } from "console";
import React from "react";
import styles from "../styles/Home.module.css";

type groupData = {
  id: number;
  campus: string;
  demographic: string;
  group_type: string;
  meeting_date: string;
  zip_code: number;
};

interface Props {
  filterCampus: string;
  changeCampus: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  changeDemographic: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  filterDemographic: string;
  filterGroupType: string;
  changeGroupType: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  changeMeetingDate: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  filterMeetingDate: string;
  filterZipCode: string;
  changeZipCode: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const DropDownData: React.FC<Props> = ({
  filterCampus,
  changeCampus,
  changeDemographic,
  filterDemographic,
  filterGroupType,
  changeGroupType,
  filterMeetingDate,
  changeMeetingDate,
  changeZipCode,
  filterZipCode,
}) => {
  return (
    <div className="mt-10 ml-10 w-[370px]">
      <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full h-[600px]">
        <h1>Campus</h1>
        <select
          onChange={changeCampus}
          className={styles.container}
          value={filterCampus}
        >
          <option>All</option>
          {/* {Groups.map((group: groupData) => {
            return <option key={group.id}>{group.campus}</option>;
          })} */}
          <option>Asheville</option>
          <option>Ballantyne</option>
          <option>Blakeney</option>
          <option>Columbia</option>
          <option>Concord</option>
          <option>Elevation Online</option>
          <option>Gaston</option>
        </select>
        <h1>Demographic</h1>
        <select
          className={styles.container}
          onChange={changeDemographic}
          value={filterDemographic}
        >
          <option>All</option>
          <option>Men</option>
          <option>Women</option>
          <option>Singles</option>
          <option>Everyone Welcome</option>
        </select>

        <h1>Group Type</h1>
        <select
          className={styles.container}
          onChange={changeGroupType}
          value={filterGroupType}
        >
          <option>All</option>
          <option>Marriage</option>
          <option>Spiritual Growth</option>
          <option>Book Study</option>
          <option>Parenting</option>
          <option>Sermon Discussion</option>
          <option>Christian Basics</option>
        </select>

        <h1>Meeting Date</h1>
        <select
          className={styles.container}
          onChange={changeMeetingDate}
          value={filterMeetingDate}
        >
          <option>All</option>
          <option>September 2, 2020</option>
          <option>October 2, 2020</option>
          <option>November 2, 2020</option>
          <option>December 2, 2020</option>
        </select>

        <h1>Zip Code</h1>
        <input
          className={styles.container}
          onChange={changeZipCode}
          value={filterZipCode}
        />
      </div>
    </div>
  );
};

export default DropDownData;
