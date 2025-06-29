import { Box, Paper, Typography } from "@mui/material";

function KioskOverviewCard({
  count,
  title,
  percentage,
  icon: IconComponent,
  color,
}) {
  return (
    <Paper
      sx={{
        px: 4,
        py: 2,
        borderBottom: `.15em solid ${color.main}`,
      }}
    >
      <Box display="flex" alignItems="center" gap={2} paddingBottom={2}>
        <Box
          display="flex"
          alignItems="center"
          borderRadius=".5em"
          sx={{ backgroundColor: color.light }}
        >
          <IconComponent sx={{ p: 1, fontSize: "3em", color: color.main }} />
        </Box>
        <Typography variant="h4">{count}</Typography>
      </Box>
      <Typography variant="h6">{title}</Typography>
      <Box display="flex" gap={1} paddingTop={1}>
        <Typography>{percentage}</Typography>
        <Typography variant="subtitle2">than last week</Typography>
      </Box>
    </Paper>
  );
}

export default KioskOverviewCard;
