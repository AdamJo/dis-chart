import {
  SORT,
  LOAD_DATA,
  PAGE_COUNT,
  PAGE_NUMBER,
  INCREMENT,
  DECREMENT,
} from '../actions/types';

function sortData(data, sortBy) {
  if (sortBy === 'First Name') {
    sortBy = 'FirstName';
  }

  if (sortBy === 'Last Name') {
    sortBy = 'LastName';
  }

  if (data) {
    return data.sort((a, b) => {
      if (a[sortBy] < b[sortBy]) {
        return -1;
      }
      if (a[sortBy] > b[sortBy]) {
        return 1;
      }
      return 0;
    });
  }
}

export default (state = [], payload) => {
  switch (payload.type) {
    case SORT:
      let newData = state.data;
      return {
        ...state,
        sort: payload.sort,
        data: sortData(newData, payload.sort),
      };
    case LOAD_DATA:
      return { ...state, data: payload.data };
    case PAGE_COUNT:
      return { ...state, pageCount: payload.pageCount };
    case PAGE_NUMBER:
      return { ...state, pageNumber: payload.pageNumber };
    case INCREMENT:
      return {
        ...state,
        pageNumber: state.pageNumber * state.pageCount < state.data.length
          ? state.pageNumber + 1
          : state.pageNumber,
      };
    case DECREMENT:
      return {
        ...state,
        pageNumber: state.pageNumber > 1 ? state.pageNumber - 1 : 1,
      };
    default:
      return state;
  }
};
