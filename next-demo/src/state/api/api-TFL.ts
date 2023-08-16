import { emptyTFLApi as api } from "./emptyApi-TFL";
export const addTagTypes = [
  "AccidentStats",
  "AirQuality",
  "BikePoint",
  "Cabwise",
  "Journey",
  "Line",
  "Mode",
  "Occupancy",
  "Place",
  "Road",
  "Search",
  "StopPoint",
  "TravelTime",
  "Vehicle",
] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: (build) => ({
      accidentStatsGet: build.query<
        AccidentStatsGetApiResponse,
        AccidentStatsGetApiArg
      >({
        query: (queryArg) => ({ url: `/AccidentStats/${queryArg.year}` }),
        providesTags: ["AccidentStats"],
      }),
      airQualityGet: build.query<AirQualityGetApiResponse, AirQualityGetApiArg>(
        {
          query: () => ({ url: `/AirQuality` }),
          providesTags: ["AirQuality"],
        }
      ),
      bikePointGetAll: build.query<
        BikePointGetAllApiResponse,
        BikePointGetAllApiArg
      >({
        query: () => ({ url: `/BikePoint` }),
        providesTags: ["BikePoint"],
      }),
      bikePointSearch: build.query<
        BikePointSearchApiResponse,
        BikePointSearchApiArg
      >({
        query: (queryArg) => ({
          url: `/BikePoint/Search`,
          params: { query: queryArg.query },
        }),
        providesTags: ["BikePoint"],
      }),
      bikePointGet: build.query<BikePointGetApiResponse, BikePointGetApiArg>({
        query: (queryArg) => ({ url: `/BikePoint/${queryArg.id}` }),
        providesTags: ["BikePoint"],
      }),
      cabwiseGet: build.query<CabwiseGetApiResponse, CabwiseGetApiArg>({
        query: (queryArg) => ({
          url: `/Cabwise/search`,
          params: {
            lat: queryArg.lat,
            lon: queryArg.lon,
            optype: queryArg.optype,
            wc: queryArg.wc,
            radius: queryArg.radius,
            name: queryArg.name,
            maxResults: queryArg.maxResults,
            legacyFormat: queryArg.legacyFormat,
            forceXml: queryArg.forceXml,
            twentyFourSevenOnly: queryArg.twentyFourSevenOnly,
          },
        }),
        providesTags: ["Cabwise"],
      }),
      journeyJourneyResults: build.query<
        JourneyJourneyResultsApiResponse,
        JourneyJourneyResultsApiArg
      >({
        query: (queryArg) => ({
          url: `/Journey/JourneyResults/${queryArg["from"]}/to/${queryArg.to}`,
          params: {
            via: queryArg.via,
            nationalSearch: queryArg.nationalSearch,
            date: queryArg.date,
            time: queryArg.time,
            timeIs: queryArg.timeIs,
            journeyPreference: queryArg.journeyPreference,
            mode: queryArg.mode,
            accessibilityPreference: queryArg.accessibilityPreference,
            fromName: queryArg.fromName,
            toName: queryArg.toName,
            viaName: queryArg.viaName,
            maxTransferMinutes: queryArg.maxTransferMinutes,
            maxWalkingMinutes: queryArg.maxWalkingMinutes,
            walkingSpeed: queryArg.walkingSpeed,
            cyclePreference: queryArg.cyclePreference,
            adjustment: queryArg.adjustment,
            bikeProficiency: queryArg.bikeProficiency,
            alternativeCycle: queryArg.alternativeCycle,
            alternativeWalking: queryArg.alternativeWalking,
            applyHtmlMarkup: queryArg.applyHtmlMarkup,
            useMultiModalCall: queryArg.useMultiModalCall,
            walkingOptimization: queryArg.walkingOptimization,
            taxiOnlyTrip: queryArg.taxiOnlyTrip,
            routeBetweenEntrances: queryArg.routeBetweenEntrances,
            useRealTimeLiveArrivals: queryArg.useRealTimeLiveArrivals,
            calcOneDirection: queryArg.calcOneDirection,
            includeAlternativeRoutes: queryArg.includeAlternativeRoutes,
            overrideMultiModalScenario: queryArg.overrideMultiModalScenario,
          },
        }),
        providesTags: ["Journey"],
      }),
      journeyMeta: build.query<JourneyMetaApiResponse, JourneyMetaApiArg>({
        query: () => ({ url: `/Journey/Meta/Modes` }),
        providesTags: ["Journey"],
      }),
      lineMetaDisruptionCategories: build.query<
        LineMetaDisruptionCategoriesApiResponse,
        LineMetaDisruptionCategoriesApiArg
      >({
        query: () => ({ url: `/Line/Meta/DisruptionCategories` }),
        providesTags: ["Line"],
      }),
      lineMetaModes: build.query<LineMetaModesApiResponse, LineMetaModesApiArg>(
        {
          query: () => ({ url: `/Line/Meta/Modes` }),
          providesTags: ["Line"],
        }
      ),
      lineMetaServiceTypes: build.query<
        LineMetaServiceTypesApiResponse,
        LineMetaServiceTypesApiArg
      >({
        query: () => ({ url: `/Line/Meta/ServiceTypes` }),
        providesTags: ["Line"],
      }),
      lineMetaSeverity: build.query<
        LineMetaSeverityApiResponse,
        LineMetaSeverityApiArg
      >({
        query: () => ({ url: `/Line/Meta/Severity` }),
        providesTags: ["Line"],
      }),
      lineGetByMode: build.query<LineGetByModeApiResponse, LineGetByModeApiArg>(
        {
          query: (queryArg) => ({ url: `/Line/Mode/${queryArg.modes}` }),
          providesTags: ["Line"],
        }
      ),
      lineDisruptionByMode: build.query<
        LineDisruptionByModeApiResponse,
        LineDisruptionByModeApiArg
      >({
        query: (queryArg) => ({
          url: `/Line/Mode/${queryArg.modes}/Disruption`,
        }),
        providesTags: ["Line"],
      }),
      lineRouteByMode: build.query<
        LineRouteByModeApiResponse,
        LineRouteByModeApiArg
      >({
        query: (queryArg) => ({
          url: `/Line/Mode/${queryArg.modes}/Route`,
          params: { serviceTypes: queryArg.serviceTypes },
        }),
        providesTags: ["Line"],
      }),
      lineStatusByMode: build.query<
        LineStatusByModeApiResponse,
        LineStatusByModeApiArg
      >({
        query: (queryArg) => ({
          url: `/Line/Mode/${queryArg.modes}/Status`,
          params: {
            detail: queryArg.detail,
            severityLevel: queryArg.severityLevel,
          },
        }),
        providesTags: ["Line"],
      }),
      lineRoute: build.query<LineRouteApiResponse, LineRouteApiArg>({
        query: (queryArg) => ({
          url: `/Line/Route`,
          params: { serviceTypes: queryArg.serviceTypes },
        }),
        providesTags: ["Line"],
      }),
      lineSearch: build.query<LineSearchApiResponse, LineSearchApiArg>({
        query: (queryArg) => ({
          url: `/Line/Search/${queryArg.query}`,
          params: {
            modes: queryArg.modes,
            serviceTypes: queryArg.serviceTypes,
          },
        }),
        providesTags: ["Line"],
      }),
      lineStatusBySeverity: build.query<
        LineStatusBySeverityApiResponse,
        LineStatusBySeverityApiArg
      >({
        query: (queryArg) => ({ url: `/Line/Status/${queryArg.severity}` }),
        providesTags: ["Line"],
      }),
      lineGet: build.query<LineGetApiResponse, LineGetApiArg>({
        query: (queryArg) => ({ url: `/Line/${queryArg.ids}` }),
        providesTags: ["Line"],
      }),
      lineArrivals: build.query<LineArrivalsApiResponse, LineArrivalsApiArg>({
        query: (queryArg) => ({
          url: `/Line/${queryArg.ids}/Arrivals/${queryArg.stopPointId}`,
          params: {
            direction: queryArg.direction,
            destinationStationId: queryArg.destinationStationId,
          },
        }),
        providesTags: ["Line"],
      }),
      lineDisruption: build.query<
        LineDisruptionApiResponse,
        LineDisruptionApiArg
      >({
        query: (queryArg) => ({ url: `/Line/${queryArg.ids}/Disruption` }),
        providesTags: ["Line"],
      }),
      lineLineRoutesByIds: build.query<
        LineLineRoutesByIdsApiResponse,
        LineLineRoutesByIdsApiArg
      >({
        query: (queryArg) => ({
          url: `/Line/${queryArg.ids}/Route`,
          params: { serviceTypes: queryArg.serviceTypes },
        }),
        providesTags: ["Line"],
      }),
      lineStatusByIds: build.query<
        LineStatusByIdsApiResponse,
        LineStatusByIdsApiArg
      >({
        query: (queryArg) => ({
          url: `/Line/${queryArg.ids}/Status`,
          params: { detail: queryArg.detail },
        }),
        providesTags: ["Line"],
      }),
      lineStatus: build.query<LineStatusApiResponse, LineStatusApiArg>({
        query: (queryArg) => ({
          url: `/Line/${queryArg.ids}/Status/${queryArg.startDate}/to/${queryArg.endDate}`,
          params: {
            detail: queryArg.detail,
            "dateRange.startDate": queryArg["dateRange.startDate"],
            "dateRange.endDate": queryArg["dateRange.endDate"],
          },
        }),
        providesTags: ["Line"],
      }),
      lineRouteSequence: build.query<
        LineRouteSequenceApiResponse,
        LineRouteSequenceApiArg
      >({
        query: (queryArg) => ({
          url: `/Line/${queryArg.id}/Route/Sequence/${queryArg.direction}`,
          params: {
            serviceTypes: queryArg.serviceTypes,
            excludeCrowding: queryArg.excludeCrowding,
          },
        }),
        providesTags: ["Line"],
      }),
      lineStopPoints: build.query<
        LineStopPointsApiResponse,
        LineStopPointsApiArg
      >({
        query: (queryArg) => ({
          url: `/Line/${queryArg.id}/StopPoints`,
          params: {
            tflOperatedNationalRailStationsOnly:
              queryArg.tflOperatedNationalRailStationsOnly,
          },
        }),
        providesTags: ["Line"],
      }),
      lineTimetable: build.query<LineTimetableApiResponse, LineTimetableApiArg>(
        {
          query: (queryArg) => ({
            url: `/Line/${queryArg.id}/Timetable/${queryArg.fromStopPointId}`,
          }),
          providesTags: ["Line"],
        }
      ),
      lineTimetableTo: build.query<
        LineTimetableToApiResponse,
        LineTimetableToApiArg
      >({
        query: (queryArg) => ({
          url: `/Line/${queryArg.id}/Timetable/${queryArg.fromStopPointId}/to/${queryArg.toStopPointId}`,
        }),
        providesTags: ["Line"],
      }),
      modeGetActiveServiceTypes: build.query<
        ModeGetActiveServiceTypesApiResponse,
        ModeGetActiveServiceTypesApiArg
      >({
        query: () => ({ url: `/Mode/ActiveServiceTypes` }),
        providesTags: ["Mode"],
      }),
      modeArrivals: build.query<ModeArrivalsApiResponse, ModeArrivalsApiArg>({
        query: (queryArg) => ({
          url: `/Mode/${queryArg.mode}/Arrivals`,
          params: { count: queryArg.count },
        }),
        providesTags: ["Mode"],
      }),
      occupancyGetBikePointsOccupancies: build.query<
        OccupancyGetBikePointsOccupanciesApiResponse,
        OccupancyGetBikePointsOccupanciesApiArg
      >({
        query: (queryArg) => ({ url: `/Occupancy/BikePoints/${queryArg.ids}` }),
        providesTags: ["Occupancy"],
      }),
      occupancyGet: build.query<OccupancyGetApiResponse, OccupancyGetApiArg>({
        query: () => ({ url: `/Occupancy/CarPark` }),
        providesTags: ["Occupancy"],
      }),
      occupancyGetIDs: build.query<
        OccupancyGetIDsApiResponse,
        OccupancyGetIDsApiArg
      >({
        query: (queryArg) => ({ url: `/Occupancy/CarPark/${queryArg.id}` }),
        providesTags: ["Occupancy"],
      }),
      occupancyGetAllChargeConnectorStatus: build.query<
        OccupancyGetAllChargeConnectorStatusApiResponse,
        OccupancyGetAllChargeConnectorStatusApiArg
      >({
        query: () => ({ url: `/Occupancy/ChargeConnector` }),
        providesTags: ["Occupancy"],
      }),
      occupancyGetChargeConnectorStatus: build.query<
        OccupancyGetChargeConnectorStatusApiResponse,
        OccupancyGetChargeConnectorStatusApiArg
      >({
        query: (queryArg) => ({
          url: `/Occupancy/ChargeConnector/${queryArg.ids}`,
        }),
        providesTags: ["Occupancy"],
      }),
      placeGetByGeo: build.query<PlaceGetByGeoApiResponse, PlaceGetByGeoApiArg>(
        {
          query: (queryArg) => ({
            url: `/Place`,
            params: {
              radius: queryArg.radius,
              categories: queryArg.categories,
              includeChildren: queryArg.includeChildren,
              type: queryArg["type"],
              activeOnly: queryArg.activeOnly,
              numberOfPlacesToReturn: queryArg.numberOfPlacesToReturn,
              "placeGeo.swLat": queryArg["placeGeo.swLat"],
              "placeGeo.swLon": queryArg["placeGeo.swLon"],
              "placeGeo.neLat": queryArg["placeGeo.neLat"],
              "placeGeo.neLon": queryArg["placeGeo.neLon"],
              "placeGeo.lat": queryArg["placeGeo.lat"],
              "placeGeo.lon": queryArg["placeGeo.lon"],
            },
          }),
          providesTags: ["Place"],
        }
      ),
      placeGetStreetsByPostCode: build.query<
        PlaceGetStreetsByPostCodeApiResponse,
        PlaceGetStreetsByPostCodeApiArg
      >({
        query: (queryArg) => ({
          url: `/Place/Address/Streets/${queryArg.postcode}`,
          params: {
            "postcodeInput.postcode": queryArg["postcodeInput.postcode"],
          },
        }),
        providesTags: ["Place"],
      }),
      placeMetaCategories: build.query<
        PlaceMetaCategoriesApiResponse,
        PlaceMetaCategoriesApiArg
      >({
        query: () => ({ url: `/Place/Meta/Categories` }),
        providesTags: ["Place"],
      }),
      placeMetaPlaceTypes: build.query<
        PlaceMetaPlaceTypesApiResponse,
        PlaceMetaPlaceTypesApiArg
      >({
        query: () => ({ url: `/Place/Meta/PlaceTypes` }),
        providesTags: ["Place"],
      }),
      placeSearch: build.query<PlaceSearchApiResponse, PlaceSearchApiArg>({
        query: (queryArg) => ({
          url: `/Place/Search`,
          params: { name: queryArg.name, types: queryArg.types },
        }),
        providesTags: ["Place"],
      }),
      placeGetByType: build.query<
        PlaceGetByTypeApiResponse,
        PlaceGetByTypeApiArg
      >({
        query: (queryArg) => ({
          url: `/Place/Type/${queryArg.types}`,
          params: { activeOnly: queryArg.activeOnly },
        }),
        providesTags: ["Place"],
      }),
      placeGet: build.query<PlaceGetApiResponse, PlaceGetApiArg>({
        query: (queryArg) => ({
          url: `/Place/${queryArg.id}`,
          params: { includeChildren: queryArg.includeChildren },
        }),
        providesTags: ["Place"],
      }),
      placeGetAt: build.query<PlaceGetAtApiResponse, PlaceGetAtApiArg>({
        query: (queryArg) => ({
          url: `/Place/${queryArg["type"]}/At/${queryArg.lat}/${queryArg.lon}`,
          params: {
            "location.lat": queryArg["location.lat"],
            "location.lon": queryArg["location.lon"],
          },
        }),
        providesTags: ["Place"],
      }),
      placeGetOverlay: build.query<
        PlaceGetOverlayApiResponse,
        PlaceGetOverlayApiArg
      >({
        query: (queryArg) => ({
          url: `/Place/${queryArg["type"]}/overlay/${queryArg.z}/${queryArg.lat}/${queryArg.lon}/${queryArg.width}/${queryArg.height}`,
          params: {
            "location.lat": queryArg["location.lat"],
            "location.lon": queryArg["location.lon"],
          },
        }),
        providesTags: ["Place"],
      }),
      roadGet: build.query<RoadGetApiResponse, RoadGetApiArg>({
        query: () => ({ url: `/Road` }),
        providesTags: ["Road"],
      }),
      roadMetaCategories: build.query<
        RoadMetaCategoriesApiResponse,
        RoadMetaCategoriesApiArg
      >({
        query: () => ({ url: `/Road/Meta/Categories` }),
        providesTags: ["Road"],
      }),
      roadMetaSeverities: build.query<
        RoadMetaSeveritiesApiResponse,
        RoadMetaSeveritiesApiArg
      >({
        query: () => ({ url: `/Road/Meta/Severities` }),
        providesTags: ["Road"],
      }),
      roadDisruptionById: build.query<
        RoadDisruptionByIdApiResponse,
        RoadDisruptionByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/Road/all/Disruption/${queryArg.disruptionIds}`,
          params: { stripContent: queryArg.stripContent },
        }),
        providesTags: ["Road"],
      }),
      roadDisruptedStreets: build.query<
        RoadDisruptedStreetsApiResponse,
        RoadDisruptedStreetsApiArg
      >({
        query: (queryArg) => ({
          url: `/Road/all/Street/Disruption`,
          params: { startDate: queryArg.startDate, endDate: queryArg.endDate },
        }),
        providesTags: ["Road"],
      }),
      roadGetIDs: build.query<RoadGetIDsApiResponse, RoadGetIDsApiArg>({
        query: (queryArg) => ({ url: `/Road/${queryArg.ids}` }),
        providesTags: ["Road"],
      }),
      roadDisruption: build.query<
        RoadDisruptionApiResponse,
        RoadDisruptionApiArg
      >({
        query: (queryArg) => ({
          url: `/Road/${queryArg.ids}/Disruption`,
          params: {
            stripContent: queryArg.stripContent,
            severities: queryArg.severities,
            categories: queryArg.categories,
            closures: queryArg.closures,
          },
        }),
        providesTags: ["Road"],
      }),
      roadStatus: build.query<RoadStatusApiResponse, RoadStatusApiArg>({
        query: (queryArg) => ({
          url: `/Road/${queryArg.ids}/Status`,
          params: {
            "dateRangeNullable.startDate":
              queryArg["dateRangeNullable.startDate"],
            "dateRangeNullable.endDate": queryArg["dateRangeNullable.endDate"],
          },
        }),
        providesTags: ["Road"],
      }),
      searchGet: build.query<SearchGetApiResponse, SearchGetApiArg>({
        query: (queryArg) => ({
          url: `/Search`,
          params: { query: queryArg.query },
        }),
        providesTags: ["Search"],
      }),
      searchBusSchedules: build.query<
        SearchBusSchedulesApiResponse,
        SearchBusSchedulesApiArg
      >({
        query: (queryArg) => ({
          url: `/Search/BusSchedules`,
          params: { query: queryArg.query },
        }),
        providesTags: ["Search"],
      }),
      searchMetaCategories: build.query<
        SearchMetaCategoriesApiResponse,
        SearchMetaCategoriesApiArg
      >({
        query: () => ({ url: `/Search/Meta/Categories` }),
        providesTags: ["Search"],
      }),
      searchMetaSearchProviders: build.query<
        SearchMetaSearchProvidersApiResponse,
        SearchMetaSearchProvidersApiArg
      >({
        query: () => ({ url: `/Search/Meta/SearchProviders` }),
        providesTags: ["Search"],
      }),
      searchMetaSorts: build.query<
        SearchMetaSortsApiResponse,
        SearchMetaSortsApiArg
      >({
        query: () => ({ url: `/Search/Meta/Sorts` }),
        providesTags: ["Search"],
      }),
      stopPointGetByGeoPoint: build.query<
        StopPointGetByGeoPointApiResponse,
        StopPointGetByGeoPointApiArg
      >({
        query: (queryArg) => ({
          url: `/StopPoint`,
          params: {
            stopTypes: queryArg.stopTypes,
            radius: queryArg.radius,
            useStopPointHierarchy: queryArg.useStopPointHierarchy,
            modes: queryArg.modes,
            categories: queryArg.categories,
            returnLines: queryArg.returnLines,
            "location.lat": queryArg["location.lat"],
            "location.lon": queryArg["location.lon"],
          },
        }),
        providesTags: ["StopPoint"],
      }),
      stopPointMetaCategories: build.query<
        StopPointMetaCategoriesApiResponse,
        StopPointMetaCategoriesApiArg
      >({
        query: () => ({ url: `/StopPoint/Meta/Categories` }),
        providesTags: ["StopPoint"],
      }),
      stopPointMetaModes: build.query<
        StopPointMetaModesApiResponse,
        StopPointMetaModesApiArg
      >({
        query: () => ({ url: `/StopPoint/Meta/Modes` }),
        providesTags: ["StopPoint"],
      }),
      stopPointMetaStopTypes: build.query<
        StopPointMetaStopTypesApiResponse,
        StopPointMetaStopTypesApiArg
      >({
        query: () => ({ url: `/StopPoint/Meta/StopTypes` }),
        providesTags: ["StopPoint"],
      }),
      stopPointGetByMode: build.query<
        StopPointGetByModeApiResponse,
        StopPointGetByModeApiArg
      >({
        query: (queryArg) => ({
          url: `/StopPoint/Mode/${queryArg.modes}`,
          params: { page: queryArg.page },
        }),
        providesTags: ["StopPoint"],
      }),
      stopPointDisruptionByMode: build.query<
        StopPointDisruptionByModeApiResponse,
        StopPointDisruptionByModeApiArg
      >({
        query: (queryArg) => ({
          url: `/StopPoint/Mode/${queryArg.modes}/Disruption`,
          params: {
            includeRouteBlockedStops: queryArg.includeRouteBlockedStops,
          },
        }),
        providesTags: ["StopPoint"],
      }),
      stopPointSearch: build.query<
        StopPointSearchApiResponse,
        StopPointSearchApiArg
      >({
        query: (queryArg) => ({
          url: `/StopPoint/Search`,
          params: {
            query: queryArg.query,
            modes: queryArg.modes,
            faresOnly: queryArg.faresOnly,
            maxResults: queryArg.maxResults,
            lines: queryArg.lines,
            includeHubs: queryArg.includeHubs,
            tflOperatedNationalRailStationsOnly:
              queryArg.tflOperatedNationalRailStationsOnly,
          },
        }),
        providesTags: ["StopPoint"],
      }),
      stopPointSearchQuery: build.query<
        StopPointSearchQueryApiResponse,
        StopPointSearchQueryApiArg
      >({
        query: (queryArg) => ({
          url: `/StopPoint/Search/${queryArg.query}`,
          params: {
            modes: queryArg.modes,
            faresOnly: queryArg.faresOnly,
            maxResults: queryArg.maxResults,
            lines: queryArg.lines,
            includeHubs: queryArg.includeHubs,
            tflOperatedNationalRailStationsOnly:
              queryArg.tflOperatedNationalRailStationsOnly,
          },
        }),
        providesTags: ["StopPoint"],
      }),
      stopPointGetServiceTypes: build.query<
        StopPointGetServiceTypesApiResponse,
        StopPointGetServiceTypesApiArg
      >({
        query: (queryArg) => ({
          url: `/StopPoint/ServiceTypes`,
          params: {
            id: queryArg.id,
            lineIds: queryArg.lineIds,
            modes: queryArg.modes,
          },
        }),
        providesTags: ["StopPoint"],
      }),
      stopPointGetBySms: build.query<
        StopPointGetBySmsApiResponse,
        StopPointGetBySmsApiArg
      >({
        query: (queryArg) => ({
          url: `/StopPoint/Sms/${queryArg.id}`,
          params: { output: queryArg.output },
        }),
        providesTags: ["StopPoint"],
      }),
      stopPointGetByType: build.query<
        StopPointGetByTypeApiResponse,
        StopPointGetByTypeApiArg
      >({
        query: (queryArg) => ({ url: `/StopPoint/Type/${queryArg.types}` }),
        providesTags: ["StopPoint"],
      }),
      stopPointGetByTypeWithPagination: build.query<
        StopPointGetByTypeWithPaginationApiResponse,
        StopPointGetByTypeWithPaginationApiArg
      >({
        query: (queryArg) => ({
          url: `/StopPoint/Type/${queryArg.types}/page/${queryArg.page}`,
        }),
        providesTags: ["StopPoint"],
      }),
      stopPointGetIDs: build.query<
        StopPointGetIDsApiResponse,
        StopPointGetIDsApiArg
      >({
        query: (queryArg) => ({
          url: `/StopPoint/${queryArg.ids}`,
          params: { includeCrowdingData: queryArg.includeCrowdingData },
        }),
        providesTags: ["StopPoint"],
      }),
      stopPointDisruption: build.query<
        StopPointDisruptionApiResponse,
        StopPointDisruptionApiArg
      >({
        query: (queryArg) => ({
          url: `/StopPoint/${queryArg.ids}/Disruption`,
          params: {
            getFamily: queryArg.getFamily,
            includeRouteBlockedStops: queryArg.includeRouteBlockedStops,
            flattenResponse: queryArg.flattenResponse,
          },
        }),
        providesTags: ["StopPoint"],
      }),
      stopPointArrivalDepartures: build.query<
        StopPointArrivalDeparturesApiResponse,
        StopPointArrivalDeparturesApiArg
      >({
        query: (queryArg) => ({
          url: `/StopPoint/${queryArg.id}/ArrivalDepartures`,
          params: { lineIds: queryArg.lineIds },
        }),
        providesTags: ["StopPoint"],
      }),
      stopPointArrivals: build.query<
        StopPointArrivalsApiResponse,
        StopPointArrivalsApiArg
      >({
        query: (queryArg) => ({ url: `/StopPoint/${queryArg.id}/Arrivals` }),
        providesTags: ["StopPoint"],
      }),
      stopPointReachableFrom: build.query<
        StopPointReachableFromApiResponse,
        StopPointReachableFromApiArg
      >({
        query: (queryArg) => ({
          url: `/StopPoint/${queryArg.id}/CanReachOnLine/${queryArg.lineId}`,
          params: { serviceTypes: queryArg.serviceTypes },
        }),
        providesTags: ["StopPoint"],
      }),
      stopPointCrowding: build.query<
        StopPointCrowdingApiResponse,
        StopPointCrowdingApiArg
      >({
        query: (queryArg) => ({
          url: `/StopPoint/${queryArg.id}/Crowding/${queryArg.line}`,
          params: { direction: queryArg.direction },
        }),
        providesTags: ["StopPoint"],
      }),
      stopPointDirection: build.query<
        StopPointDirectionApiResponse,
        StopPointDirectionApiArg
      >({
        query: (queryArg) => ({
          url: `/StopPoint/${queryArg.id}/DirectionTo/${queryArg.toStopPointId}`,
          params: { lineId: queryArg.lineId },
        }),
        providesTags: ["StopPoint"],
      }),
      stopPointRoute: build.query<
        StopPointRouteApiResponse,
        StopPointRouteApiArg
      >({
        query: (queryArg) => ({
          url: `/StopPoint/${queryArg.id}/Route`,
          params: { serviceTypes: queryArg.serviceTypes },
        }),
        providesTags: ["StopPoint"],
      }),
      stopPointGet: build.query<StopPointGetApiResponse, StopPointGetApiArg>({
        query: (queryArg) => ({
          url: `/StopPoint/${queryArg.id}/placeTypes`,
          params: { placeTypes: queryArg.placeTypes },
        }),
        providesTags: ["StopPoint"],
      }),
      stopPointGetCarParksById: build.query<
        StopPointGetCarParksByIdApiResponse,
        StopPointGetCarParksByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/StopPoint/${queryArg.stopPointId}/CarParks`,
        }),
        providesTags: ["StopPoint"],
      }),
      stopPointGetTaxiRanksByIds: build.query<
        StopPointGetTaxiRanksByIdsApiResponse,
        StopPointGetTaxiRanksByIdsApiArg
      >({
        query: (queryArg) => ({
          url: `/StopPoint/${queryArg.stopPointId}/TaxiRanks`,
        }),
        providesTags: ["StopPoint"],
      }),
      travelTimeGetCompareOverlay: build.query<
        TravelTimeGetCompareOverlayApiResponse,
        TravelTimeGetCompareOverlayApiArg
      >({
        query: (queryArg) => ({
          url: `/TravelTimes/compareOverlay/${queryArg.z}/mapcenter/${queryArg.mapCenterLat}/${queryArg.mapCenterLon}/pinlocation/${queryArg.pinLat}/${queryArg.pinLon}/dimensions/${queryArg.width}/${queryArg.height}`,
          params: {
            scenarioTitle: queryArg.scenarioTitle,
            timeOfDayId: queryArg.timeOfDayId,
            modeId: queryArg.modeId,
            direction: queryArg.direction,
            travelTimeInterval: queryArg.travelTimeInterval,
            compareType: queryArg.compareType,
            compareValue: queryArg.compareValue,
          },
        }),
        providesTags: ["TravelTime"],
      }),
      travelTimeGetOverlay: build.query<
        TravelTimeGetOverlayApiResponse,
        TravelTimeGetOverlayApiArg
      >({
        query: (queryArg) => ({
          url: `/TravelTimes/overlay/${queryArg.z}/mapcenter/${queryArg.mapCenterLat}/${queryArg.mapCenterLon}/pinlocation/${queryArg.pinLat}/${queryArg.pinLon}/dimensions/${queryArg.width}/${queryArg.height}`,
          params: {
            scenarioTitle: queryArg.scenarioTitle,
            timeOfDayId: queryArg.timeOfDayId,
            modeId: queryArg.modeId,
            direction: queryArg.direction,
            travelTimeInterval: queryArg.travelTimeInterval,
          },
        }),
        providesTags: ["TravelTime"],
      }),
      vehicleGet: build.query<VehicleGetApiResponse, VehicleGetApiArg>({
        query: (queryArg) => ({ url: `/Vehicle/${queryArg.ids}/Arrivals` }),
        providesTags: ["Vehicle"],
      }),
    }),
    overrideExisting: false,
  });
