import algoliasearch from 'algoliasearch';

const APP_ID = 'OFCNCOG2CU';
const API_KEY = 'f54e21fa3a2a0160595bb058179bfb1e';
const INDEX = 'npm-search';

const client = algoliasearch(APP_ID, API_KEY);
const index = client.initIndex(INDEX);

const defaultOptions = {
  page: 0,
  hitsPerPage: 10
}

// TODO add URL params
const search = async (params) => {
  const query = params?.query ?? '';
  const requestOptions = {...defaultOptions, ...params?.requestOptions };

  return index.search(query, requestOptions).then((data) => data);
}

export { search }