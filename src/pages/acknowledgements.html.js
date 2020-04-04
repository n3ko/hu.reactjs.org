/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 */

import Layout from 'components/Layout';
import Container from 'components/Container';
import Header from 'components/Header';
import TitleAndMetaTags from 'components/TitleAndMetaTags';
import React from 'react';
import {urlRoot} from 'site-constants';
import {sharedStyles} from 'theme';

import names from '../../content/acknowledgements.yml';

const Acknowlegements = ({data, location}) => (
  <Layout location={location}>
    <Container>
      <div css={sharedStyles.articleLayout.container}>
        <div css={sharedStyles.articleLayout.content}>
          <Header>Elismerések</Header>
          <TitleAndMetaTags
            canonicalUrl={`${urlRoot}/acknowledgements.html`}
            title="React - Elismerések"
          />

          <div css={sharedStyles.markdown}>
            <p>Minden közreműködőnek nagy köszönet:</p>

            <ul
              css={{
                display: 'flex',
                flexWrap: 'wrap',
              }}>
              {names.map((name, index) => (
                <li
                  css={{
                    flex: '1 0 200px',
                  }}
                  key={index}>
                  {name}
                </li>
              ))}
            </ul>

            <p>Valamint hálásak vagyunk</p>
            <ul>
              <li>
                <a href="https://github.com/jeffbski">Jeff Barczewski</a>nek,
                hogy használhatjuk a{' '}
                <a href="https://www.npmjs.com/package/react">react</a> csomagnevet npm-en.
              </li>
              <li>
                <a href="https://christopheraue.net/">Christopher Aue</a>nek, hogy
                használhatjuk a{' '}
                <a href="https://reactjs.com/">reactjs.com</a> doménnevet és
                a <a href="https://twitter.com/reactjs">@reactjs</a> felhasználónevet
                Twitteren.
              </li>
              <li>
                <a href="https://github.com/ProjectMoon">ProjectMoon</a>nak, hogy
                használhatjuk a{' '}
                <a href="https://www.npmjs.com/package/flux">flux</a> csomagnvet npm-en.
              </li>
              <li>
                Shane Andersonnak, hogy használhatjuk a{' '}
                <a href="https://github.com/react">react</a> szervezet nevet GitHubon.
              </li>
              <li>
                <a href="https://github.com/voronianski">Dmitri Voronianski</a>nak,{' '}
                hogy használhatjuk az{' '}
                <a href="https://labs.voronianski.com/oceanic-next-color-scheme/">
                  Oceanic Next
                </a>{' '}
                színsémát ezen az oldalon.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  </Layout>
);

export default Acknowlegements;
