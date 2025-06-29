import KioskOverviewCard from "./components/KioskOverviewCard";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import WifiOffIcon from "@mui/icons-material/WifiOff";
import { red, yellow, blue, grey } from "@mui/material/colors";
import { Box } from "@mui/material";
import BarGraph from "../../components/Button/Charts/BarChart";

const cardDataList = [
  {
    title: "In Service",
    count: 120,
    percentage: "+12%",
    icon: CheckCircleOutlineIcon,
    color: { main: blue[500], light: blue[50] },
  },
  {
    title: "Out Of Service",
    count: 30,
    percentage: "-5%",
    icon: HighlightOffIcon,
    color: { main: red[500], light: red[50] },
  },
  {
    title: "Hardware Failure",
    count: 10,
    percentage: "-2%",
    icon: WarningAmberIcon,
    color: { main: yellow[700], light: yellow[50] },
  },
  {
    title: "Network Failure",
    count: 8,
    percentage: "-1%",
    icon: WifiOffIcon,
    color: { main: grey[700], light: grey[100] },
  },
];

const blueStations = [
  "AME",
  "BEG",
  "DGC",
  "HSG",
  "HTC",
  "JCP",
  "MAD",
  "MUN",
  "MET",
  "NGR",
  "NAG",
  "PRG",
  "PAR",
  "PED",
  "PRN",
  "RDG",
  "ROP",
  "JR5",
  "SEC",
  "STD",
  "TAR",
  "UPL",
  "YUG",
];
const redStations = [
  "ASM",
  "BTN",
  "CHP",
  "DSN",
  "BLR",
  "ESI",
  "ERA",
  "GAB",
  "IRM",
  "JNT",
  "KPH",
  "KHA",
  "KUK",
  "LBN",
  "LKP",
  "MGB",
  "MKL",
  "MYP",
  "MSP",
  "MSB",
  "NAM",
  "NEM",
  "OMC",
  "PUN",
  "SRN",
  "VOM",
];
const greenStations = ["CDP", "GNH", "MSH", "NAR", "RTC", "SCRW", "SUB"];

const allStations = [
  { station: "AME", value: 880 },
  { station: "BEG", value: 1410 },
  { station: "DGC", value: 1220 },
  { station: "HSG", value: 970 },
  { station: "HTC", value: 1050 },
  { station: "JCP", value: 1100 },
  { station: "MAD", value: 1290 },
  { station: "MUN", value: 1140 },
  { station: "MET", value: 910 },
  { station: "NGR", value: 1260 },
  { station: "NAG", value: 920 },
  { station: "PRG", value: 1110 },
  { station: "PAR", value: 1190 },
  { station: "PED", value: 1030 },
  { station: "PRN", value: 1400 },
  { station: "RDG", value: 890 },
  { station: "ROP", value: 980 },
  { station: "JR5", value: 1350 },
  { station: "SEC", value: 1580 },
  { station: "STD", value: 1120 },
  { station: "TAR", value: 1450 },
  { station: "UPL", value: 1210 },
  { station: "YUG", value: 1080 },
  // Red Corridor
  { station: "ASM", value: 1320 },
  { station: "BTN", value: 1540 },
  { station: "CHP", value: 980 },
  { station: "DSN", value: 1100 },
  { station: "BLR", value: 1430 },
  { station: "ESI", value: 760 },
  { station: "ERA", value: 820 },
  { station: "GAB", value: 1370 },
  { station: "IRM", value: 1510 },
  { station: "JNT", value: 1220 },
  { station: "KPH", value: 1650 },
  { station: "KHA", value: 790 },
  { station: "KUK", value: 1140 },
  { station: "LBN", value: 1020 },
  { station: "LKP", value: 1340 },
  { station: "MGB", value: 1190 },
  { station: "MKL", value: 1670 },
  { station: "MYP", value: 980 },
  { station: "MSP", value: 890 },
  { station: "MSB", value: 1050 },
  { station: "NAM", value: 1720 },
  { station: "NEM", value: 1130 },
  { station: "OMC", value: 970 },
  { station: "PUN", value: 1230 },
  { station: "SRN", value: 940 },
  { station: "VOM", value: 1500 },
  //   // Green Corridor
  { station: "CDP", value: 720 },
  { station: "GNH", value: 820 },
  { station: "MSH", value: 610 },
  { station: "NAR", value: 980 },
  { station: "RTC", value: 1050 },
  { station: "SCRW", value: 1130 },
  { station: "SUB", value: 870 },
];

const corridorMap = {
  red: { stations: redStations, label: "Corridor I", color: "#c62828" },
  blue: { stations: blueStations, label: "Corridor III", color: "#094d7c" },
  green: { stations: greenStations, label: "Corridor II", color: "#00c853" },
};

export default function Dashboard() {
  return (
    <>
      <Box display="flex" flexWrap="wrap" gap={2} justifyContent="center">
        {cardDataList.map((item, index) => (
          <Box
            key={index}
            sx={{
              width: "270px", // fixed width
              flexGrow: 0,
              flexShrink: 0,
            }}
          >
            <KioskOverviewCard {...item} />
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          paddingTop: 4,
        }}
      >
        <BarGraph
          title="Daily Revnue by Station"
          data={allStations}
          corridorMap={corridorMap}
        />
      </Box>
    </>
  );
}
