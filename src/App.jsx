/** @format */

import { useState } from "react";

function App() {
  const [AnalyticsData, setAnalyticsData] = useState();
  // const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = e.target.url.value;

    fetch(
      `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${url}`
    )
      .then((res) => res.json())
      .then((data) => setAnalyticsData(data));
  };
  return (
    <>
      <div className="flex items-center justify-center w-4/5 mx-auto h-96 bg-[rgb(0,0,0,0.5)] rounded-sm ">
        <div className="w-4/5 h-1/2 flex flex-col space-y-6 items-center">
          <h2 className="text-4xl text-center font-bold text-white">
            Start <span className="text-yellow-600">Analytics</span>
          </h2>
          <form onSubmit={handleSubmit} className="flex gap-3">
            <input
              type="url"
              required
              name="url"
              placeholder="Inter your web url"
              className="p-4 rounded-md bg-base-100"
            />
            <input
              type="submit"
              value={"SEND"}
              className="p-4 bg-gray-800 rounded-md text-white"
            />
          </form>
        </div>
      </div>
      <div className="px-10 my-20">
        {AnalyticsData && (
          <div>
            <p>{AnalyticsData.captchaResult}</p>
            <p>kind: {AnalyticsData.kind}</p>
            <p>id: {AnalyticsData.id}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
