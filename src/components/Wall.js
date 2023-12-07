import React, { useEffect, useState } from "react";

export default function Wall(props) {
  const wallCPS = 7;
  const [wallHeight, setWallHeight] = useState("");
  const [wallLength, setWallLength] = useState("");
  const [totalWallSqft, setTotalWallSqft] = useState(wallHeight * wallLength);
  const [wallTotal, setWallTotal] = useState(totalWallSqft * wallCPS);

  useEffect(() => {
    setTotalWallSqft(wallHeight * wallLength);
    setWallTotal(totalWallSqft * wallCPS);
    props.wallData(wallTotal);
  }, [wallHeight, wallLength, totalWallSqft, props, wallTotal]);

  return (
    <div>
      <h2 className="flex justify-center mx-auto mt-5 text-[25px] font-bold text-blue-700">
        ENTER WALL SURFACE
      </h2>
      <table className="w-[75%] mt-2 mx-auto min-w-max table-auto text-center border-2 py-10">
        <thead>
          <tr className="mx-auto">
            <th>Height</th>
            <th>Length</th>
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
                value={wallHeight}
                onChange={(e) => setWallHeight(+e.target.value)}
              />
            </td>
            <td>
              <input
                type="number"
                className="w-[100px] border-2 rounded-md border-slate-400"
                value={wallLength}
                onChange={(e) => setWallLength(+e.target.value)}
              />
            </td>
            <td className="">
              <label onChange={totalWallSqft}>{totalWallSqft}</label>
            </td>
            <td>${wallCPS}</td>
            <td>${wallTotal}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
