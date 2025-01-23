import linksMock from '../../components/NavLinks/mock';
import gridMock from '../../components/GridText/mock';

export const mockBase = {
  children: (
    <>
      {[...Array(6)].map((_, index) => (
        <GridText
          key={index}
          {...gridMock}
          background={index % 2 === 0}
        />
      ))}
    </>
  ),
  links: linksMock,
  logoData: {
    text: 'Logo',
    link: '#',
  },
  footerHtml: `<p><a href="https://beacons.page/antunesluis">Feito com ❤ por Luis Antunes</a></p>`,
};
