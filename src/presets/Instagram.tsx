import React from 'react';
import ContentLoader from 'react-content-loader';

const Instagram = (props: any) => (
  <ContentLoader
    speed={2}
    width={400}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="30" cy="30" r="30" />
    <rect x="75" y="13" rx="4" ry="4" width="120" height="13" />
    <rect x="75" y="37" rx="4" ry="4" width="85" height="10" />
    <rect x="0" y="70" rx="5" ry="5" width="400" height="400" />
  </ContentLoader>
);

export default Instagram;
