import React from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { taskMiddleware } from "react-palm/tasks";
import { Provider, useDispatch } from "react-redux";

import useSwr from "swr";
import { addDataToMap } from "kepler.gl/actions";
import KeplerGl from "kepler.gl";
import keplerGlReducer from "kepler.gl/reducers";

import RoadMap from './roadMap'

const reducers = combineReducers({
  keplerGl: keplerGlReducer
});

const store = createStore(reducers, {}, applyMiddleware(taskMiddleware));

export default function App() {
  return (
    <Provider store={store}>
      <RoadMap />
    </Provider>
  );
}
