import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { PUBLICATIONS_API } from "../../api/publicationsApi";

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

function PublicationStatsCard({ refresh }) {
  const [yearlyStats, setYearlyStats] = useState([]);

  const [citationStats, setCitationStats] = useState({
    citations: "",
    h_index: "",
    i10_index: "",
  });

  const fetchStats = () => {
    fetch(PUBLICATIONS_API.getYearlyStats)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setYearlyStats(data.data);
      });

    fetch(PUBLICATIONS_API.getCitationStats)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setCitationStats(data.data);
      });
  };

  useEffect(() => {
    fetchStats();
  }, [refresh]);

  const updateCitationStats = async () => {
    await fetch(PUBLICATIONS_API.updateCitationStats, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(citationStats),
    });

    alert("Citation stats updated");
    fetchStats();
  };

  const updateYearStat = async (item) => {
    await fetch(PUBLICATIONS_API.updateYearlyStats, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });

    fetchStats();
  };

  const chartData = {
    labels: yearlyStats.map((item) => item.year),
    datasets: [
      {
        data: yearlyStats.map((item) => item.total),
        backgroundColor: "#777777",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        position: "right",
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="publication-stats-card">
      <h3>Citation Statistics</h3>

      <table className="publication-stats-table">
        <thead>
          <tr>
            <th>Metric</th>
            <th>All</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Citations</td>
            <td>
              <input
                type="number"
                value={citationStats.citations}
                onChange={(e) =>
                  setCitationStats({
                    ...citationStats,
                    citations: e.target.value,
                  })
                }
              />
            </td>
            <td rowSpan="3">
              <button onClick={updateCitationStats}>Save</button>
            </td>
          </tr>

          <tr>
            <td>h-index</td>
            <td>
              <input
                type="number"
                value={citationStats.h_index}
                onChange={(e) =>
                  setCitationStats({
                    ...citationStats,
                    h_index: e.target.value,
                  })
                }
              />
            </td>
          </tr>

          <tr>
            <td>i10-index</td>
            <td>
              <input
                type="number"
                value={citationStats.i10_index}
                onChange={(e) =>
                  setCitationStats({
                    ...citationStats,
                    i10_index: e.target.value,
                  })
                }
              />
            </td>
          </tr>
        </tbody>
      </table>

      <div className="publication-chart">
        <Bar data={chartData} options={chartOptions} />
      </div>

      <h4>Yearly Graph Data</h4>

      <div className="yearly-stats-grid">
        {yearlyStats.map((item, index) => (
          <div className="yearly-stat-row" key={item.year}>
            <label>{item.year}</label>

            <input
              type="number"
              value={item.total}
              onChange={(e) => {
                const updated = [...yearlyStats];
                updated[index].total = e.target.value;
                setYearlyStats(updated);
              }}
            />

            <button onClick={() => updateYearStat(item)}>Save</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PublicationStatsCard;