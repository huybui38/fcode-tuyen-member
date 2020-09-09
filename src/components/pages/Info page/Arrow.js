/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';

const Arrow = ({ direction, handleClick }) => (
  <div
    onClick={handleClick}
    css={css`
      display: flex;
      position: absolute;
      top: 50%;
      ${direction === 'right' ? 'right: 25px' : 'left: 25px'};
      justify-content: center;
      cursor: pointer;
      align-items: center;
      transition: transform ease-in 0.1s;
      &:hover {
        transform: scale(1.4);
        
      }

      .arrow {
        transform: translateX(${direction === 'left' ? '-2' : '2'}px);

        &:focus {
          outline: 0;
        }
        font-size: 50px;
        color: rgba(0,0,0,0.6);
      }
    `}
  >
    {direction === 'right' ? <FaAngleRight className="arrow" /> : <FaAngleLeft className="arrow" />}
  </div>
);

export default Arrow;
