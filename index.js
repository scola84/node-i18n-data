import merge from 'lodash-es/merge';

import { data as httpData } from '@scola/api-http';
import { data as modelData } from '@scola/api-model';
import { data as routerData } from '@scola/api-router';
import { data as validatorData } from '@scola/validator';
import { data as wsData } from '@scola/api-ws';

export const data = merge({},
  httpData,
  modelData,
  routerData,
  validatorData,
  wsData
);
