/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';

const SliderContent = (props) => (
  <div
    css={css`
      transform: translateX(-${props.translate}px);
      transition: transform ease-out ${props.transition}s;
      width: ${props.width}px;
      height: 100%;
      display: flex;
    `}
  >
    {props.children}
  </div>
);

export default SliderContent;
