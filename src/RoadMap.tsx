import React from "react";
import ReactDOM from 'react-dom';

export function RoadNetworkMap() {
    const dispatch = useDispatch();
    const { data } = useSwr("covid", async () => {
      const response = await fetch(
        ""
      );
      const data = await response.json();
      return data;
    });
  
    React.useEffect(() => {
      if (data) {
        dispatch(
          addDataToMap({
            datasets: {
              info: {
                label: "RN",
                id: ""
              },
              data
            },
            option: {
              centerMap: true,
              readOnly: false
            },
            config: {}
          })
        );
      }
    }, [dispatch, data]);
  
    return (
      <KeplerGl
        id="covid"
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API}
        width={window.innerWidth}
        height={window.innerHeight}
      />
    );
  }

