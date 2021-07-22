# vue3-swipe-button
This component simulates the iOS animation of swipe a button from left to right to confirm an action.
Currently, supports only mobile devices (touch screens).

## Install
```
npm install vue3-swipe-button

yarn add vue3-swipe-button
```

### Import JS and Styles
```
import swipeButton from 'vue3-swipe-button'
import 'vue3-swipe-button/dist/swipeButton.css'
```

### Basic usage
```
<swipeButton text="Submit Form"
             @submit="actionMethod" />
```

#### Props

**title**<br>
type: string<br>
required: false<br>
default: "Swipe me :)"

<br><br>
**color**<br>
type: string<br>
required: false<br>
default: "#0271C2"<br>


#### Events

**submit**<br>
Triggered when full swipe to right<br>

#### Example
```
<template>
    <swipeButton text="Confirm Payment"
                 :color="getButtonColor"
                 @submit="actionMethod" />
</template>

<script>
import swipeButton from 'vue3-swipe-button'
import 'vue3-swipe-button/dist/swipeButton.css'

export default {
  components: { swipeButton },

  setup() {
    const actionMethod = () => {
      console.log('Uhuul... Payment Success');
    };

    return { actionMethod };
  },
}
</script>                 
```

### Customizations
`#swipe-button` for button style <br>
`#swiper` for swipe trigger style
