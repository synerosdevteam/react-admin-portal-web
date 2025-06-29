import React, { useState } from "react";
import {
  BarChart,
  barElementClasses,
  useDrawingArea,
} from "@mui/x-charts/BarChart";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@mui/material";

export default function CorridorBarChart({ title, data, corridorMap }) {
  const [visibleCorridors, setVisibleCorridors] = useState(
    Object.keys(corridorMap)
  );

  const xLabels = data.map((s) => s.station);

  const series = Object.entries(corridorMap)
    .filter(([key]) => visibleCorridors.includes(key))
    .map(([key, { stations, label, color }]) => ({
      label,
      color,
      data: xLabels.map((label) =>
        stations.includes(label)
          ? (data.find((s) => s.station === label)?.value ?? null)
          : null
      ),
    }));

  const handleToggle = (key) => {
    setVisibleCorridors((prev) =>
      prev.includes(key) ? prev.filter((c) => c !== key) : [...prev, key]
    );
  };

  return (
    <Card sx={{ width: "100%" }}>
      <CardContent>
        {title && (
          <Typography variant="h6" mb={2}>
            {title}
          </Typography>
        )}

        {/* Corridor Filter Checkboxes */}
        <FormGroup row sx={{ mb: 2 }}>
          {Object.entries(corridorMap).map(([key, { label, color }]) => (
            <FormControlLabel
              key={key}
              control={
                <Checkbox
                  checked={visibleCorridors.includes(key)}
                  onChange={() => handleToggle(key)}
                  sx={{ color, "&.Mui-checked": { color } }}
                />
              }
              label={label}
            />
          ))}
        </FormGroup>

        {/* Responsive BarChart */}
        <Box sx={{ width: "100%", overflowX: "auto" }}>
          <BarChart
            xAxis={[
              {
                tickPlacement: "middle",
                scaleType: "band",
                data: xLabels,
                tickLabelStyle: {
                  transform: "rotate(45deg)",
                  textAnchor: "start",
                },
              },
            ]}
            series={series}
            height={350}
            tooltip={{ trigger: "item" }}
            borderRadius={8}
            grid={{ horizontal: true }}
            slotProps={{
              legend: {
                direction: "row",
                position: { vertical: "top", horizontal: "right" },
              },
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
}
