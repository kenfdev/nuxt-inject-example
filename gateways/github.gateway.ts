import { IGitGateway, IGitStarsResult } from './interfaces';
import { AxiosStatic } from 'axios';

export class GitHubGateway implements IGitGateway {
  client: AxiosStatic;

  constructor(client: AxiosStatic) {
    this.client = client;
  }

  async fetchStars(): Promise<IGitStarsResult> {
    const vueResults = await this.client.get(
      'https://api.github.com/repos/vuejs/vue'
    );

    const nuxtResults = await this.client.get(
      'https://api.github.com/repos/nuxt/nuxt.js'
    );

    const total =
      vueResults.data.stargazers_count + nuxtResults.data.stargazers_count;

    return {
      count: total,
    };
  }
}
