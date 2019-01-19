import axios from 'axios';

import { IGitGateway } from '~/gateways/interfaces';
import { GitHubGateway } from '~/gateways/github.gateway';
import { FakeGitGateway } from '~/gateways/fake-git.gateway';

export interface Dependencies {
  gitGateway: IGitGateway;
}

export default (context, inject) => {
  const environment = process.env.environment || 'development';

  let gitGateway: IGitGateway;
  if (environment === 'offline') {
    gitGateway = new FakeGitGateway();
  } else {
    gitGateway = new GitHubGateway(axios);
  }

  const deps: Dependencies = {
    gitGateway,
  };

  inject('deps', deps);
};
