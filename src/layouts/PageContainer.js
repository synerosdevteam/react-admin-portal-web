import * as React from "react";
import { styled } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";
import Grid from "@mui/material/Grid";
import { theme } from "../theme/theme";
import hydMetroLogo from "../assets/images/hyd_metro_logo.png";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import { Avatar, Badge, Box, IconButton, Typography } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import GroupIcon from "@mui/icons-material/Group";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";

const NAVIGATION = [
  {
    kind: "header",
    title: "Analytics",
  },
  {
    segment: "dashboard",
    title: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    segment: "monitoring",
    title: "Monitoring",
    icon: <LiveTvIcon />,
  },
  {
    kind: "divider",
  },
  {
    kind: "header",
    title: "Reports",
  },
  {
    segment: "transactionDetail",
    title: "Transaction Detail Report",
    icon: <DescriptionIcon />,
  },
  {
    segment: "revenueReport",
    title: "Revenue Report",
    icon: <BarChartIcon />,
  },
  {
    kind: "divider",
  },
  {
    kind: "header",
    title: "Configurations",
  },
  //   {
  //     segment: "reports",
  //     title: "Reports",
  //     icon: <BarChartIcon />,
  //     children: [
  //       {
  //         segment: "sales",
  //         title: "Sales",
  //         icon: <DescriptionIcon />,
  //       },
  //       {
  //         segment: "traffic",
  //         title: "Traffic",
  //         icon: <DescriptionIcon />,
  //       },
  //     ],
  //   },
  {
    segment: "userManagement",
    title: "User Management",
    icon: <GroupIcon />,
  },
  {
    segment: "deviceManagement",
    title: "Device Management",
    icon: <PhoneAndroidIcon />,
  },
];

function useDemoRouter(initialPath) {
  const [pathname, setPathname] = React.useState(initialPath);

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  return router;
}

const Skeleton = styled("div")(({ theme, height }) => ({
  backgroundColor: theme.palette.action.hover,
  borderRadius: theme.shape.borderRadius,
  height,
  content: '" "',
}));

export default function MainContainer() {
  const router = useDemoRouter("/dashboard");

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={theme}
      branding={{
        title: "Hyderabad Metro",
        logo: <img src={hydMetroLogo} alt="Hyd Metro" style={{ height: 40 }} />,
      }}
      localeText={<Typography>h1</Typography>}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          position: "absolute",
          right: "1em",
          top: ".5em",
          zIndex: 1000000,
        }}
      >
        <IconButton color="inherit">
          <Badge badgeContent={3} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton>
          <Avatar>AK</Avatar>
        </IconButton>
      </Box>

      <DashboardLayout>
        <PageContainer>
          <Grid container spacing={1}>
            <Grid size={5} />
            <Grid size={12}>
              <Skeleton height={14} />
            </Grid>
            <Grid size={12}>
              <Skeleton height={14} />
            </Grid>
            <Grid size={4}>
              <Skeleton height={100} />
            </Grid>
            <Grid size={8}>
              <Skeleton height={100} />
            </Grid>

            <Grid size={12}>
              <Skeleton height={150} />
            </Grid>
            <Grid size={12}>
              <Skeleton height={14} />
            </Grid>

            <Grid size={3}>
              <Skeleton height={100} />
            </Grid>
            <Grid size={3}>
              <Skeleton height={100} />
            </Grid>
            <Grid size={3}>
              <Skeleton height={100} />
            </Grid>
            <Grid size={3}>
              <Skeleton height={100} />
            </Grid>
          </Grid>
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}
