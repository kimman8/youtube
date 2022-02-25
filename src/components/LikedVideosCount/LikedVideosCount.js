import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import styled from 'styled-components';
const Dot = styled.div`
  background: red;
  color: white;
  border-radius: 50%;
  padding: 6px 12px;
  line-height: normal;
  min-width: 10px;
  margin-left: 10px;
  font-feature-settings: 'tnum';
  font-variant-numeric: 'tabular-nums';
`;

const AnimationStyles = styled.span`
  position: relative;
  .count {
    display: block;
    position: relative;
    transition: transform 0.4s;
    backface-visibility: hidden;
  }
  .count-enter {
    transform: scale(4) rotateX(0.5turn);
  }
  .count-enter-active {
    transform: rotateX(0);
  }
  .count-exit {
    top: 0;
    position: absolute;
    transform: rotateX(0);
  }
  .count-exit-active {
    transform: scale(4) rotateX(0.5turn);
  }
`;
function LikedVideosCount({ count }) {
  return (
    <AnimationStyles>
      <TransitionGroup>
        <CSSTransition
          unmountOnExit
          className='count'
          classNames='count'
          key={count}
          timeout={{ enter: 400, exit: 400 }}
        >
          <Dot>{count}</Dot>
        </CSSTransition>
      </TransitionGroup>
    </AnimationStyles>
  );
}

export default LikedVideosCount;
