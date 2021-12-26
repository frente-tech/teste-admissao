import axios from 'axios';
import { useQuery } from 'react-query';

export default (config, queryCfg = {}) => useQuery(
  [config.url, config.params],
  () => axios.request(config),
  queryCfg,
);
