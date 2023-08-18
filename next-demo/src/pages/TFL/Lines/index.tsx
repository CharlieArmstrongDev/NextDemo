import Page from '@/components/Page';
import Layout from '@/layouts';
import { format } from 'date-fns';
import {  useLineGetByModeQuery, useLineMetaModesQuery } from '@/state/api/api-TFL';
import { Autocomplete, Box, Container, LinearProgress, Paper, Stack, TextField, Typography } from '@mui/material';
import { DataGridPremium, GridColDef, GridToolbar, GridValueGetterParams } from '@mui/x-data-grid-premium';
import { useState } from 'react';
import { useRouter } from 'next/router';

// ----------------------------------------------------------------------

PageLines.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout variant="default">{page}</Layout>;
};

// ----------------------------------------------------------------------

//Convert DateString from API
export function fDate(date: Date | string | number){
  return format((new Date(date)), 'dd/MM/yyyy');
} 

export default function PageLines() {

  // DataGrid Column Definitions
  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "Line ID",
      flex: 1,
      align: "center",
      headerAlign: "center",
      description: "",
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      align: "center",
      headerAlign: "center",
      description: "",
    },
    {
      field: "modeName",
      headerName: "Mode",
      flex: 1,
      align: "center",
      headerAlign: "center",
      description: "",
    },
    {
      field: "disruptions",
      headerName: "Disruption Count",
      flex: 1,
      align: "center",
      headerAlign: "center",
      description: "",
      valueGetter: (params: GridValueGetterParams) => (params.row.disruptions ? 
        Lines?.find((line) => line.id == params.row.id)?.disruptions?.length : "n/a"
      ),
    },
    {
      field: "routeSections",
      headerName: "Section Count",
      flex: 1,
      align: "center",
      headerAlign: "center",
      description: "",
      valueGetter: (params: GridValueGetterParams) => (params.row.routeSections ? 
        Lines?.find((line) => line.id == params.row.id)?.routeSections?.length : "n/a"
      ),
    },
    {
      field: "serviceTypes",
      headerName: "Service Type Count",
      flex: 1,
      align: "center",
      headerAlign: "center",
      description: "",
      valueGetter: (params: GridValueGetterParams) => (params.row.serviceTypes ? 
        Lines?.find((line) => line.id == params.row.id)?.serviceTypes?.length : "n/a"
      ),
    },
    {
      field: "created",
      headerName: "Created Date",
      flex: 1,
      align: "center",
      headerAlign: "center",
      description: "",
      valueGetter: (params: GridValueGetterParams) => (params.row.created ? fDate(params.row.created) : "n/a"),
    },
    {
      field: "modified",
      headerName: "Modified Date",
      flex: 1,
      align: "center",
      headerAlign: "center",
      description: "",
      valueGetter: (params: GridValueGetterParams) => (params.row.modified ? fDate(params.row.modified) : "n/a"),
    },
  ];

  const router = useRouter();

  const [selected, setSelected] = useState<string>("");

  // Two Subscriptions using RTK Query, these would refresh using tags if there were any mutations set up - a refresh timer can also be set.
  const {data: Lines, isFetching: LinesFetching, isLoading: LinesLoading} = useLineGetByModeQuery({modes: [selected]});
  const {data: Modes, isFetching: ModesFetching, isLoading: ModesLoading} = useLineMetaModesQuery();
  
  return (
    <Page title="TFL" sx={{height: "100%"}}>
      <Container maxWidth={false} sx={{height: "100%"}}>
        <Box height={"100%"}>
          <Box height={"90%"} pt={5}>
            <Stack direction={"row"} spacing={4} mb={3}>
              <Typography variant="h4" >Lines</Typography>
              <Autocomplete
                sx={{width: 300}}
                size={"small"}
                loading={ModesFetching || ModesLoading}
                options={Modes?.map((mode) => mode.modeName) ?? []}
                renderInput={(params) => <TextField {...params} label="Select Mode of Transport" />}
                onChange={(event: any, selectionModel: any) => {
                  event.preventDefault();
                  return setSelected(selectionModel);
                }}
                renderOption={(props, option, {selected}) => (
                  <li {...props}>
                    {option}
                  </li>
                )}
              />
            </Stack>
            
            <Paper elevation={6} sx={{p: 1, height: "100%"}}>
              <DataGridPremium
                columns={columns}
                rows={Lines ?? []}
                disableRowSelectionOnClick
                autoPageSize
                pagination
                density={"comfortable"}
                loading={LinesFetching || LinesLoading}
                slots={{
                  loadingOverlay: LinearProgress,
                  toolbar: GridToolbar,
                }}
                slotProps={{
                  toolbar: {
                    showQuickFilter: true,
                    quickFilterProps: { debounceMs: 250 },
                  },
                }}
                onRowClick={(params) => {router.push("./Lines/" + params.row.id);}}
              />
            </Paper>
          </Box>
        </Box>
      </Container>
    </Page>
  );
}
