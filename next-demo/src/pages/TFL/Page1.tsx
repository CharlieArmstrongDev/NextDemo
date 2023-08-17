import Page from '@/components/Page';
import Layout from '@/layouts';
import { useBikePointGetAllQuery } from '@/state/api/api-TFL';
import { Container } from '@mui/material';

// ----------------------------------------------------------------------

PageHome.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout variant="default">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function PageHome() {

  const {data: BikePoints} = useBikePointGetAllQuery();

  return (
    <Page title="Home" sx={{height: "100%"}}>
      <Container sx={{height: "100%"}}>
        {BikePoints?.map((point) => (
          <>
            {point.commonName}
          </>
        ))}
      </Container>
    </Page>
  );
}
