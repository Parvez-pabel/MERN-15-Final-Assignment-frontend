import React from "react";

const NewsTable = () => {
  return (
    <div>
      <div className="overflow-x-auto h-full w-full">
        <table className="table table-xs table-pin-rows table-pin-cols">
          <thead>
            <tr>
              <th></th>
              <td>TITLE</td>
              <td>IMAGE</td>
              <td>LOCATION</td>
              <td>DETAILS</td>
              <td>CATEGORY</td>
              <td>USER</td>
              <td>ACTIONS</td>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Littel, Schaden and Vandervort</td>
              <td>Canada</td>
              <td>12/16/2020</td>
              <td>Blue</td>
              <td>ACTIONS</td>
              <th>1</th>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <td>TITLE</td>
              <td>IMAGE</td>
              <td>LOCATION</td>
              <td>DETAILS</td>
              <td>CATEGORY</td>
              <td>USER</td>
              <td>ACTIONS</td>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default NewsTable;
