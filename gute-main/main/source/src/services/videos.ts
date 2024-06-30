import { QueryParams } from '@store/shared';
import ConnectionInstance from './connection-instance';

export const getVideos = (params?: QueryParams) => ConnectionInstance.get('videos', { params });
