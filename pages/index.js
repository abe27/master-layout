import { MainLayout } from "../layouts";
import { ImageUrl, TableEmployeeList } from "../components";
import { Grid, GridItem } from "@chakra-ui/react";
const IndexPage = () => {
  return (
    <MainLayout title={"Test LayOut"} description={"Test Description"}>
      <div className="">
        <Grid
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(5, 1fr)"
          gap={4}
        >
          <GridItem rowSpan={2} colSpan={1} bg="tomato" />
          <GridItem colSpan={2} bg="papayawhip" />
          <GridItem colSpan={2} bg="papayawhip" />
          <GridItem colSpan={4}>
            <TableEmployeeList />
          </GridItem>
        </Grid>
      </div>
    </MainLayout>
  );
};

export default IndexPage;
