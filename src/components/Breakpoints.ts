export enum DEVICES {
  mobileS = 'mobileS',
  mobileM = 'mobileM',
  mobileL = 'mobileL',
  tablet = 'tablet',
  laptop = 'laptop',
  laptopL = 'laptopL',
  desktop = 'desktop'
}

export const breakpoints = Object.freeze({
  mobileS: '(min-width: 320px)',
  mobileM: '(min-width: 375px)',
  mobileL: '(min-width: 425px)',
  tablet: '(min-width: 768px)',
  laptop: '(min-width: 1024px)',
  laptopL: '(min-width: 1440px)',
  desktop: '(min-width: 2560px)'
})
