import HomeView from "../containers/HomeViewContainer";
import ApartmentView from "../containers/ApartmentView";
import LocationView from "../containers/LocationViewContainer";
import SearchView from "../containers/SearchViewContainer";

const routes = {
  main: [
    {
      exact: true,
      path: "/",
      component: HomeView,
      id: 1,
    },
    {
      exact: true,
      path: "/apartments/:apartmentId",
      component: ApartmentView,
      id: 2,
    },
    {
      exact: true,
      path: "/locations/:locationId",
      component: LocationView,
      id: 3,
    },
    {
      exact: true,
      path: "/search/:locationId",
      component: SearchView,
      id: 4,
    }
  ],
};

export default routes;
