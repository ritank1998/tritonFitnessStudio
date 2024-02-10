/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { useState } from "react";

const Table = ({ day }) => {
  return (
    <table css={styles}>
      <tbody>
        <tr>
          <td>Yoga Classes</td>
          <td>
            <span className={day === "Monday" ? "" : "hidden"}>
            <div>6.00 AM to 7.00 AM</div>
            </span>
          </td>
          
          <td>
          </td>
          <td>Swati Soni</td>
        </tr>
        <tr>
          <td>Bharatnatyyam</td>
          <td>
            <span className={day === "Friday" ? "" : "hidden"}>
              4.50 PM - 6.00 PM
            </span>
          </td>
          <td>
            <span className={day === "Thursday" ? "" : "hidden"}>
              4.50 PM - 6.00 PM
            </span>
            <span className={day === "Friday" ? "" : "hidden"}>
              4.50 PM - 6.00 PM
            </span>
          </td>
          <td>Nandini Ajiampur</td>
        </tr>
        <tr>
          <td>GX Classes </td>
          <td>
            <span className={day === "Tuesday" ? "" : "hidden"}>
              10:00AM - 11:30AM
            </span>
          </td>
          <td>
            <span className={day === "Monday" ? "" : "hidden"}>
              7.30 PM - 8.30 PM
            </span>
          </td>
          <td>Ujwal Amin</td>
        </tr>
        <tr>
          <td>Zumba </td>
          <td>
            <span className={day === "Tuesday" ? "" : "hidden"}>
              10:00AM - 11:30AM
            </span>
          </td>
          <td>
            <span className={day === "Monday" ? "" : "hidden"}>
              7.00 PM to 8.00 PM
            </span>
          </td>
          <td>Somya</td>
        </tr>
        {/* <tr>
          <td>Yoga Training Class </td>
          <td>
            <span className={day === "Wednesday" ? "" : "hidden"}>
              10:00AM - 11:30AM
            </span>
          </td>
          <td>
            <span className={day === "Friday" ? "" : "hidden"}>
              2:00PM - 3:30PM
            </span>
          </td>
          <td>Hector T. Daigle</td>
        </tr>
        <tr>
          <td>Advanced Training </td>
          <td>
            <span className={day === "Thursday" ? "" : "hidden"}>
              10:00AM - 11:30AM
            </span>
          </td>
          <td>
            <span className={day === "Wednesday" ? "" : "hidden"}>
              2:00PM - 3:30PM
            </span>
          </td>
          <td>Bret D. Bowers</td>
        </tr> */}
      </tbody>
    </table>
  );
};

const styles = css`
  border-collapse: collapse;
  color: #fff;
  margin: 30px 0 0 0;
  td,
  th {
    border: 1px solid #fff;
    border-collapse: collapse;
  }
  tr {
    td {
      padding: 40px 0;
      width: 200px;
      span {
        opacity: 1;
        transition: opacity 900ms ease-in-out;
      }
    }
  }
  .hidden {
    opacity: 0;
  }
  @media (max-width: 640px) {
    font-size: 12px;
    tr {
      td {
        padding: 40px 0;
        width: 200px;
        span {
          font-size: 11px;
        }
      }
    }
  }
`;

export default Table;
