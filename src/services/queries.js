import { gql } from 'apollo-boost';

export const GET_COUNTRIES = gql`
  {
    Country {
      _id
      name
      capital
      flag {
        emoji
        emojiUnicode
        svgFile
      }
    }
  }
`;

export const GET_COUNTRIES_BY_ID = gql`
  query Country($_id: String!) {
    Country(_id: $_id) {
      _id
      name
      capital
      flag {
        emoji
        emojiUnicode
        svgFile
      }
      area
      population
      topLevelDomains {
        name
      }
    }
  }
`;
