import {APP, APP_PAGE, GITHUB} from "../constants/link-types";

const initialState = {
  recentNews: ["nope"],
  portfolioItems: [
    {
      name: 'AnkiLan',
      description: 'The app created for pushing cards with english words and their definitions to Anki',
      gallery: [],
        pageLink: '',
      links: [
        {
          name: 'GitHub',
          type: GITHUB,
          src: 'https://github.com/horhik/ankilan'
        },
        /*{
          name: 'App page',
          type: APP_PAGE,
          src: 'https://github.com'
        },
        */
      ]
    },
    {
      name: 'Snake Game',
      description: 'Just the "Snake" game with smooth graphics',
      gallery: [],
        pageLink: '',
      links: [
        {
          name: 'GitHub',
          type: GITHUB,
          src: 'https://github.com/horhik/snake'
        },

        {
          name: 'Game',
          type: APP,
          src: 'https://smoothsnake.netlify.app',
          // logo: 'https://raw.githubusercontent.com/Horhik/tasquare/master/src/svg/logo.svg'
        }

      ]
    },
    {
      name: 'TaSquare',
      description: 'TODO app for mobile',
      gallery: [],
        pageLink: '',
      links: [
        {
          name: 'GitHub',
          type: GITHUB,
          src: 'https://github.com/horhik/tasquare'
        },
        {
          name: 'App',
          type: APP,
          src: 'https://tasquare.netlify.app',
          logo: 'https://raw.githubusercontent.com/Horhik/tasquare/master/src/svg/logo.svg'
        }

      ]
    }
  ],
  blogPageContent:[
    {
      name: 'The point of life by Linus Torvalds',
      description: 'Some about OpenSource philosophy and “just for fun” by Linus Torvalds',
      created: '02.04.2021',
      readingTime: '8min read',
      src: 'https://horhik.dev'
    },
    {
      name: 'Haskell on Back-end, how it is?',
      description: 'This site’s back-end written on haskell, let’s talks about privileges of haskell on backend',
      created: '11.03.2020',
      readingTime: '11min read',
      src: 'https://horhik.dev'
    },
    {
      name: 'ArchLinux and a lot of tiling window managers',
      description: 'Did you try something another than floating windows, like in windows?',
      created: '01.09.2020',
      readingTime: '4min read',
      src: 'https://horhik.dev'
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
