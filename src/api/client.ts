import { NEWSCATCHER_BASE_URL, defaultHeaders } from './constants';
import { SearchResults } from './types';

type SearchRequest = {
  keyword?: string;
  language?: string;
};
export const searchNewsByKeyword = async ({
  keyword = 'india',
  language = 'en',
}: SearchRequest): Promise<SearchResults> => {
  const queryParams = new URLSearchParams({
    q: keyword,
    // from:'2021/12/15',
    // countries:'CA',
    page_size: '10',
  });
  const url = new URL(`/search?${queryParams}`, NEWSCATCHER_BASE_URL).href;
  const data: SearchResults = await fetch(url, {
    headers: { ...defaultHeaders },
  }).then((res: Response) => res.json());
  return data;
};
