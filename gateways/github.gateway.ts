import { IGitGateway, IGitStarsResult } from './interfaces';

export class GitHubGateway implements IGitGateway {
  fetchStars(): Promise<IGitStarsResult> {
    throw new Error('Method not implemented.');
  }
}
