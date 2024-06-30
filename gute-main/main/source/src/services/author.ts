import ConnectionInstance from './connection-instance';

export const getAuthorDetail = (id: number) => ConnectionInstance.get('author/' + id);
