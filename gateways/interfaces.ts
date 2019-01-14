export interface IGitStarsResult {
  count: number;
}

export interface IGitGateway {
  fetchStars(): Promise<IGitStarsResult>;
}
