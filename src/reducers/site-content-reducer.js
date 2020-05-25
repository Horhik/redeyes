import {APP_PAGE, GITHUB} from "../constants/link-types";

const initialState = {
  recentNews: ["nope"],
  portfolioItems: [
    {
      name: 'AnkiLan',
      description: 'The app created for pushing cards with english words and their definitions to AnkiLan',
      gallery: [],
        pageLink: '',
      links: [
        {
          name: 'GitHub',
          type: GITHUB,
          src: 'https://github.com'
        },
        {
          name: 'App page',
          type: APP_PAGE,
          src: 'https://github.com'
        },
      ]
    },
    {
      name: 'Time garden',
      description: 'The Forest like app for desktop and mobile',
      gallery: [],
        pageLink: '',
      links: [
        {
          name: 'GitHub',
          type: GITHUB,
          src: 'https://github.com'
        }

      ]
    },
    {
      name: 'Time garden',
      description: 'The Forest like app for desktop and mobile',
      gallery: [],
        pageLink: '',
      links: [
        {
          name: 'GitHub',
          type: GITHUB,
          src: 'https://github.com'
        }

      ]
    }
  ]
}

const siteContentReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default siteContentReducer;
