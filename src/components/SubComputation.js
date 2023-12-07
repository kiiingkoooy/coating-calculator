import React, { useEffect, useState } from "react";

export default function SubComputation(props) {
  const subComCPS = 7;
  const [subComWidth, setSubComWidth] = useState("");
  const [subComDepth, setSubComDepth] = useState("");
  const [totalSubComSqft, setTotalSubComSqft] = useState(
    subComWidth * subComDepth
  );
  const [subComTotal, setSubComTotal] = useState(totalSubComSqft * subComCPS);

  useEffect(() => {
    setTotalSubComSqft(subComWidth * subComDepth);
    setSubComTotal(totalSubComSqft * subComCPS);
    props.subComData(subComTotal);
  }, [subComWidth, subComDepth, totalSubComSqft, props, subComTotal]);

  return (
    <div>
      <h2 className="flex justify-center mx-auto mt-5 text-[25px] font-bold text-blue-700">
        ANY AREAS TO SUBTRACT TO THE COMPUTATION
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
                value={subComWidth}
                onChange={(e) => setSubComWidth(+e.target.value)}
              />
            </td>
            <td>
              <input
                type="number"
                className="w-[100px] border-2 rounded-md border-slate-400"
                value={subComDepth}
                onChange={(e) => setSubComDepth(+e.target.value)}
              />
            </td>
            <td className="">
              <label onChange={totalSubComSqft}>{totalSubComSqft}</label>
            </td>
            <td>${subComCPS}</td>
            <td>${subComTotal}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
