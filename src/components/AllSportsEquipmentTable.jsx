/* eslint-disable react/prop-types */
import React from "react";

const AllSportsEquipmentTable = ({ equipment }) => {
  console.log(equipment);
  return (
    <div>
      <div className="overflow-x-auto w-full ">
        <table className="table table-zebra border-2">
       
        
          <thead>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
            </thead>
           
          
        </table>
      </div>
    </div>
  );
};

export default AllSportsEquipmentTable;
