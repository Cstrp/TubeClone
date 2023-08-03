import {Thumbnails} from './thumbnails';
import {Statistics} from './statistics';

interface Snippet {
  publishedAt: string;
  channelId?: string;
  title: string;
  subTitle: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle?: string;
  liveBroadcastContent?: string;
  publishTime?: string;
  statistics: Statistics;
}

export {Snippet};
