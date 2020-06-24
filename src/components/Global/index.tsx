//colors
export const defaultColor = '#161c2d';
export const primarytColor = '#506690';
export const secondaryColor = '#239ad7';
export const lightColor = '#869ab8';
export const veryLightColor = 'white';

// background
export const backgroundImage = 'linear-gradient(120deg,#5378c6 15%,#239ad7 50%,#05d5ff 75%,#19d1a6)';

//responsive breakpoints
export const tabletWidth = '768px';


// A JS mixin for vertical Ellipsis
export const VerticalEllipsis = (nbrOfLines: number) => `
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: ${nbrOfLines};
  -webkit-box-orient: vertical;
`;


// A JS mixin for Horizontally Elipsis
export const HorizontalEllipsis = (maxWidth: number) => `
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: ${maxWidth};
  -webkit-box-orient: vertical;
`;