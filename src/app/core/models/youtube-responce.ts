import {PageInfo} from './pageInfo';
import {Items} from './items';

interface YoutubeResponse {
  kind: string;
  etag: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: PageInfo;
  items: Items[];
}

export {YoutubeResponse};