export { injectedRtkApi as api };
export type AccidentStatsGetApiResponse =
  /** status 200 OK */ TflApiPresentationEntitiesAccidentStatsAccidentDetail[];
export type AccidentStatsGetApiArg = {
  /** The year for which to filter the accidents on. */
  year: number;
};
export type AirQualityGetApiResponse = /** status 200 OK */ SystemObject;
export type AirQualityGetApiArg = void;
export type BikePointGetAllApiResponse =
  /** status 200 OK */ TflApiPresentationEntitiesPlace[];
export type BikePointGetAllApiArg = void;
export type BikePointSearchApiResponse =
  /** status 200 OK */ TflApiPresentationEntitiesPlace[];
export type BikePointSearchApiArg = {
  /** The search term e.g. "St. James" */
  query: string;
};
export type BikePointGetApiResponse =
  /** status 200 OK */ TflApiPresentationEntitiesPlace;
export type BikePointGetApiArg = {
  /** A bike point id (a list of ids can be obtained from the above BikePoint call) */
  id: string;
};
export type CabwiseGetApiResponse = /** status 200 OK */ SystemObject;
export type CabwiseGetApiArg = {
  /** Latitude */
  lat: number;
  /** Longitude */
  lon: number;
  /** Operator Type e.g Minicab, Executive, Limousine */
  optype?: string;
  /** Wheelchair accessible */
  wc?: string;
  /** The radius of the bounding circle in metres */
  radius?: number;
  /** Trading name of operating company */
  name?: string;
  /** An optional parameter to limit the number of results return. Default and maximum is 20. */
  maxResults?: number;
  /** Legacy Format */
  legacyFormat?: boolean;
  /** Force Xml */
  forceXml?: boolean;
  /** Twenty Four Seven Only */
  twentyFourSevenOnly?: boolean;
};
export type JourneyJourneyResultsApiResponse =
  /** status 200 OK */ TflApiPresentationEntitiesJourneyPlannerItineraryResult;
