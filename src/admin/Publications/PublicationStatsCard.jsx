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
  const [stats, setStats] = useState([]);
  const [yearlyStats, setYearlyStats] = useState([]);

  // API_URL managed via PUBLICATIONS_API

  const fetchStats = () => {
    fetch(PUBLICATIONS_API.getStats)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setStats(data.data);
      });

    fetch(PUBLICATIONS_API.getYearlyStats)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setYearlyStats(data.data);
      });
  };

  useEffect(() => {
    fetchStats();
  }, [refresh]);

  const updateMainStat = async (item) => {
    await fetch(PUBLICATIONS_API.updateStats, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });

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
      <h3>Publication Statistics</h3>

      <table className="publication-stats-table">
        <thead>
          <tr>
            <th>Metric</th>
            <th>All</th>
            <th>Since 2021</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {stats.map((item, index) => (
            <tr key={item.label}>
              <td>{item.label}</td>

              <td>
                <input
                  type="number"
                  value={item.all_count}
                  onChange={(e) => {
                    const updated = [...stats];
                    updated[index].all_count = e.target.value;
                    setStats(updated);
                  }}
                />
              </td>

              <td>
                <input
                  type="number"
                  value={item.since_2021}
                  onChange={(e) => {
                    const updated = [...stats];
                    updated[index].since_2021 = e.target.value;
                    setStats(updated);
                  }}
                />
              </td>

              <td>
                <button onClick={() => updateMainStat(item)}>Save</button>
              </td>
            </tr>
          ))}
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