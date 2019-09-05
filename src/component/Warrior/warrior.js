import React from "react";
import "./warrior.css";

const WarriorStats = props => (
  <table className="wtg">
    <tbody>
      <tr>
        <th className="wtg-0pky">Class</th>
        <th className="wtg-0lax">Warrior</th>
      </tr>
      <tr>
        <td className="wtg-0lax">STR</td>
        <td className="wtg-0lax">10</td>
      </tr>
      <tr>
        <td className="wtg-0lax">AGI:</td>
        <td className="wtg-0lax">5</td>
      </tr>
      <tr>
        <td className="wtg-0lax">HP</td>
        <td className="wtg-0lax">50</td>
      </tr>
      <tr>
        <td className="wtg-0lax">DEF</td>
        <td className="wtg-0lax">7</td>
      </tr>
      <tr>
        <td className="wtg-0lax">LUK</td>
        <td className="wtg-0lax">5</td>
      </tr>
      <tr>
        <td className="wtg-0lax">Story</td>
        <td className="wtg-0lax">
          A retired knight who has to pick up his sword once again to defeat the
          demon lord and his army.
        </td>
      </tr>
    </tbody>
  </table>
);

export default WarriorStats;
