import { Box, Grid, Skeleton, Typography } from "@mui/material";
import { data } from "../data/data";

const SkeletonCP = () => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Skeleton
        variant="rectangular"
        animation="wave"
        width={"100%"}
        height={200}
      />
      <Skeleton animation="wave" width="90%" />
      <Skeleton animation="wave" width="60%" />
    </Grid>
  );
};
// loading ? (<Skeleton/>) : <Components/>
export const Home = () => {
  return (
    <div style={{ margin: "0 30px" }}>
      <Grid
        container
        rowSpacing={5}
        columnSpacing={{ xs: 1, sm: 2, md: 9 }}
        mt="100px">
        <SkeletonCP />
        <SkeletonCP />
        <SkeletonCP />
      </Grid>

      <Grid
        container
        rowSpacing={5}
        columnSpacing={{ xs: 1, sm: 2, md: 9 }}
        m="50px">
        {data.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <img
              style={{ width: "100%", height: 250 }}
              alt={item.title}
              src={item.src}
            />
            <Box>
              <Typography gutterBottom variant="body2">
                {item.title}
              </Typography>
              <Typography variant="caption">{item.channel}</Typography>
              <Typography variant="caption">
                {`${item.views} • ${item.createdAt}`}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
