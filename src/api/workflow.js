import { stringifyQuery } from 'vue-router';
import request from '../utils/request';
import { urlWorkflow } from './utils/urls'

export const getAllWorkflows = query => {
    return request({
        url: urlWorkflow,
        method: 'get',
        params: query
    });
};

export const deleteWorkflow = query => {
    const url = urlWorkflow + '/' + String(query.type) + '/' + String(query.group) + '/' + String(query.name) + '/' + String(query.version);

    return request({
        url,
        method: 'delete',
        params: {}
    });
};