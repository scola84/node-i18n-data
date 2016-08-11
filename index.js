import { data as httpData } from '@scola/api-http';
import { data as modelData } from '@scola/api-model';
import { data as routerData } from '@scola/api-router';
import { data as validatorData } from '@scola/validator';
import { data as wsData } from '@scola/api-ws';

export function data(i18n) {
  i18n.string()
    .data(httpData)
    .data(modelData)
    .data(routerData)
    .data(validatorData)
    .data(wsData);
}
