import React, { useEffect, useState } from "react";

export default function Floor(props) {
  const floorCPS = 7;
  const [floorWidth, setFloorWidth] = useState("");
  const [floorDepth, setFloorDepth] = useState("");
  const [totalFloorSqft, setTotalFloorSqft] = useState(floorWidth * floorDepth);
  const [floorTotal, setFloorTotal] = useState(totalFloorSqft * floorCPS);

  useEffect(() => {
    setTotalFloorSqft(floorWidth * floorDepth);
    setFloorTotal(totalFloorSqft * floorCPS);
    props.floorData(floorTotal);
  }, [floorWidth, floorDepth, totalFloorSqft, props, floorTotal]);

  return (
    <div>
      <h2 className="flex justify-center mx-auto mt-5 text-[25px] font-bold text-blue-700">
        MAIN FLOOR AREA
      </h2>
      <table className="w-[75%] mt-2 mx-auto min-w-max table-auto text-center border-2 py-10">
        <thead>
          <tr className="mx-auto">
            <th>Width</th>
            <th>Depth</th>
            <th className="mr-[200px]">Sqft</th>
            <th>Cost/Sqft</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input
                type="number"
                className="w-[100px] border-2 rounded-md border-slate-400"
                value={floorWidth}
                onChange={(e) => setFloorWidth(+e.target.value)}
              />
            </td>
            <td>
              <input
                type="number"
                className="w-[100px] border-2 rounded-md border-slate-400"
                value={floorDepth}
                onChange={(e) => setFloorDepth(+e.target.value)}
              />
            </td>
            <td className="">
              <label onChange={totalFloorSqft}>{totalFloorSqft}</label>
            </td>
            <td>${floorCPS}</td>
            <td>${floorTotal}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
