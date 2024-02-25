import { Chart as chartJs } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const ToxicDetectionResponseDisplay = ({ result }) => {
  const { rating, plan, suggestion } = result;

  return (
    <div>
      <h1 className="text-xl md:text-2xl font-semibold">Result</h1>
      <div className="  space-y-5 flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
          <div className="rounded-xl shadow-lg p-5 md:p-10 h-full bg-base-100">
            <h1 className="text-lg">Rating: </h1>
            <Bar
              data={{
                labels: ["Toxicity"],
                datasets: [
                  {
                    label: "Your score",
                    data: [rating],
                    maxBarThickness: 20,
                    backgroundColor: ["#4a154b"],
                  },
                  {
                    label: "Max Possible Score",
                    data: [5],
                    maxBarThickness: 20,
                    backgroundColor: ["#e5e7eb"],
                  },
                ],
              }}
              options={{
                scales: {
                  y: {
                    beginAtZero: true,
                    // suggestedMin: 0,
                    // suggestedMax: 5,
                    max: 5,
                    min: 0,
                    ticks: {
                      precision: 0, // Set precision to 0 to display only integers
                    }, // Set the maximum limit for the y-axis
                  },
                },
              }}
            />
          </div>
          <div className="rounded-xl shadow-lg p-5 md:p-10 h-full bg-base-100 space-y-2">
            <h1 className="text-lg">Plan: </h1>
            <p>
              Your comprehensive success plan needs to include{" "}
              <span className="link">{plan}</span>
            </p>
          </div>
        </div>
        <div className="rounded-xl shadow-lg p-5 md:p-10 w-full bg-base-100 space-y-2">
          <h1 className="text-lg">Suggestion: </h1>
          <p>{suggestion}</p>
        </div>
      </div>
    </div>
  );
};

export default ToxicDetectionResponseDisplay;