export type JourneyJourneyResultsApiArg = {
  /** Origin of the journey. Can be WGS84 coordinates expressed as "lat,long", a UK postcode, a Naptan (StopPoint) id, an ICS StopId, or a free-text string (will cause disambiguation unless it exactly matches a point of interest name). */
  from: string;
  /** Destination of the journey. Can be WGS84 coordinates expressed as "lat,long", a UK postcode, a Naptan (StopPoint) id, an ICS StopId, or a free-text string (will cause disambiguation unless it exactly matches a point of interest name). */
  to: string;
  /** Travel through point on the journey. Can be WGS84 coordinates expressed as "lat,long", a UK postcode, a Naptan (StopPoint) id, an ICS StopId, or a free-text string (will cause disambiguation unless it exactly matches a point of interest name). */
  via?: string;
  /** Does the journey cover stops outside London? eg. "nationalSearch=true" */
  nationalSearch?: boolean;
  /** The date must be in yyyyMMdd format */
  date?: string;
  /** The time must be in HHmm format */
  time?: string;
  /** Does the time given relate to arrival or leaving time? Possible options: "departing" | "arriving" */
  timeIs?: "Arriving" | "Departing";
  /** The journey preference eg possible options: "leastinterchange" | "leasttime" | "leastwalking" */
  journeyPreference?: "LeastInterchange" | "LeastTime" | "LeastWalking";
  /** The mode must be a comma separated list of modes. eg possible options: "public-bus,overground,train,tube,coach,dlr,cablecar,tram,river,walking,cycle" */
  mode?: string[];
  /** The accessibility preference must be a comma separated list eg. "noSolidStairs,noEscalators,noElevators,stepFreeToVehicle,stepFreeToPlatform" */
  accessibilityPreference?: (
    | "NoRequirements"
    | "NoSolidStairs"
    | "NoEscalators"
    | "NoElevators"
    | "StepFreeToVehicle"
    | "StepFreeToPlatform"
  )[];
  /** An optional name to associate with the origin of the journey in the results. */
  fromName?: string;
  /** An optional name to associate with the destination of the journey in the results. */
  toName?: string;
  /** An optional name to associate with the via point of the journey in the results. */
  viaName?: string;
  /** The max walking time in minutes for transfer eg. "120" */
  maxTransferMinutes?: string;
  /** The max walking time in minutes for journeys eg. "120" */
  maxWalkingMinutes?: string;
  /** The walking speed. eg possible options: "slow" | "average" | "fast". */
  walkingSpeed?: "Slow" | "Average" | "Fast";
  /** The cycle preference. eg possible options: "allTheWay" | "leaveAtStation" | "takeOnTransport" | "cycleHire" */
  cyclePreference?:
    | "None"
    | "LeaveAtStation"
    | "TakeOnTransport"
    | "AllTheWay"
    | "CycleHire";
  /** Time adjustment command. eg possible options: "TripFirst" | "TripLast" */
  adjustment?: string;
  /** A comma separated list of cycling proficiency levels. eg possible options: "easy,moderate,fast" */
  bikeProficiency?: ("Easy" | "Moderate" | "Fast")[];
  /** Option to determine whether to return alternative cycling journey */
  alternativeCycle?: boolean;
  /** Option to determine whether to return alternative walking journey */
  alternativeWalking?: boolean;
  /** Flag to determine whether certain text (e.g. walking instructions) should be output with HTML tags or not. */
  applyHtmlMarkup?: boolean;
  /** A boolean to indicate whether or not to return 3 public transport journeys, a bus journey, a cycle hire journey, a personal cycle journey and a walking journey */
  useMultiModalCall?: boolean;
  /** A boolean to indicate whether to optimize journeys using walking */
  walkingOptimization?: boolean;
  /** A boolean to indicate whether to return one or more taxi journeys. Note, setting this to true will override "useMultiModalCall". */
  taxiOnlyTrip?: boolean;
  /** A boolean to indicate whether public transport routes should include directions between platforms and station entrances. */
  routeBetweenEntrances?: boolean;
  /** A boolean to indicate if we want to receive real time live arrivals data where available. */
  useRealTimeLiveArrivals?: boolean;
  /** A boolean to make Journey Planner calculate journeys in one temporal direction only. In other words, only calculate journeys after the 'depart' time, or before the 'arrive' time. By default, the Journey Planner engine (EFA) calculates journeys in both temporal directions. */
  calcOneDirection?: boolean;
  /** A boolean to make Journey Planner return alternative routes. Alternative routes are calculated by removing one or more lines included in the fastest route and re-calculating. By default, these journeys will not be returned. */
  includeAlternativeRoutes?: boolean;
  /** An optional integer to indicate what multi modal scenario we want to use. */
  overrideMultiModalScenario?: number;
};
export type JourneyMetaApiResponse =
  /** status 200 OK */ TflApiPresentationEntitiesMode[];
