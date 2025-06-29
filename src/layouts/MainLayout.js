import * as React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";
import { theme } from "../theme/theme";
import hydMetroLogo from "../assets/images/hyd_metro_logo.png";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import { Avatar, Badge, Box, IconButton } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import GroupIcon from "@mui/icons-material/Group";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import AppRoutes from "../routes/AppRoutes";

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

export default function MainLayout() {
  const router = useDemoRouter("/dashboard");

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={theme}
      branding={{
        title: "Hyderabad Metro Rail",
        logo: <img src={hydMetroLogo} alt="Hyd Metro" style={{ height: 40 }} />,
      }}
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
            <NotificationsNoneIcon />
          </Badge>
        </IconButton>
        <IconButton>
          <Avatar>AK</Avatar>
        </IconButton>
      </Box>

      <DashboardLayout>
        <PageContainer>
          <AppRoutes router={router} />
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}
