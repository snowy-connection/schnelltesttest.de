import React from 'react';
import { TestData } from '../../utils/testdata';
import { BigBackButton, BigLinkButton } from '../Buttons';
import { ResultIcon } from './ResultIcon';
import { LogoHeadingPage } from '../HeadingPageLayouts';
export default function TestFound({ testdata }: { testdata: TestData }): JSX.Element {
  return (
    <LogoHeadingPage>
      <ResultIcon passed={testdata['sensitivity_cq<25'] >= 75} />
      <p>
        <b>"{testdata.test_name}"</b> von <b>"{testdata.manufacturer}"</b> erkennt Infizierte mit{' '}
        <i>sehr hoher</i> Viruslast zu <b>{testdata['sensitivity_cq<25']}&nbsp;%</b>
      </p>
      <p>
        Über <i>alle</i> Viruslasten erkennt der Test <b>{testdata.sensitivity_total}&nbsp;%</b> der
        Infizierten
      </p>
      <p style={{ fontStyle: 'italic' }}>Vorsicht: Diese Zahlen wurden vor Omikron erhoben.</p>
      <p>
        Quelle:{' '}
        <a
          href={
            'https://www.pei.de/SharedDocs/Downloads/DE/newsroom/dossiers/evaluierung-sensitivitaet-sars-cov-2-antigentests.pdf?__blob=publicationFile&v=69'
          }
        >
          PEI
        </a>
      </p>
      <div style={{ flexGrow: 1 }} />
      <BigLinkButton
        to={`/result/${encodeURIComponent(testdata.at_nr)}/details`}
        content={'Mehr Informationen'}
        appearance="primary"
      />
      <BigBackButton content={'Zurück'} />
    </LogoHeadingPage>
  );
}