export type JourneyMetaApiArg = void;
export type LineMetaDisruptionCategoriesApiResponse =
  /** status 200 OK */ string[];
export type LineMetaDisruptionCategoriesApiArg = void;
export type LineMetaModesApiResponse =
  /** status 200 OK */ TflApiPresentationEntitiesMode[];
export type LineMetaModesApiArg = void;
export type LineMetaServiceTypesApiResponse = /** status 200 OK */ string[];
export type LineMetaServiceTypesApiArg = void;
export type LineMetaSeverityApiResponse =
  /** status 200 OK */ TflApiPresentationEntitiesStatusSeverity[];
export type LineMetaSeverityApiArg = void;
export type LineGetByModeApiResponse =
  /** status 200 OK */ TflApiPresentationEntitiesLine[];
export type LineGetByModeApiArg = {
  /** A comma-separated list of modes e.g. tube,dlr */
  modes: string[];
};
export type LineDisruptionByModeApiResponse =
  /** status 200 OK */ TflApiPresentationEntitiesDisruption[];
export type LineDisruptionByModeApiArg = {
  /** A comma-separated list of modes e.g. tube,dlr */
  modes: string[];
};
export type LineRouteByModeApiResponse =
  /** status 200 OK */ TflApiPresentationEntitiesLine[];
export type LineRouteByModeApiArg = {
  /** A comma-separated list of modes e.g. tube,dlr */
  modes: string[];
  /** A comma seperated list of service types to filter on. Supported values: Regular, Night. Defaulted to 'Regular' if not specified */
  serviceTypes?: ("Regular" | "Night")[];
};
export type LineStatusByModeApiResponse =
  /** status 200 OK */ TflApiPresentationEntitiesLine[];
export type LineStatusByModeApiArg = {
  /** A comma-separated list of modes to filter by. e.g. tube,dlr */
  modes: string[];
  /** Include details of the disruptions that are causing the line status including the affected stops and routes */
  detail?: boolean;
  /** If specified, ensures that only those line status(es) are returned within the lines that have disruptions with the matching severity level. */
  severityLevel?: string;
};
export type LineRouteApiResponse =
  /** status 200 OK */ TflApiPresentationEntitiesLine[];
export type LineRouteApiArg = {
  /** A comma seperated list of service types to filter on. Supported values: Regular, Night. Defaulted to 'Regular' if not specified */
  serviceTypes?: ("Regular" | "Night")[];
};
export type LineSearchApiResponse =
  /** status 200 OK */ TflApiPresentationEntitiesRouteSearchResponse;
export type LineSearchApiArg = {
  /** Search term e.g victoria */
  query: string;
  /** Optionally filter by the specified modes */
  modes?: string[];
  /** A comma seperated list of service types to filter on. Supported values: Regular, Night. Defaulted to 'Regular' if not specified */
  serviceTypes?: ("Regular" | "Night")[];
};
export type LineStatusBySeverityApiResponse =
  /** status 200 OK */ TflApiPresentationEntitiesLine[];
export type LineStatusBySeverityApiArg = {
  /** The level of severity (eg: a number from 0 to 14) */
  severity: number;
};
export type LineGetApiResponse =
  /** status 200 OK */ TflApiPresentationEntitiesLine[];
export type LineGetApiArg = {
  /** A comma-separated list of line ids e.g. victoria,circle,N133. Max. approx. 20 ids. */
  ids: string[];
};
export type LineArrivalsApiResponse =
  /** status 200 OK */ TflApiPresentationEntitiesPrediction[];
export type LineArrivalsApiArg = {
  /** A comma-separated list of line ids e.g. victoria,circle,N133. Max. approx. 20 ids. */
  ids: string[];
  /** Optional. Id of stop to get arrival predictions for (station naptan code e.g. 940GZZLUASL, you can use /StopPoint/Search/{query} endpoint to find a stop point id from a station name) */
  stopPointId: string;
  /** Optional. The direction of travel. Can be inbound or outbound or all. If left blank, and destinationStopId is set, will default to all */
  direction?: "inbound" | "outbound" | "all";
  /** Optional. Id of destination stop */
  destinationStationId?: string;
};
export type LineDisruptionApiResponse =
  /** status 200 OK */ TflApiPresentationEntitiesDisruption[];
export type LineDisruptionApiArg = {
  /** A comma-separated list of line ids e.g. victoria,circle,N133. Max. approx. 20 ids. */
  ids: string[];
};
export type LineLineRoutesByIdsApiResponse =
  /** status 200 OK */ TflApiPresentationEntitiesLine[];
export type LineLineRoutesByIdsApiArg = {
  /** A comma-separated list of line ids e.g. victoria,circle,N133. Max. approx. 20 ids. */
  ids: string[];
  /** A comma seperated list of service types to filter on. Supported values: Regular, Night. Defaulted to 'Regular' if not specified */
  serviceTypes?: ("Regular" | "Night")[];
};
export type LineStatusByIdsApiResponse =
  /** status 200 OK */ TflApiPresentationEntitiesLine[];
export type LineStatusByIdsApiArg = {
  /** A comma-separated list of line ids e.g. victoria,circle,N133. Max. approx. 20 ids. */
  ids: string[];
  /** Include details of the disruptions that are causing the line status including the affected stops and routes */
  detail?: boolean;
};
export type LineStatusApiResponse =
  /** status 200 OK */ TflApiPresentationEntitiesLine[];
export type LineStatusApiArg = {
  /** A comma-separated list of line ids e.g. victoria,circle,N133. Max. approx. 20 ids. */
  ids: string[];
  /** Include details of the disruptions that are causing the line status including the affected stops and routes */
  detail?: boolean;
  startDate: string;
  endDate: string;
  "dateRange.startDate"?: string;
  "dateRange.endDate"?: string;
};
export type LineRouteSequenceApiResponse =
  /** status 200 OK */ TflApiPresentationEntitiesRouteSequence;
export type LineRouteSequenceApiArg = {
  /** A single line id e.g. victoria */
  id: string;
  /** The direction of travel. Can be inbound or outbound. */
  direction: "inbound" | "outbound" | "all";
  /** A comma seperated list of service types to filter on. Supported values: Regular, Night. Defaulted to 'Regular' if not specified */
  serviceTypes?: ("Regular" | "Night")[];
  /** That excludes crowding from line disruptions. Can be true or false. */
  excludeCrowding?: boolean;
};
export type LineStopPointsApiResponse =
  /** status 200 OK */ TflApiPresentationEntitiesStopPoint[];
export type LineStopPointsApiArg = {
  /** A single line id e.g. victoria */
  id: string;
  /** If the national-rail line is requested, this flag will filter the national rail stations so that only those operated by TfL are returned */
  tflOperatedNationalRailStationsOnly?: boolean;
};
export type LineTimetableApiResponse =
  /** status 200 OK */ TflApiPresentationEntitiesTimetableResponse;
export type LineTimetableApiArg = {
  /** The originating station's stop point id (station naptan code e.g. 940GZZLUASL, you can use /StopPoint/Search/{query} endpoint to find a stop point id from a station name) */
  fromStopPointId: string;
  /** A single line id e.g. victoria */
  id: string;
};
export type LineTimetableToApiResponse =
  /** status 200 OK */ TflApiPresentationEntitiesTimetableResponse;
export type LineTimetableToApiArg = {
  /** The originating station's stop point id (station naptan code e.g. 940GZZLUASL, you can use /StopPoint/Search/{query} endpoint to find a stop point id from a station name) */
  fromStopPointId: string;
  /** A single line id e.g. victoria */
  id: string;
  /** The destination stations's Naptan code */
  toStopPointId: string;
};
export type ModeGetActiveServiceTypesApiResponse =
  /** status 200 OK */ TflApiPresentationEntitiesActiveServiceType[];
export type ModeGetActiveServiceTypesApiArg = void;
export type ModeArrivalsApiResponse =
  /** status 200 OK */ TflApiPresentationEntitiesPrediction[];
export type ModeArrivalsApiArg = {
  /** A mode name e.g. tube, dlr */
  mode: string;
  /** A number of arrivals to return for each stop, -1 to return all available. */
  count?: number;
};
export type OccupancyGetBikePointsOccupanciesApiResponse =
  /** status 200 OK */ TflApiPresentationEntitiesBikePointOccupancy[];
export type OccupancyGetBikePointsOccupanciesApiArg = {
  ids: string[];
};
export type OccupancyGetApiResponse =
  /** status 200 OK */ TflApiPresentationEntitiesCarParkOccupancy[];
export type OccupancyGetApiArg = void;
export type OccupancyGetIDsApiResponse =
  /** status 200 OK */ TflApiPresentationEntitiesCarParkOccupancy;
export type OccupancyGetIDsApiArg = {
  id: string;
};
export type OccupancyGetAllChargeConnectorStatusApiResponse =
  /** status 200 OK */ TflApiPresentationEntitiesChargeConnectorOccupancy[];
export type OccupancyGetAllChargeConnectorStatusApiArg = void;
export type OccupancyGetChargeConnectorStatusApiResponse =
  /** status 200 OK */ TflApiPresentationEntitiesChargeConnectorOccupancy[];
export type OccupancyGetChargeConnectorStatusApiArg = {
  ids: string[];
};
export type PlaceGetByGeoApiResponse =
  /** status 200 OK */ TflApiPresentationEntitiesStopPoint[];
export type PlaceGetByGeoApiArg = {
  /** The radius of the bounding circle in metres when only lat/lon are specified. */
  radius?: number;
  /** An optional list of comma separated property categories to return in the Place's property bag. If null or empty, all categories of property are returned. Pass the keyword "none" to return no properties (a valid list of categories can be obtained from the /Place/Meta/categories endpoint) */
  categories?: string[];
  /** Defaults to false. If true child places e.g. individual charging stations at a charge point while be included, otherwise just the URLs of any child places will be returned */
  includeChildren?: boolean;
  /** Place types to filter on, or null to return all types */
  type?: string[];
  /** An optional parameter to limit the results to active records only (Currently only the 'VariableMessageSign' place type is supported) */
  activeOnly?: boolean;
  /** If specified, limits the number of returned places equal to the given value */
  numberOfPlacesToReturn?: number;
  "placeGeo.swLat"?: number;
  "placeGeo.swLon"?: number;
  "placeGeo.neLat"?: number;
  "placeGeo.neLon"?: number;
  "placeGeo.lat"?: number;
  "placeGeo.lon"?: number;
};
export type PlaceGetStreetsByPostCodeApiResponse =
  /** status 200 OK */ SystemObject;
export type PlaceGetStreetsByPostCodeApiArg = {
  postcode: string;
  "postcodeInput.postcode"?: string;
};
export type PlaceMetaCategoriesApiResponse =
  /** status 200 OK */ TflApiPresentationEntitiesPlaceCategory[];
export type PlaceMetaCategoriesApiArg = void;
export type PlaceMetaPlaceTypesApiResponse =
  /** status 200 OK */ TflApiPresentationEntitiesPlaceCategory[];
