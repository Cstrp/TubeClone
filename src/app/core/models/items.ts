import {Snippet} from './snippet';

interface Items {
  kind: string;
  etag: string;
  id: string | ID;
  snippet: Snippet;
}

type ID = {
  kind?: string;
  videoId: string;
};

export {Items};
