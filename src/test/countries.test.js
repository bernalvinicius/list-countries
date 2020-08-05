import { MockedProvider } from '@apollo/react-testing';
import { render } from '@testing-library/react';
import React from 'react';

import CardCountries from '../features/components/CardCountries';
import { GET_COUNTRIES } from '../services/queries';

describe('Tests Countries', () => {
  it('should render loading text when fetching', () => {
    const { queryAllByText } = renderComponents();

    const countLoading = queryAllByText('is loading...');
    expect(countLoading).toHaveLength(0);
  });
});

const defaultMocks = [
  {
    request: {
      query: GET_COUNTRIES,
    },
    result: {
      data: {
        Country: {
          edges: [
            {
              id: '123',
              name: 'Brazil',
              capital: 'Brasilia',
              flag: {
                emoji: '',
                emojiUnicode: 'U+1F1E6',
                svgFile: 'https://restcountries.eu/data/afg.svg',
              },
            },
          ],
        },
      },
    },
  },
];

const renderComponents = (mocks = defaultMocks) => {
  return render(
    <MockedProvider addTypename={false} mocks={mocks}>
      <CardCountries />
    </MockedProvider>
  );
};
