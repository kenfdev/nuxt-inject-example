import { IGitGateway } from '~/gateways/interfaces';
import { GitHubGateway } from '~/gateways/github.gateway';
import { FakeGitGateway } from '~/gateways/fake-git.gateway';

export interface Dependencies {
  gitGateway: IGitGateway;
}

/**
 * Serviceの初期化とappまたはcontextに$depsとしてinjectする
 */
export default (context, inject) => {
  const environment = process.env.environment || 'development';

  const gitGateway = new FakeGitGateway();

  const deps: Dependencies = {
    gitGateway,
  };

  inject('deps', deps);
};
