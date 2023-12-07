import React, { useEffect, useState } from "react";

export default function CoatRemoval(props) {
  const coatCPS = 0.75;
  const [coatWidth, setCoatWidth] = useState("");
  const [coatDepth, setCoatDepth] = useState("");
  const [totalCoatSqft, setTotalCoatSqft] = useState(coatWidth * coatDepth);
  const [coatTotal, setCoatTotal] = useState(totalCoatSqft * coatCPS);

  useEffect(() => {
    setTotalCoatSqft(coatWidth * coatDepth);
    setCoatTotal(totalCoatSqft * coatCPS);
    props.coatData(coatTotal)
  }, [coatWidth, coatDepth, totalCoatSqft, props, coatTotal]);

  return (
    <div>
      <h2 className="flex justify-center mx-auto mt-5 text-[25px] font-bold text-blue-700">
        PREVIOUS COATING REMOVAL
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
                value={coatWidth}
                onChange={(e) => setCoatWidth(+e.target.value)}
              />
            </td>
            <td>
              <input
                type="number"
                className="w-[100px] border-2 rounded-md border-slate-400"
                value={coatDepth}
                onChange={(e) => setCoatDepth(+e.target.value)}
              />
            </td>
            <td className="">
              <label onChange={totalCoatSqft}>{totalCoatSqft}</label>
            </td>
            <td>${coatCPS}</td>
            <td>${coatTotal}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
