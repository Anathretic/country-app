# Countrypedia

## About

My second version of the app, which allows you to search for information about a country (200+ countries) and its data, such as population or currency. Due to the fact that the free API server or the backend itself sometimes exhibits unexpected behaviour, a special context was created to manage the download. If there are problems with the download, a button is displayed to resubmit the request.

## Coding & Problems

I decided to move the whole project to React, which has brought many benefits:

- Created modern data handler and a special context to get the data without issues,
- User can directly switch between countries using the border countries buttons (when the details of the selected country are displayed),
- Improved inputs and sort countries alphabetically,
- Created dark mode based on context,
- Changed loader,
- Cleared CSS

The code is refactored and divided into components and custom hooks.

The whole application was also optimised to reduce unnecessary component re-rendering or excessive operations. To this end, I used hooks such as useMemo or useCallback, and in particular memo and lazy functions.

## Links & Tools

**API:** [Rest-Countries](https://restcountries.com/)

**Inspiration:** [Frontend-Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca)

**Used:** JavaScript, React (incl. Context), CSS.

**URL:** [Countrypedia](https://countrypedia-project.vercel.app/)
