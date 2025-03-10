interface Params {
  [key: string]: string[];
}

interface SearchParams {
  [key: string]: string | string[] | undefined;
}

export interface PageProps {
  params?: Promise<Params>;
  searchParams?: Promise<SearchParams>;
}
