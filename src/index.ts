export * from './types';
export * from './combine';
export * from './create-assign';
export * from './create-table';
export * from './create-map';
export * from './create-loader';
export * from './create-loader-table';

import createSlice from './create-slice';
export default createSlice;
export { default as createAction } from './create-action';
export { default as createReducer } from './create-reducer';
export { default as createApp } from './create-app';
import createTable from './create-table';
import createMap from './create-map';
import createLoader from './create-loader';
import createLoaderTable from './create-loader-table';
import createAssign from './create-assign';
import createListTable from './create-list-table';
export {
  createSlice,
  createTable,
  createMap,
  createLoader,
  createLoaderTable,
  createAssign,
  createListTable,
};

// All of these variable names are DEPRECATED
const mapSlice = createMap;
const loadingSlice = createLoader;
const loadingMapSlice = createLoaderTable;
const assignSlice = createAssign;
export { mapSlice, loadingSlice, loadingMapSlice, assignSlice };
