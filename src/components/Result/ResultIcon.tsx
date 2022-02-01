import React from 'react';
import failedIcon from './failed.svg';
import passedIcon from './passed.svg';

export function ResultIcon({ passed }: { passed: boolean }): JSX.Element {
  // TODO: Icons as SVG
  return (
    <>
      <img
        src={passed ? passedIcon : failedIcon}
        alt={
          passed
            ? 'Logo mit weißem X auf rotem Grund als Signal für einen wenig aussagekräftigen Test'
            : 'Logo mit weißem Haken auf grünem Grund als Signal für einen aussagekräftigen Test'
        }
      />
    </>
  );
}
