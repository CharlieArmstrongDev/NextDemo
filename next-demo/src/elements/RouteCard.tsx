import { TflApiPresentationEntitiesMatchedRoute } from "@/state/api/api-TFL";
import { Card, Stack, Typography } from "@mui/material";

// ----------------------------------------------------------------------

type Props = {
  route: TflApiPresentationEntitiesMatchedRoute;
};

export default function RouteCard({route}: Props) {

  return (
    <Card>
      <Stack sx={{py: 5, px: 1}}>
        <Typography variant="subtitle1" noWrap>
          {"Origin: " + route.originationName}
        </Typography>
        <Typography variant="subtitle2" noWrap>
          {"Origin Code: " + (route.originator)}
        </Typography>
        <Typography variant="subtitle1" noWrap mt={2}>
          {"Destination: " + route.destinationName}
        </Typography>
        <Typography variant="subtitle2" noWrap>
          {"Destination Code: " + (route.destination)}
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: "common.white",
            opacity: 0.64,
            mt: 1,
          }}
        >
          {route.direction}
        </Typography>
      </Stack>
    </Card>
  );
}
