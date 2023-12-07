import React, { useEffect, useState } from "react";

export default function Floor(props) {
  const crackCPS = 10;
  const [numCracks, setNumCracks] = useState("");
  const [totalCracks, setTotalCracks] = useState(numCracks * crackCPS);

  useEffect(() => {
    setTotalCracks(numCracks * crackCPS);
    props.crackData(totalCracks);
  }, [numCracks, props, totalCracks]);

  return (
    <div>
      <h2 className="flex justify-center mx-auto mt-5 text-[25px] font-bold text-blue-700">
        ADD IN ANY CRACKS
      </h2>
      <table className="w-[75%] mt-2 mx-auto min-w-max table-auto text-center border-2 py-10">
        <thead>
          <tr className="mx-auto">
            <th>Number of Cracks</th>
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
                value={numCracks}
                onChange={(e) => setNumCracks(+e.target.value)}
              />
            </td>
            <td>${crackCPS}</td>
            <td>${totalCracks}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
