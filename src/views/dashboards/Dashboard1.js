import React from "react";
import { Grid, Box } from "@material-ui/core";

import {
  BlogCard,
  SalesOverview,
  ProductPerformance,
  DailyActivities,
} from "./dashboard1-components";

import ChartJS from "./ChartJS";


const Dashboard1 = () => {
  // 2

  return (
    <Box>
      <Grid container spacing={0}>
        {/* ------------------------- row 1 ------------------------- */}

        <div>
    
      </div>
        <Grid item xs={12} lg={12}>
          {/* <SalesOverview /> */}
          <ChartJS></ChartJS>
        </Grid>
        {/* ------------------------- row 2 ------------------------- */}
        <Grid item xs={12} lg={4}>
          <DailyActivities />
        </Grid>
        <Grid item xs={12} lg={8}>
          <ProductPerformance />
        </Grid>
        {/* ------------------------- row 3 ------------------------- */}
        <BlogCard />
      </Grid>
    </Box>
  );
};

export default Dashboard1;
