import { m } from 'framer-motion';
import NextLink from 'next/link';
import { styled } from '@mui/material/styles';
import { Box, Button, Typography, Container } from '@mui/material';
import { MotionContainer, varBounce } from '../components/animate';
import Layout from '../layouts';
import Page from '../components/Page';

// ----------------------------------------------------------------------

PageHome.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout variant="default">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function PageHome() {
  return (
    <Page title="Home" sx={{height: "100%"}}>
			<Container component={MotionContainer} sx={{height: "100%"}}>
				<Box sx={{height:"30%"}}/>
				<Box sx={{height:"70%"}}>
					<Box sx={{maxWidth: 480, margin: 'auto', textAlign: 'center', height: "100%"}}>
						<m.div variants={varBounce().in}>
							<Typography variant="h3" paragraph>
								Home Placeholder
							</Typography>
						</m.div>
					</Box>
				</Box>
			</Container>
    </Page>
  );
}
