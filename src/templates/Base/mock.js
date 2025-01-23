import linksMock from '../../components/NavLinks/mock';

import gridMock from '../../components/GridText/mock';
import { GridText } from '../../components/GridText';

const mockBase = {
  children: (
    <>
      <GridText {...gridMock} background />
      <GridText {...gridMock} />
      <GridText {...gridMock} background />
      <GridText {...gridMock} />
      <GridText {...gridMock} background />
      <GridText {...gridMock} />
    </>
  ),
  links: linksMock,
  logoData: {
    text: 'Logo',
    link: '#',
  },
  footerHtml: `<p><a href="https://beacons.page/antunesluis">Feito com ❤ por Luis Antunes</a></p>`,
};

export default mockBase;
