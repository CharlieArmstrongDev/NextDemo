import Page from "@/components/Page";
import Scrollbar from "@/components/scrollbar";
import RouteCard from "@/elements/RouteCard";
import Layout from "@/layouts";
import { useLineLineRoutesByIdsQuery, TflApiPresentationEntitiesLine } from "@/state/api/api-TFL";
import {Box, Container, Typography} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/router";

// ----------------------------------------------------------------------

PageRoutes.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function PageRoutes() {
  // Extract the intended travel line from the URL
  const router = useRouter();
  const {line} = router.query;

  // Subscription using RTK Query, would refresh using tags if there were any mutations set up - a refresh timer can also be set.
  const {data: Routes, isFetching: RoutesFetching} = useLineLineRoutesByIdsQuery({ids: [String(line) ?? "a"], serviceTypes: ["Regular", "Night"]});

  const Sections = (Routes as TflApiPresentationEntitiesLine)?.routeSections;

  return (
    <Page title="Project Commander" sx={{height: 1}}>
      <Container maxWidth={"xl"} sx={{height: "100%"}}>
        <Scrollbar sx={{height: "100%"}}>
          <Typography variant="h4" my={2}>Routes on Line: {String(line)}</Typography>
          {RoutesFetching ? <Typography variant="h6" >Loading</Typography> : 
            <Box
              sx={{
                display: "grid",
                gap: 3,
                pr: 2,
                gridTemplateColumns: {
                    xs: "repeat(1, 1fr)",
                    sm: "repeat(2, 1fr)",
                    md: "repeat(3, 1fr)",
                    lg: "repeat(4, 1fr)",
                },
              }}
            >
              {Sections?.map((route, index) => <RouteCard key={index} route={route} />) ?? <>Loading</>}
            </Box>
          }
        </Scrollbar>
      </Container>
    </Page>
  );
}