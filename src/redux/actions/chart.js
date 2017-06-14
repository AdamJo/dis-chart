import {
  SORT,
  PAGE_COUNT,
  PAGE_NUMBER,
  LOAD_DATA,
  INCREMENT,
  DECREMENT,
} from './types';

export const sort = sort => {
  if (sort.target) {
    sort = sort.target.value;
  }
  return {
    type: SORT,
    sort,
  };
};

export const pageCount = pageCount => {
  if (pageCount.target) {
    pageCount = pageCount.target.value;
  }
  return {
    type: PAGE_COUNT,
    pageCount: parseInt(pageCount, 10),
  };
};

export const pageNumber = pageNumber => {
  return {
    type: PAGE_NUMBER,
    pageNumber: parseInt(pageNumber, 10),
  };
};

export const loadData = data => {
  return {
    type: LOAD_DATA,
    data,
  };
};

export const increment = increment => {
  return {
    type: INCREMENT,
  };
};

export const decrement = decrement => {
  return {
    type: DECREMENT,
  };
};
