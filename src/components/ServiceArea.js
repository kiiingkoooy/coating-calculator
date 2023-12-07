import React, { useEffect, useState } from "react";

export default function ServiceArea(props) {
  const servAreaCPS = 6.5;
  const [servAreaWidth, setServAreaWidth] = useState("");
  const [servAreaDepth, setServAreaDepth] = useState("");
  const [totalServAreaSqft, setTotalServAreaSqft] = useState(
    servAreaWidth * servAreaDepth
  );
  const [servAreaTotal, setServAreaTotal] = useState(
    totalServAreaSqft * servAreaCPS
  );

  useEffect(() => {
    setTotalServAreaSqft(servAreaWidth * servAreaDepth);
    setServAreaTotal(totalServAreaSqft * servAreaCPS);
    props.servAreaData(servAreaTotal);
  }, [servAreaWidth, servAreaDepth, totalServAreaSqft, props, servAreaTotal]);

  return (
    <div>
      <h2 className="flex justify-center mx-auto mt-5 text-[25px] font-bold text-blue-700">
        ADD ADDITIONAL SERVICE AREA/S
      </h2>
      <table className="w-[75%] mt-2 mx-auto min-w-max table-auto text-center border-2 py-10">
        <thead>
          <tr className="mx-auto">
            <th>Width</th>
            <th>Depth</th>
            <th>Sqft</th>
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
                value={servAreaWidth}
                onChange={(e) => setServAreaWidth(+e.target.value)}
              />
            </td>
            <td>
              <input
                type="number"
                className="w-[100px] border-2 rounded-md border-slate-400"
                value={servAreaDepth}
                onChange={(e) => setServAreaDepth(+e.target.value)}
              />
            </td>
            <td className="">
              <label onChange={totalServAreaSqft}>{totalServAreaSqft}</label>
            </td>
            <td>${servAreaCPS}</td>
            <td>${servAreaTotal}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
