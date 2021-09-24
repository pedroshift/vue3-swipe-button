<template>
  <div id="swipe-button"
       class="button swipe-button"
        :style="{ backgroundColor: color }">
    <span>{{ text }}</span>

    <div id="swiper"
         :class="{'shake' : shakeAnimation}">
      <div id="swiper-selector">
        <img src="./assets/chevron-swipe-arrow.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue';

export default {
  name: 'swipeButton',

  props: {
    text: {
      required: false,
      type: String,
      default: 'Swipe me :)'
    },

    color: {
      required: false,
      type: String,
      default: '#0271C2'
    },

    shakeAnimation: {
      required: false,
      type: Boolean,
      default: false,
    },
  },

  emits: ['submit'],

  setup(props, context) {
    onMounted(() => {
      const buttonElement = document.getElementById('swipe-button');
      const buttonWidth = buttonElement.clientWidth;
      const touchableElement = document.getElementById('swiper');
      const touchableInitialState = (buttonWidth * -1) + 55;

      touchableElement.style.width = `${buttonWidth}px`;
      touchableElement.style.marginLeft = `${touchableInitialState}px`;

      let reachEnd = false;

      function handleTouchStart(e) {
        e.preventDefault();

        if (e.targetTouches.length > 1) {
          return false;
        }

        document.addEventListener('touchmove', handleTouchMove, { passive: false });
      }

      function handleTouchEnd(e) {
        e.preventDefault();
        handleGesture(reachEnd, touchableInitialState, touchableElement);

        document.removeEventListener('touchmove', handleTouchMove);
      }

      function handleTouchMove(e) {
        e.preventDefault();
        let movingPos =  e.changedTouches[0].pageX - 55;
        let endPos = buttonWidth - 55;

        reachEnd = false;

        if (movingPos > endPos) {
          reachEnd = true;

          return false;
        }

        touchableElement.style.marginLeft = `${touchableInitialState + movingPos}px`;
      }

      touchableElement.addEventListener('touchstart', handleTouchStart, false);
      touchableElement.addEventListener('touchend', handleTouchEnd, false);
      touchableElement.addEventListener('touchcancel', handleTouchEnd, false);
    });

    function handleGesture(reachEnd, touchableInitialState, touchableElement) {
      if (reachEnd) {
        touchableElement.style.transition = 'all 0.08s ease-in';
        touchableElement.style.marginLeft = '0';

        setTimeout(() => context.emit('submit'), 80);
      } else {
        touchableElement.style.transition = 'all 0.08s ease-in';
        touchableElement.style.marginLeft = `${touchableInitialState}px`;
      }

      setTimeout(() => touchableElement.style.transition = 'all 0s ease-in', 80);
    }
  },
};
</script>

<style lang="scss">
html, body {
  overscroll-behavior: none;
}

.button {
  display: block;
  width: 100%;
  text-align: center;
  border-radius: 0.1875rem;
  border: 0;
  outline: unset;
  font-weight: bold;
  padding-top: 0.875rem;
  padding-bottom: 0.875rem;
  color: #FFFFFF;
}

.swipe-button {
  position: relative;
  overflow: hidden;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;

  > span {
    position: relative;
    z-index: 10;
  }

  #swiper {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: absolute;
    z-index: 2;
    width: 55px;
    height: 50px;
    background-color: rgba(0,0,0,0.4);
    left: 0;
    top: 0;

    #swiper-selector {
      width: 55px;
      height: 46px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;

      img {
        max-width: 25px;
        max-height: 19px;
      }
    }
  }
}

// SHAKE
.shake {
  animation: shake;
  animation-duration: 5s;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
}

@keyframes shake {
  0% { left: 0; }
  4% { left: 8px; }
  8% { left: 0; }
  12% { left: 8px; }
  16% { left: 0; }
}
</style>