export type PlaceMetaPlaceTypesApiArg = void;
export type PlaceSearchApiResponse =
  /** status 200 OK */ TflApiPresentationEntitiesPlace[];
export type PlaceSearchApiArg = {
  /** The name of the place, you can use the /Place/Types/{types} endpoint to get a list of places for a given type including their names. */
  name: string;
  /** A comma-separated list of the types to return. Max. approx 12 types. */
  types?: string[];
};
export type PlaceGetByTypeApiResponse =
  /** status 200 OK */ TflApiPresentationEntitiesPlace[];
export type PlaceGetByTypeApiArg = {
  /** A comma-separated list of the types to return. Max. approx 12 types.
                A valid list of place types can be obtained from the /Place/Meta/placeTypes endpoint. */
  types: string[];
  /** An optional parameter to limit the results to active records only (Currently only the 'VariableMessageSign' place type is supported) */
  activeOnly?: boolean;
};
export type PlaceGetApiResponse =
  /** status 200 OK */ TflApiPresentationEntitiesPlace[];
export type PlaceGetApiArg = {
  /** The id of the place, you can use the /Place/Types/{types} endpoint to get a list of places for a given type including their ids */
  id: string;
  /** Defaults to false. If true child places e.g. individual charging stations at a charge point while be included, otherwise just the URLs of any child places will be returned */
  includeChildren?: boolean;
};
export type PlaceGetAtApiResponse = /** status 200 OK */ SystemObject;
export type PlaceGetAtApiArg = {
  /** The place type (a valid list of place types can be obtained from the /Place/Meta/placeTypes endpoint) */
  type: string[];
  lat: string;
  lon: string;
  "location.lat": number;
  "location.lon": number;
};
export type PlaceGetOverlayApiResponse = /** status 200 OK */ SystemObject;
export type PlaceGetOverlayApiArg = {
  /** The zoom level */
  z: number;
  /** The place type (a valid list of place types can be obtained from the /Place/Meta/placeTypes endpoint) */
  type: string[];
  /** The width of the requested overlay. */
  width: number;
  /** The height of the requested overlay. */
  height: number;
  lat: string;
  lon: string;
  "location.lat": number;
  "location.lon": number;
};
export type RoadGetApiResponse =
  /** status 200 OK */ TflApiPresentationEntitiesRoadCorridor[];
export type RoadGetApiArg = void;
export type RoadMetaCategoriesApiResponse = /** status 200 OK */ string[];
export type RoadMetaCategoriesApiArg = void;
export type RoadMetaSeveritiesApiResponse =
  /** status 200 OK */ TflApiPresentationEntitiesStatusSeverity[];
export type RoadMetaSeveritiesApiArg = void;
export type RoadDisruptionByIdApiResponse =
  /** status 200 OK */ TflApiPresentationEntitiesRoadDisruption;
export type RoadDisruptionByIdApiArg = {
  /** Comma-separated list of disruption identifiers to filter by. */
  disruptionIds: string[];
  /** Optional, defaults to false. When true, removes every property/node except for id, point, severity, severityDescription, startDate, endDate, corridor details, location and comments. */
  stripContent?: boolean;
};
export type RoadDisruptedStreetsApiResponse = /** status 200 OK */ SystemObject;
export type RoadDisruptedStreetsApiArg = {
  /** Optional, the start time to filter on. */
  startDate: string;
  /** Optional, The end time to filter on. */
  endDate: string;
};
export type RoadGetIDsApiResponse =
  /** status 200 OK */ TflApiPresentationEntitiesRoadCorridor[];
export type RoadGetIDsApiArg = {
  /** Comma-separated list of road identifiers e.g. "A406, A2" (a full list of supported road identifiers can be found at the /Road/ endpoint) */
  ids: string[];
};
export type RoadDisruptionApiResponse =
  /** status 200 OK */ TflApiPresentationEntitiesRoadDisruption[];
export type RoadDisruptionApiArg = {
  /** Comma-separated list of road identifiers e.g. "A406, A2" use all for all to ignore id filter (a full list of supported road identifiers can be found at the /Road/ endpoint) */
  ids: string[];
  /** Optional, defaults to false. When true, removes every property/node except for id, point, severity, severityDescription, startDate, endDate, corridor details, location, comments and streets */
  stripContent?: boolean;
  /** an optional list of Severity names to filter on (a valid list of severities can be obtained from the /Road/Meta/severities endpoint) */
  severities?: string[];
  /** an optional list of category names to filter on (a valid list of categories can be obtained from the /Road/Meta/categories endpoint) */
  categories?: string[];
  /** Optional, defaults to true. When true, always includes disruptions that have road closures, regardless of the severity filter. When false, the severity filter works as normal. */
  closures?: boolean;
};
export type RoadStatusApiResponse =
  /** status 200 OK */ TflApiPresentationEntitiesRoadCorridor[];
export type RoadStatusApiArg = {
  /** Comma-separated list of road identifiers e.g. "A406, A2" or use "all" to ignore id filter (a full list of supported road identifiers can be found at the /Road/ endpoint) */
  ids: string[];
  "dateRangeNullable.startDate"?: string;
  "dateRangeNullable.endDate"?: string;
};
export type SearchGetApiResponse =
  /** status 200 OK */ TflApiPresentationEntitiesSearchResponse;
export type SearchGetApiArg = {
  /** The search query */
  query: string;
};
export type SearchBusSchedulesApiResponse =
  /** status 200 OK */ TflApiPresentationEntitiesSearchResponse;
export type SearchBusSchedulesApiArg = {
  /** The search query */
  query: string;
};
export type SearchMetaCategoriesApiResponse = /** status 200 OK */ string[];
export type SearchMetaCategoriesApiArg = void;
export type SearchMetaSearchProvidersApiResponse =
  /** status 200 OK */ string[];
export type SearchMetaSearchProvidersApiArg = void;
export type SearchMetaSortsApiResponse = /** status 200 OK */ string[];
export type SearchMetaSortsApiArg = void;
export type StopPointGetByGeoPointApiResponse =
  /** status 200 OK */ TflApiPresentationEntitiesStopPointsResponse;
export type StopPointGetByGeoPointApiArg = {
  /** a list of stopTypes that should be returned (a list of valid stop types can be obtained from the StopPoint/meta/stoptypes endpoint) */
  stopTypes: string[];
  /** the radius of the bounding circle in metres (default : 200) */
  radius?: number;
  /** Re-arrange the output into a parent/child hierarchy */
  useStopPointHierarchy?: boolean;
  /** the list of modes to search (comma separated mode names e.g. tube,dlr) */
  modes?: string[];
  /** an optional list of comma separated property categories to return in the StopPoint's property bag. If null or empty, all categories of property are returned. Pass the keyword "none" to return no properties (a valid list of categories can be obtained from the /StopPoint/Meta/categories endpoint) */
  categories?: string[];
  /** true to return the lines that each stop point serves as a nested resource */
  returnLines?: boolean;
  "location.lat": number;
  "location.lon": number;
};
export type StopPointMetaCategoriesApiResponse =
  /** status 200 OK */ TflApiPresentationEntitiesStopPointCategory[];
export type StopPointMetaCategoriesApiArg = void;
export type StopPointMetaModesApiResponse =
  /** status 200 OK */ TflApiPresentationEntitiesMode[];
export type StopPointMetaModesApiArg = void;
export type StopPointMetaStopTypesApiResponse = /** status 200 OK */ string[];
export type StopPointMetaStopTypesApiArg = void;
export type StopPointGetByModeApiResponse =
  /** status 200 OK */ TflApiPresentationEntitiesStopPointsResponse;
export type StopPointGetByModeApiArg = {
  /** A comma-seperated list of modes e.g. tube,dlr */
  modes: string[];
  /** The data set page to return. Page 1 equates to the first 1000 stop points, page 2 equates to 1001-2000 etc. Must be entered for bus mode as data set is too large. */
  page?: number;
};
export type StopPointDisruptionByModeApiResponse =
  /** status 200 OK */ TflApiPresentationEntitiesDisruptedPoint[];
export type StopPointDisruptionByModeApiArg = {
  /** A comma-seperated list of modes e.g. tube,dlr */
  modes: string[];
  includeRouteBlockedStops?: boolean;
};
export type StopPointSearchApiResponse =
  /** status 200 OK */ TflApiPresentationEntitiesSearchResponse;
export type StopPointSearchApiArg = {
  /** The query string, case-insensitive. Leading and trailing wildcards are applied automatically. */
  query: string;
  /** An optional, parameter separated list of the modes to filter by */
  modes?: string[];
  /** True to only return stations in that have Fares data available for single fares to another station. */
  faresOnly?: boolean;
  /** An optional result limit, defaulting to and with a maximum of 50. Since children of the stop point heirarchy are returned for matches,
                it is possible that the flattened result set will contain more than 50 items. */
  maxResults?: number;
  /** An optional, parameter separated list of the lines to filter by */
  lines?: string[];
  /** If true, returns results including HUBs. */
  includeHubs?: boolean;
  /** If the national-rail mode is included, this flag will filter the national rail stations so that only those operated by TfL are returned */
  tflOperatedNationalRailStationsOnly?: boolean;
};
export type StopPointSearchQueryApiResponse =
  /** status 200 OK */ TflApiPresentationEntitiesSearchResponse;
export type StopPointSearchQueryApiArg = {
  /** The query string, case-insensitive. Leading and trailing wildcards are applied automatically. */
  query: string;
  /** An optional, parameter separated list of the modes to filter by */
  modes?: string[];
  /** True to only return stations in that have Fares data available for single fares to another station. */
  faresOnly?: boolean;
  /** An optional result limit, defaulting to and with a maximum of 50. Since children of the stop point heirarchy are returned for matches,
                it is possible that the flattened result set will contain more than 50 items. */
  maxResults?: number;
  /** An optional, parameter separated list of the lines to filter by */
  lines?: string[];
  /** If true, returns results including HUBs. */
  includeHubs?: boolean;
  /** If the national-rail mode is included, this flag will filter the national rail stations so that only those operated by TfL are returned */
  tflOperatedNationalRailStationsOnly?: boolean;
};
export type StopPointGetServiceTypesApiResponse =
  /** status 200 OK */ TflApiPresentationEntitiesLineServiceType[];
export type StopPointGetServiceTypesApiArg = {
  /** The Naptan id of the stop */
  id: string;
  /** The lines which contain the given Naptan id (all lines relevant to the given stoppoint if empty) */
  lineIds?: string[];
  /** The modes which the lines are relevant to (all if empty) */
  modes?: string[];
};
export type StopPointGetBySmsApiResponse = /** status 200 OK */ SystemObject;
export type StopPointGetBySmsApiArg = {
  /** A 5-digit Countdown Bus Stop Code e.g. 73241, 50435, 56334. */
  id: string;
  /** If set to "web", a 302 redirect to relevant website bus stop page is returned. Valid values are : web. All other values are ignored. */
  output?: string;
};
export type StopPointGetByTypeApiResponse =
  /** status 200 OK */ TflApiPresentationEntitiesStopPoint[];
export type StopPointGetByTypeApiArg = {
  /** A comma-separated list of the types to return. Max. approx. 12 types.
                A list of valid stop types can be obtained from the StopPoint/meta/stoptypes endpoint. */
  types: string[];
};
export type StopPointGetByTypeWithPaginationApiResponse =
  /** status 200 OK */ TflApiPresentationEntitiesStopPoint[];
export type StopPointGetByTypeWithPaginationApiArg = {
  types: string[];
  page: number;
};
export type StopPointGetIDsApiResponse =
  /** status 200 OK */ TflApiPresentationEntitiesStopPoint[];
export type StopPointGetIDsApiArg = {
  /** A comma-separated list of stop point ids (station naptan code e.g. 940GZZLUASL). Max. approx. 20 ids.
                You can use /StopPoint/Search/{query} endpoint to find a stop point id from a station name. */
  ids: string[];
  /** Include the crowding data (static). To Filter further use: /StopPoint/{ids}/Crowding/{line} */
  includeCrowdingData?: boolean;
};
export type StopPointDisruptionApiResponse =
  /** status 200 OK */ TflApiPresentationEntitiesDisruptedPoint[];
