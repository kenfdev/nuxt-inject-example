import { IGitGateway, IGitStarsResult } from './interfaces';

export class FakeGitGateway implements IGitGateway {
  fetchStars(): Promise<IGitStarsResult> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ count: 2 });
      }, 1500);
    });
  }
}
