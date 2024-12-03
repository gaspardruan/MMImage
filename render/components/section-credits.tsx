import { Callout, Card } from '@blueprintjs/core';

import contributorsJSON from '../../static/contributors.json';
import { Contributor } from '../../typings/interface';

export const SectionCredits = () => {
  const contributors = contributorsJSON as Contributor[];

  return (
    <div className="section-credits">
      <Callout>如果觉得开心，就去给这些MM点个关注：</Callout>
      <div className="contributors">
        <Card className="contributor">
          <img className="avatar" src={contributors[0].avatar} />
        </Card>
      </div>
    </div>
  );
};