export type StopPointDisruptionApiArg = {
  /** A comma-seperated list of stop point ids. Max. approx. 20 ids.
                You can use /StopPoint/Search/{query} endpoint to find a stop point id from a station name. */
  ids: string[];
  /** Specify true to return disruptions for entire family, or false to return disruptions for just this stop point. Defaults to false. */
  getFamily?: boolean;
  includeRouteBlockedStops?: boolean;
  /** Specify true to associate all disruptions with parent stop point. (Only applicable when getFamily is true). */
  flattenResponse?: boolean;
};
export type StopPointArrivalDeparturesApiResponse =
  /** status 200 OK */ TflApiPresentationEntitiesArrivalDeparture[];
export type StopPointArrivalDeparturesApiArg = {
  /** A StopPoint id (station naptan code e.g. 940GZZLUASL, you can use /StopPoint/Search/{query} endpoint to find a stop point id from a station name) */
  id: string;
  /** A comma-separated list of line ids e.g. elizabeth, london-overground, thameslink */
  lineIds: string[];
};
export type StopPointArrivalsApiResponse =
  /** status 200 OK */ TflApiPresentationEntitiesPrediction[];
export type StopPointArrivalsApiArg = {
  /** A StopPoint id (station naptan code e.g. 940GZZLUASL, you can use /StopPoint/Search/{query} endpoint to find a stop point id from a station name) */
  id: string;
};
export type StopPointReachableFromApiResponse =
  /** status 200 OK */ TflApiPresentationEntitiesStopPoint[];
export type StopPointReachableFromApiArg = {
  /** The id (station naptan code e.g. 940GZZLUASL, you can use /StopPoint/Search/{query} endpoint to find a stop point id from a station name) of the stop point to filter by */
  id: string;
  /** Line id of the line to filter by (e.g. victoria) */
  lineId: string;
  /** A comma-separated list of service types to filter on. If not specified. Supported values: Regular, Night. Defaulted to 'Regular' if not specified */
  serviceTypes?: ("Regular" | "Night")[];
};
export type StopPointCrowdingApiResponse =
  /** status 200 OK */ TflApiPresentationEntitiesStopPoint[];
export type StopPointCrowdingApiArg = {
  /** The Naptan id of the stop */
  id: string;
  /** A particular line e.g. victoria, circle, northern etc. */
  line: string;
  /** The direction of travel. Can be inbound or outbound. */
  direction: "inbound" | "outbound" | "all";
};
export type StopPointDirectionApiResponse = /** status 200 OK */ string;
export type StopPointDirectionApiArg = {
  /** Originating stop id (station naptan code e.g. 940GZZLUASL, you can use /StopPoint/Search/{query} endpoint to find a stop point id from a station name) */
  id: string;
  /** Destination stop id (station naptan code e.g. 940GZZLUASL, you can use /StopPoint/Search/{query} endpoint to find a stop point id from a station name) */
  toStopPointId: string;
  /** Optional line id filter e.g. victoria */
  lineId?: string;
};
export type StopPointRouteApiResponse =
  /** status 200 OK */ TflApiPresentationEntitiesStopPointRouteSection[];
export type StopPointRouteApiArg = {
  /** A stop point id (station naptan codes e.g. 940GZZLUASL, you can use /StopPoint/Search/{query} endpoint to find a stop point id from a station name) */
  id: string;
  /** A comma-separated list of service types to filter on. If not specified. Supported values: Regular, Night. Defaulted to 'Regular' if not specified */
  serviceTypes?: ("Regular" | "Night")[];
};
export type StopPointGetApiResponse =
  /** status 200 OK */ TflApiPresentationEntitiesPlace[];
export type StopPointGetApiArg = {
  /** A naptan id for a stop point (station naptan code e.g. 940GZZLUASL). */
  id: string;
  /** A comcomma-separated value representing the place types. */
  placeTypes: string[];
};
export type StopPointGetCarParksByIdApiResponse =
  /** status 200 OK */ TflApiPresentationEntitiesPlace[];
export type StopPointGetCarParksByIdApiArg = {
  /** stopPointId is required to get the car parks. */
  stopPointId: string;
};
export type StopPointGetTaxiRanksByIdsApiResponse =
  /** status 200 OK */ TflApiPresentationEntitiesPlace[];
export type StopPointGetTaxiRanksByIdsApiArg = {
  /** stopPointId is required to get the taxi ranks. */
  stopPointId: string;
};
export type TravelTimeGetCompareOverlayApiResponse =
  /** status 200 OK */ SystemObject;
export type TravelTimeGetCompareOverlayApiArg = {
  /** The zoom level. */
  z: number;
  /** The latitude of the pin. */
  pinLat: number;
  /** The longitude of the pin. */
  pinLon: number;
  /** The map center latitude. */
  mapCenterLat: number;
  /** The map center longitude. */
  mapCenterLon: number;
  /** The title of the scenario. */
  scenarioTitle: string;
  /** The id for the time of day (AM/INTER/PM) */
  timeOfDayId: string;
  /** The id of the mode. */
  modeId: string;
  /** The width of the requested overlay. */
  width: number;
  /** The height of the requested overlay. */
  height: number;
  /** The direction of travel. */
  direction: "Average" | "From" | "To";
  /** The total minutes between the travel time bands */
  travelTimeInterval: number;
  compareType: string;
  compareValue: string;
};
export type TravelTimeGetOverlayApiResponse = /** status 200 OK */ SystemObject;
export type TravelTimeGetOverlayApiArg = {
  /** The zoom level. */
  z: number;
  /** The latitude of the pin. */
  pinLat: number;
  /** The longitude of the pin. */
  pinLon: number;
  /** The map center latitude. */
  mapCenterLat: number;
  /** The map center longitude. */
  mapCenterLon: number;
  /** The title of the scenario. */
  scenarioTitle: string;
  /** The id for the time of day (AM/INTER/PM) */
  timeOfDayId: string;
  /** The id of the mode. */
  modeId: string;
  /** The width of the requested overlay. */
  width: number;
  /** The height of the requested overlay. */
  height: number;
  /** The direction of travel. */
  direction: "Average" | "From" | "To";
  /** The total minutes between the travel time bands */
  travelTimeInterval: number;
};
export type VehicleGetApiResponse =
  /** status 200 OK */ TflApiPresentationEntitiesPrediction[];
export type VehicleGetApiArg = {
  /** A comma-separated list of vehicle ids e.g. LX58CFV,LX11AZB,LX58CFE. Max approx. 25 ids. */
  ids: string[];
};
export type TflApiPresentationEntitiesAccidentStatsCasualty = {
  age?: number;
  ageBand?: string;
  class?: string;
  mode?: string;
  severity?: string;
};
export type TflApiPresentationEntitiesAccidentStatsVehicle = {
  type?: string;
};
export type TflApiPresentationEntitiesAccidentStatsAccidentDetail = {
  borough?: string;
  casualties?: TflApiPresentationEntitiesAccidentStatsCasualty[];
  date?: string;
  id?: number;
  lat?: number;
  location?: string;
  lon?: number;
  severity?: string;
  vehicles?: TflApiPresentationEntitiesAccidentStatsVehicle[];
};
export type SystemObject = {};
export type TflApiPresentationEntitiesAdditionalProperties = {
  category?: string;
  key?: string;
  modified?: string;
  sourceSystemKey?: string;
  value?: string;
};
export type TflApiPresentationEntitiesPlace = {
  additionalProperties?: TflApiPresentationEntitiesAdditionalProperties[];
  children?: TflApiPresentationEntitiesPlace[];
  childrenUrls?: string[];
  commonName?: string;
  distance?: number;
  id?: string;
  lat?: number;
  lon?: number;
  placeType?: string;
  url?: string;
};
export type TflApiPresentationEntitiesJourneyPlannerJourneyPlannerCycleHireDockingStationData =
  {
    destinationId?: string;
    destinationNumberOfBikes?: number;
    destinationNumberOfEmptySlots?: number;
    originId?: string;
    originNumberOfBikes?: number;
    originNumberOfEmptySlots?: number;
  };
