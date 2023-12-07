import React, { useEffect, useState } from "react";

export default function Divot(props) {
  const divotCPS = 3;
  const [numSqft, setNumSqft] = useState("");
  const [totalDivot, setTotalDivot] = useState(numSqft * divotCPS);

  useEffect(() => {
    setTotalDivot(numSqft * divotCPS);
    props.divotData(totalDivot);
  }, [numSqft, totalDivot, props]);

  return (
    <div>
      <h2 className="flex justify-center mx-auto mt-5 text-[25px] font-bold text-blue-700">
        ADD DIVOT
      </h2>
      <table className="w-[75%] mt-2 mx-auto min-w-max table-auto text-center border-2 py-10">
        <thead>
          <tr className="mx-auto">
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
                value={numSqft}
                onChange={(e) => setNumSqft(+e.target.value)}
              />
            </td>           
            <td>${divotCPS}</td>
            <td>${totalDivot}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
