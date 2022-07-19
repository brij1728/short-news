export interface Article {
  title: string;
  author: string;
  published_date: string;
  published_date_precision: string;
  link: string;
  clean_url: string;
  excerpt: string;
  summary: string;
  rights: string;
  rank: number;
  topic: string;
  country: string;
  language: string;
  authors: string;
  media: string;
  is_opinion: boolean;
  twitter_account: string;
  _score: number;
  _id: string;
}

export interface UserInput {
  q: string;
  search_in: string[];
  lang: string[];
  not_lang?: any;
  countries?: any;
  not_countries?: any;
  from: string;
  to?: any;
  ranked_only: string;
  from_rank?: any;
  to_rank?: any;
  sort_by: string;
  page: number;
  size: number;
  sources?: any;
  not_sources: string[];
  topic?: any;
  published_date_precision?: any;
}

export interface SearchResults {
  status: string;
  total_hits: number;
  page: number;
  total_pages: number;
  page_size: number;
  articles: Article[];
  user_input: UserInput;
}