export type TflApiPresentationEntitiesJourneyPlannerJourneyVector = {
  from?: string;
  to?: string;
  uri?: string;
  via?: string;
};
export type TflApiPresentationEntitiesJourneyPlannerFareCaveat = {
  text?: string;
  type?: string;
};
export type TflApiPresentationEntitiesJourneyPlannerFareTapDetails = {
  busRouteId?: string;
  hostDeviceType?: string;
  modeType?: string;
  nationalLocationCode?: number;
  tapTimestamp?: string;
  validationType?: string;
};
export type TflApiPresentationEntitiesJourneyPlannerFareTap = {
  atcoCode?: string;
  tapDetails?: TflApiPresentationEntitiesJourneyPlannerFareTapDetails;
};
export type TflApiPresentationEntitiesJourneyPlannerFare = {
  chargeLevel?: string;
  chargeProfileName?: string;
  cost?: number;
  highZone?: number;
  isHopperFare?: boolean;
  lowZone?: number;
  offPeak?: number;
  peak?: number;
  taps?: TflApiPresentationEntitiesJourneyPlannerFareTap[];
};
export type TflApiPresentationEntitiesJourneyPlannerJourneyFare = {
  caveats?: TflApiPresentationEntitiesJourneyPlannerFareCaveat[];
  fares?: TflApiPresentationEntitiesJourneyPlannerFare[];
  totalCost?: number;
};
export type TflApiPresentationEntitiesPoint = {
  lat?: number;
  lon?: number;
};
export type TflApiPresentationEntitiesLineGroup = {
  lineIdentifier?: string[];
  naptanIdReference?: string;
  stationAtcoCode?: string;
};
export type TflApiPresentationEntitiesLineModeGroup = {
  lineIdentifier?: string[];
  modeName?: string;
};
export type TflApiPresentationEntitiesPassengerFlow = {
  timeSlice?: string;
  value?: number;
};
export type TflApiPresentationEntitiesTrainLoading = {
  direction?: string;
  line?: string;
  lineDirection?: string;
  naptanTo?: string;
  platformDirection?: string;
  timeSlice?: string;
  value?: number;
};
export type TflApiPresentationEntitiesCrowding = {
  passengerFlows?: TflApiPresentationEntitiesPassengerFlow[];
  trainLoadings?: TflApiPresentationEntitiesTrainLoading[];
};
export type TflApiPresentationEntitiesIdentifier = {
  crowding?: TflApiPresentationEntitiesCrowding;
  fullName?: string;
  id?: string;
  motType?: string;
  name?: string;
  network?: string;
  routeType?:
    | "Unknown"
    | "All"
    | "Cycle Superhighways"
    | "Quietways"
    | "Cycleways"
    | "Mini-Hollands"
    | "Central London Grid"
    | "Streetspace Route";
  status?:
    | "Unknown"
    | "All"
    | "Open"
    | "In Progress"
    | "Planned"
    | "Planned - Subject to feasibility and consultation."
    | "Not Open";
  type?: string;
  uri?: string;
};
export type TflApiPresentationEntitiesStopPoint = {
  accessibilitySummary?: string;
  additionalProperties?: TflApiPresentationEntitiesAdditionalProperties[];
  children?: TflApiPresentationEntitiesPlace[];
  childrenUrls?: string[];
  commonName?: string;
  distance?: number;
  fullName?: string;
  hubNaptanCode?: string;
  icsCode?: string;
  id?: string;
  indicator?: string;
  individualStopId?: string;
  lat?: number;
  lineGroup?: TflApiPresentationEntitiesLineGroup[];
  lineModeGroups?: TflApiPresentationEntitiesLineModeGroup[];
  lines?: TflApiPresentationEntitiesIdentifier[];
  lon?: number;
  modes?: string[];
  naptanId?: string;
  naptanMode?: string;
  placeType?: string;
  platformName?: string;
  smsCode?: string;
  stationNaptan?: string;
  status?: boolean;
  stopLetter?: string;
  stopType?: string;
  url?: string;
};
export type TflApiPresentationEntitiesRouteSectionNaptanEntrySequence = {
  ordinal?: number;
  stopPoint?: TflApiPresentationEntitiesStopPoint;
};
export type TflApiPresentationEntitiesDisruptedRoute = {
  destinationName?: string;
  direction?: string;
  id?: string;
  isEntireRouteSection?: boolean;
  lineId?: string;
  lineString?: string;
  name?: string;
  originationName?: string;
  routeCode?: string;
  routeSectionNaptanEntrySequence?: TflApiPresentationEntitiesRouteSectionNaptanEntrySequence[];
  validFrom?: string;
  validTo?: string;
  via?: TflApiPresentationEntitiesRouteSectionNaptanEntrySequence;
};
export type TflApiPresentationEntitiesDisruption = {
  additionalInfo?: string;
  affectedRoutes?: TflApiPresentationEntitiesDisruptedRoute[];
  affectedStops?: TflApiPresentationEntitiesStopPoint[];
  category?:
    | "Undefined"
    | "RealTime"
    | "PlannedWork"
    | "Information"
    | "Event"
    | "Crowding"
    | "StatusAlert";
  categoryDescription?: string;
  closureText?: string;
  created?: string;
  description?: string;
  lastUpdate?: string;
  summary?: string;
  type?: string;
};
export type TflApiPresentationEntitiesPathAttribute = {
  name?: string;
  value?: string;
};
export type TflApiPresentationEntitiesInstructionStep = {
  cumulativeDistance?: number;
  cumulativeTravelTime?: number;
  description?: string;
  descriptionHeading?: string;
  distance?: number;
  latitude?: number;
  longitude?: number;
  pathAttribute?: TflApiPresentationEntitiesPathAttribute;
  skyDirection?: number;
  skyDirectionDescription?:
    | "North"
    | "NorthEast"
    | "East"
    | "SouthEast"
    | "South"
    | "SouthWest"
    | "West"
    | "NorthWest";
  streetName?: string;
  trackType?:
    | "CycleSuperHighway"
    | "CanalTowpath"
    | "QuietRoad"
    | "ProvisionForCyclists"
    | "BusyRoads"
    | "None"
    | "PushBike"
    | "Quietway";
  turnDirection?: string;
};
export type TflApiPresentationEntitiesInstruction = {
  detailed?: string;
  steps?: TflApiPresentationEntitiesInstructionStep[];
  summary?: string;
};
export type TflApiPresentationEntitiesJourneyPlannerObstacle = {
  incline?: string;
  position?: string;
  stopId?: number;
  type?: string;
};
export type TflApiCommonJourneyPlannerJpElevation = {
  distance?: number;
  endLat?: number;
  endLon?: number;
  gradient?: number;
  heightFromPreviousPoint?: number;
  startLat?: number;
  startLon?: number;
};
export type TflApiPresentationEntitiesJourneyPlannerPath = {
  elevation?: TflApiCommonJourneyPlannerJpElevation[];
  lineString?: string;
  stopPoints?: TflApiPresentationEntitiesIdentifier[];
};
export type TflApiPresentationEntitiesJourneyPlannerPlannedWork = {
  createdDateTime?: string;
  description?: string;
  id?: string;
  lastUpdateDateTime?: string;
};
export type TflApiPresentationEntitiesJourneyPlannerRouteOption = {
  direction?: string;
  directions?: string[];
  id?: string;
  lineIdentifier?: TflApiPresentationEntitiesIdentifier;
  name?: string;
};
export type TflApiPresentationEntitiesJourneyPlannerLeg = {
  arrivalPoint?: TflApiPresentationEntitiesPoint;
  arrivalTime?: string;
  departurePoint?: TflApiPresentationEntitiesPoint;
  departureTime?: string;
  disruptions?: TflApiPresentationEntitiesDisruption[];
  distance?: number;
  duration?: number;
  hasFixedLocations?: boolean;
  instruction?: TflApiPresentationEntitiesInstruction;
  interChangeDuration?: string;
  interChangePosition?: string;
  isDisrupted?: boolean;
  mode?: TflApiPresentationEntitiesIdentifier;
  obstacles?: TflApiPresentationEntitiesJourneyPlannerObstacle[];
  path?: TflApiPresentationEntitiesJourneyPlannerPath;
  plannedWorks?: TflApiPresentationEntitiesJourneyPlannerPlannedWork[];
  routeOptions?: TflApiPresentationEntitiesJourneyPlannerRouteOption[];
  scheduledArrivalTime?: string;
  scheduledDepartureTime?: string;
  speed?: string;
};
export type TflApiPresentationEntitiesJourneyPlannerJourney = {
  alternativeRoute?: boolean;
  arrivalDateTime?: string;
  description?: string;
  duration?: number;
  fare?: TflApiPresentationEntitiesJourneyPlannerJourneyFare;
  legs?: TflApiPresentationEntitiesJourneyPlannerLeg[];
  startDateTime?: string;
};
export type TflApiPresentationEntitiesValidityPeriod = {
  fromDate?: string;
  isNow?: boolean;
  toDate?: string;
};
export type TflApiPresentationEntitiesLineStatus = {
  created?: string;
  disruption?: TflApiPresentationEntitiesDisruption;
  id?: number;
  lineId?: string;
  modified?: string;
  reason?: string;
  statusSeverity?: number;
  statusSeverityDescription?: string;
  validityPeriods?: TflApiPresentationEntitiesValidityPeriod[];
};
export type TflApiPresentationEntitiesMatchedRoute = {
  destination?: string;
  destinationName?: string;
  direction?: string;
  name?: string;
  originationName?: string;
  originator?: string;
  routeCode?: string;
  serviceType?: string;
  validFrom?: string;
  validTo?: string;
};
export type TflApiPresentationEntitiesLineServiceTypeInfo = {
  name?: string;
  uri?: string;
};
export type TflApiPresentationEntitiesLine = {
  created?: string;
  crowding?: TflApiPresentationEntitiesCrowding;
  disruptions?: TflApiPresentationEntitiesDisruption[];
  id?: string;
  lineStatuses?: TflApiPresentationEntitiesLineStatus[];
  modeName?: string;
  modified?: string;
  name?: string;
  routeSections?: TflApiPresentationEntitiesMatchedRoute[];
  serviceTypes?: TflApiPresentationEntitiesLineServiceTypeInfo[];
};
export type TflApiPresentationEntitiesJourneyPlannerTimeAdjustment = {
  date?: string;
  time?: string;
  timeIs?: string;
  uri?: string;
};
export type TflApiPresentationEntitiesJourneyPlannerTimeAdjustments = {
  earlier?: TflApiPresentationEntitiesJourneyPlannerTimeAdjustment;
  earliest?: TflApiPresentationEntitiesJourneyPlannerTimeAdjustment;
  later?: TflApiPresentationEntitiesJourneyPlannerTimeAdjustment;
  latest?: TflApiPresentationEntitiesJourneyPlannerTimeAdjustment;
};
export type TflApiPresentationEntitiesJourneyPlannerSearchCriteria = {
  dateTime?: string;
  dateTimeType?: "Arriving" | "Departing";
  timeAdjustments?: TflApiPresentationEntitiesJourneyPlannerTimeAdjustments;
};
export type TflApiPresentationEntitiesJourneyPlannerItineraryResult = {
  cycleHireDockingStationData?: TflApiPresentationEntitiesJourneyPlannerJourneyPlannerCycleHireDockingStationData;
  journeyVector?: TflApiPresentationEntitiesJourneyPlannerJourneyVector;
  journeys?: TflApiPresentationEntitiesJourneyPlannerJourney[];
  lines?: TflApiPresentationEntitiesLine[];
  recommendedMaxAgeMinutes?: number;
  searchCriteria?: TflApiPresentationEntitiesJourneyPlannerSearchCriteria;
  stopMessages?: string[];
};
export type TflApiPresentationEntitiesMode = {
  isFarePaying?: boolean;
  isScheduledService?: boolean;
  isTflService?: boolean;
  modeName?: string;
  motType?: string;
  network?: string;
};
export type TflApiPresentationEntitiesStatusSeverity = {
  description?: string;
  modeName?: string;
  severityLevel?: number;
};
export type TflApiPresentationEntitiesLineRouteSection = {
  destination?: string;
  direction?: string;
  fromStation?: string;
  routeId?: number;
  serviceType?: string;
  toStation?: string;
  vehicleDestinationText?: string;
};
export type TflApiPresentationEntitiesMatchedRouteSections = {
  id?: number;
};
export type TflApiPresentationEntitiesMatchedStop = {
  accessibilitySummary?: string;
  direction?: string;
  hasDisruption?: boolean;
  icsId?: string;
  id?: string;
  lat?: number;
  lines?: TflApiPresentationEntitiesIdentifier[];
  lon?: number;
  modes?: string[];
  name?: string;
  parentId?: string;
  routeId?: number;
  stationId?: string;
  status?: boolean;
  stopLetter?: string;
  stopType?: string;
  topMostParentId?: string;
  towards?: string;
  url?: string;
  zone?: string;
};
export type TflApiPresentationEntitiesRouteSearchMatch = {
  id?: string;
  lat?: number;
  lineId?: string;
  lineName?: string;
  lineRouteSection?: TflApiPresentationEntitiesLineRouteSection[];
  lon?: number;
  matchedRouteSections?: TflApiPresentationEntitiesMatchedRouteSections[];
  matchedStops?: TflApiPresentationEntitiesMatchedStop[];
  mode?: string;
  name?: string;
  url?: string;
};
export type TflApiPresentationEntitiesRouteSearchResponse = {
  input?: string;
  searchMatches?: TflApiPresentationEntitiesRouteSearchMatch[];
};
export type TflApiPresentationEntitiesPredictionTiming = {
  countdownServerAdjustment?: string;
  insert?: string;
  read?: string;
  received?: string;
  sent?: string;
  source?: string;
};
export type TflApiPresentationEntitiesPrediction = {
  bearing?: string;
  currentLocation?: string;
  destinationName?: string;
  destinationNaptanId?: string;
  direction?: string;
  expectedArrival?: string;
  id?: string;
  lineId?: string;
  lineName?: string;
  modeName?: string;
  naptanId?: string;
  operationType?: number;
  platformName?: string;
  stationName?: string;
  timeToLive?: string;
  timeToStation?: number;
  timestamp?: string;
  timing?: TflApiPresentationEntitiesPredictionTiming;
  towards?: string;
  vehicleId?: string;
};
export type TflApiPresentationEntitiesOrderedRoute = {
  name?: string;
  naptanIds?: string[];
  serviceType?: string;
};
export type TflApiPresentationEntitiesStopPointSequence = {
  branchId?: number;
  direction?: string;
  lineId?: string;
  lineName?: string;
  nextBranchIds?: number[];
  prevBranchIds?: number[];
  serviceType?: "Regular" | "Night";
  stopPoint?: TflApiPresentationEntitiesMatchedStop[];
};
export type TflApiPresentationEntitiesRouteSequence = {
  direction?: string;
  isOutboundOnly?: boolean;
  lineId?: string;
  lineName?: string;
  lineStrings?: string[];
  mode?: string;
  orderedLineRoutes?: TflApiPresentationEntitiesOrderedRoute[];
  stations?: TflApiPresentationEntitiesMatchedStop[];
  stopPointSequences?: TflApiPresentationEntitiesStopPointSequence[];
};
export type TflApiPresentationEntitiesTimetablesDisambiguationOption = {
  description?: string;
  uri?: string;
};
export type TflApiPresentationEntitiesTimetablesDisambiguation = {
  disambiguationOptions?: TflApiPresentationEntitiesTimetablesDisambiguationOption[];
};
export type TflApiPresentationEntitiesKnownJourney = {
  hour?: string;
  intervalId?: number;
  minute?: string;
};
export type TflApiPresentationEntitiesServiceFrequency = {
  highestFrequency?: number;
  lowestFrequency?: number;
};
export type TflApiPresentationEntitiesTwentyFourHourClockTime = {
  hour?: string;
  minute?: string;
};
export type TflApiPresentationEntitiesPeriod = {
  frequency?: TflApiPresentationEntitiesServiceFrequency;
  fromTime?: TflApiPresentationEntitiesTwentyFourHourClockTime;
  toTime?: TflApiPresentationEntitiesTwentyFourHourClockTime;
  type?: "Normal" | "FrequencyHours" | "FrequencyMinutes" | "Unknown";
};
export type TflApiPresentationEntitiesSchedule = {
  firstJourney?: TflApiPresentationEntitiesKnownJourney;
  knownJourneys?: TflApiPresentationEntitiesKnownJourney[];
  lastJourney?: TflApiPresentationEntitiesKnownJourney;
  name?: string;
  periods?: TflApiPresentationEntitiesPeriod[];
};
export type TflApiPresentationEntitiesInterval = {
  stopId?: string;
  timeToArrival?: number;
};
export type TflApiPresentationEntitiesStationInterval = {
  id?: string;
  intervals?: TflApiPresentationEntitiesInterval[];
};
export type TflApiPresentationEntitiesTimetableRoute = {
  schedules?: TflApiPresentationEntitiesSchedule[];
  stationIntervals?: TflApiPresentationEntitiesStationInterval[];
};
export type TflApiPresentationEntitiesTimetable = {
  departureStopId?: string;
  routes?: TflApiPresentationEntitiesTimetableRoute[];
};
export type TflApiPresentationEntitiesTimetableResponse = {
  direction?: string;
  disambiguation?: TflApiPresentationEntitiesTimetablesDisambiguation;
  lineId?: string;
  lineName?: string;
  pdfUrl?: string;
  stations?: TflApiPresentationEntitiesMatchedStop[];
  statusErrorMessage?: string;
  stops?: TflApiPresentationEntitiesMatchedStop[];
  timetable?: TflApiPresentationEntitiesTimetable;
};
export type TflApiPresentationEntitiesActiveServiceType = {
  mode?: string;
  serviceType?: string;
};
export type TflApiPresentationEntitiesBikePointOccupancy = {
  bikesCount?: number;
  eBikesCount?: number;
  emptyDocks?: number;
  id?: string;
  name?: string;
  standardBikesCount?: number;
  totalDocks?: number;
};
export type TflApiPresentationEntitiesBay = {
  bayCount?: number;
  bayType?: string;
  free?: number;
  occupied?: number;
};
export type TflApiPresentationEntitiesCarParkOccupancy = {
  bays?: TflApiPresentationEntitiesBay[];
  carParkDetailsUrl?: string;
  id?: string;
  name?: string;
};
export type TflApiPresentationEntitiesChargeConnectorOccupancy = {
  id?: number;
  sourceSystemPlaceId?: string;
  status?: string;
};
export type TflApiPresentationEntitiesPlaceCategory = {
  availableKeys?: string[];
  category?: string;
};
export type TflApiPresentationEntitiesRoadCorridor = {
  bounds?: string;
  displayName?: string;
  envelope?: string;
  group?: string;
  id?: string;
  statusAggregationEndDate?: string;
  statusAggregationStartDate?: string;
  statusSeverity?: string;
  statusSeverityDescription?: string;
  url?: string;
};
export type SystemDataSpatialDbGeographyWellKnownValue = {
  coordinateSystemId?: number;
  wellKnownBinary?: string;
  wellKnownText?: string;
};
export type SystemDataSpatialDbGeography = {
  geography?: SystemDataSpatialDbGeographyWellKnownValue;
};
export type TflApiPresentationEntitiesRoadDisruptionSchedule = {
  endTime?: string;
  startTime?: string;
};
export type TflApiPresentationEntitiesRoadDisruptionImpactArea = {
  endDate?: string;
  endTime?: string;
  id?: number;
  polygon?: SystemDataSpatialDbGeography;
  roadDisruptionId?: string;
  startDate?: string;
  startTime?: string;
};
export type TflApiPresentationEntitiesRoadDisruptionLine = {
  endDate?: string;
  endTime?: string;
  id?: number;
  isDiversion?: boolean;
  multiLineString?: SystemDataSpatialDbGeography;
  roadDisruptionId?: string;
  startDate?: string;
  startTime?: string;
};
export type TflApiPresentationEntitiesRoadProject = {
  boroughsBenefited?: string[];
  constructionEndDate?: string;
  constructionStartDate?: string;
  consultationEndDate?: string;
  consultationPageUrl?: string;
  consultationStartDate?: string;
  contactEmail?: string;
  contactName?: string;
  cycleSuperhighwayId?: string;
  externalPageUrl?: string;
  phase?:
    | "Unscoped"
    | "Concept"
    | "ConsultationEnded"
    | "Consultation"
    | "Construction"
    | "Complete";
  projectDescription?: string;
  projectId?: string;
  projectName?: string;
  projectPageUrl?: string;
  projectSummaryPageUrl?: string;
  schemeName?: string;
};
export type TflApiPresentationEntitiesStreetSegment = {
  lineString?: string;
  sourceSystemId?: number;
  sourceSystemKey?: string;
  toid?: string;
};
export type TflApiPresentationEntitiesStreet = {
  closure?: string;
  directions?: string;
  name?: string;
  segments?: TflApiPresentationEntitiesStreetSegment[];
  sourceSystemId?: number;
  sourceSystemKey?: string;
};
export type TflApiPresentationEntitiesRoadDisruption = {
  category?: string;
  comments?: string;
  corridorIds?: string[];
  currentUpdate?: string;
  currentUpdateDateTime?: string;
  endDateTime?: string;
  geography?: SystemDataSpatialDbGeography;
  geometry?: SystemDataSpatialDbGeography;
  hasClosures?: boolean;
  id?: string;
  isProvisional?: boolean;
  lastModifiedTime?: string;
  levelOfInterest?: string;
  linkText?: string;
  linkUrl?: string;
  location?: string;
  ordinal?: number;
  point?: string;
  publishEndDate?: string;
  publishStartDate?: string;
  recurringSchedules?: TflApiPresentationEntitiesRoadDisruptionSchedule[];
  roadDisruptionImpactAreas?: TflApiPresentationEntitiesRoadDisruptionImpactArea[];
  roadDisruptionLines?: TflApiPresentationEntitiesRoadDisruptionLine[];
  roadProject?: TflApiPresentationEntitiesRoadProject;
  severity?: string;
  startDateTime?: string;
  status?: string;
  streets?: TflApiPresentationEntitiesStreet[];
  subCategory?: string;
  timeFrame?: string;
  url?: string;
};
export type TflApiPresentationEntitiesSearchMatch = {
  id?: string;
  lat?: number;
  lon?: number;
  name?: string;
  url?: string;
};
export type TflApiPresentationEntitiesSearchResponse = {
  from?: number;
  matches?: TflApiPresentationEntitiesSearchMatch[];
  maxScore?: number;
  page?: number;
  pageSize?: number;
  provider?: string;
  query?: string;
  total?: number;
};
export type TflApiPresentationEntitiesStopPointsResponse = {
  centrePoint?: number[];
  page?: number;
  pageSize?: number;
  stopPoints?: TflApiPresentationEntitiesStopPoint[];
  total?: number;
};
export type TflApiPresentationEntitiesStopPointCategory = {
  availableKeys?: string[];
  category?: string;
};
export type TflApiPresentationEntitiesDisruptedPoint = {
  additionalInformation?: string;
  appearance?: string;
  atcoCode?: string;
  commonName?: string;
  description?: string;
  fromDate?: string;
  mode?: string;
  stationAtcoCode?: string;
  toDate?: string;
  type?: string;
};
export type TflApiPresentationEntitiesLineSpecificServiceType = {
  serviceType?: TflApiPresentationEntitiesLineServiceTypeInfo;
  stopServesServiceType?: boolean;
};
export type TflApiPresentationEntitiesLineServiceType = {
  lineName?: string;
  lineSpecificServiceTypes?: TflApiPresentationEntitiesLineSpecificServiceType[];
};
export type TflApiPresentationEntitiesArrivalDeparture = {
  cause?: string;
  departureStatus?: "OnTime" | "Delayed" | "Cancelled" | "NotStoppingAtStation";
  destinationName?: string;
  destinationNaptanId?: string;
  estimatedTimeOfArrival?: string;
  estimatedTimeOfDeparture?: string;
  minutesAndSecondsToArrival?: string;
  minutesAndSecondsToDeparture?: string;
  naptanId?: string;
  platformName?: string;
  scheduledTimeOfArrival?: string;
  scheduledTimeOfDeparture?: string;
  stationName?: string;
  timing?: TflApiPresentationEntitiesPredictionTiming;
};
export type TflApiPresentationEntitiesStopPointRouteSection = {
  destinationName?: string;
  direction?: string;
  isActive?: boolean;
  lineId?: string;
  lineString?: string;
  mode?: string;
  naptanId?: string;
  routeSectionName?: string;
  serviceType?: string;
  validFrom?: string;
  validTo?: string;
  vehicleDestinationText?: string;
};
export const {
  useAccidentStatsGetQuery,
  useAirQualityGetQuery,
  useBikePointGetAllQuery,
  useBikePointSearchQuery,
  useBikePointGetQuery,
  useCabwiseGetQuery,
  useJourneyJourneyResultsQuery,
  useJourneyMetaQuery,
  useLineMetaDisruptionCategoriesQuery,
  useLineMetaModesQuery,
  useLineMetaServiceTypesQuery,
  useLineMetaSeverityQuery,
  useLineGetByModeQuery,
  useLineDisruptionByModeQuery,
  useLineRouteByModeQuery,
  useLineStatusByModeQuery,
  useLineRouteQuery,
  useLineSearchQuery,
  useLineStatusBySeverityQuery,
  useLineGetQuery,
  useLineArrivalsQuery,
  useLineDisruptionQuery,
  useLineLineRoutesByIdsQuery,
  useLineStatusByIdsQuery,
  useLineStatusQuery,
  useLineRouteSequenceQuery,
  useLineStopPointsQuery,
  useLineTimetableQuery,
  useLineTimetableToQuery,
  useModeGetActiveServiceTypesQuery,
  useModeArrivalsQuery,
  useOccupancyGetBikePointsOccupanciesQuery,
  useOccupancyGetQuery,
  useOccupancyGetIDsQuery,
  useOccupancyGetAllChargeConnectorStatusQuery,
  useOccupancyGetChargeConnectorStatusQuery,
  usePlaceGetByGeoQuery,
  usePlaceGetStreetsByPostCodeQuery,
  usePlaceMetaCategoriesQuery,
  usePlaceMetaPlaceTypesQuery,
  usePlaceSearchQuery,
  usePlaceGetByTypeQuery,
  usePlaceGetQuery,
  usePlaceGetAtQuery,
  usePlaceGetOverlayQuery,
  useRoadGetQuery,
  useRoadMetaCategoriesQuery,
  useRoadMetaSeveritiesQuery,
  useRoadDisruptionByIdQuery,
  useRoadDisruptedStreetsQuery,
  useRoadGetIDsQuery,
  useRoadDisruptionQuery,
  useRoadStatusQuery,
  useSearchGetQuery,
  useSearchBusSchedulesQuery,
  useSearchMetaCategoriesQuery,
  useSearchMetaSearchProvidersQuery,
  useSearchMetaSortsQuery,
  useStopPointGetByGeoPointQuery,
  useStopPointMetaCategoriesQuery,
  useStopPointMetaModesQuery,
  useStopPointMetaStopTypesQuery,
  useStopPointGetByModeQuery,
  useStopPointDisruptionByModeQuery,
  useStopPointSearchQuery,
  useStopPointSearchQueryQuery,
  useStopPointGetServiceTypesQuery,
  useStopPointGetBySmsQuery,
  useStopPointGetByTypeQuery,
  useStopPointGetByTypeWithPaginationQuery,
  useStopPointGetIDsQuery,
  useStopPointDisruptionQuery,
  useStopPointArrivalDeparturesQuery,
  useStopPointArrivalsQuery,
  useStopPointReachableFromQuery,
  useStopPointCrowdingQuery,
  useStopPointDirectionQuery,
  useStopPointRouteQuery,
  useStopPointGetQuery,
  useStopPointGetCarParksByIdQuery,
  useStopPointGetTaxiRanksByIdsQuery,
  useTravelTimeGetCompareOverlayQuery,
  useTravelTimeGetOverlayQuery,
  useVehicleGetQuery,
} = injectedRtkApi;
