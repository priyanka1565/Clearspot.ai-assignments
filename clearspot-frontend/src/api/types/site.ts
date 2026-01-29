export interface Site {
  id: string;
  name: string;
  capacity: number;
}

export interface SiteResponse {
  sites: Site[];
  pagination: {
    page: number;
    total: number;
  };
}
