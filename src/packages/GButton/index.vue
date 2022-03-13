<template>
  <button 
    class="g-button"
    :class="classes"  
  >
    <slot></slot>  
  </button>
</template>

<script>
export default {
  name: 'GButton',
  props: {
    size: {
      type: String,
      validator: (v) => ['large', 'default', 'small'].includes(v),
      default: 'default'
    },
    type: {
      type: String,
      validator: (v) => ['primary', 'success', 'warning', 'danger', 'text'].includes(v)
    },
    round: {
      type: Boolean,
    },
    circle: {
      type: Boolean
    },
    disabled: {
      type: Boolean
    }
  },
  setup(props) {
    const ElPrefix = 'g-button'

    const classes = [
      ElPrefix + `--${props.size}`,
      ElPrefix + `--${props.type}`,
      {
        'is-round': props.round,
        'is-circle': props.circle,
        disabled : props.disabled,
      }
    ]

    return {
      classes
    }
  }
}
</script>

<style lang="scss" scoped>
$name: g-button;

.g-button{
  display: inline-block;
  color: $dark;
  border: 1px solid $defaultBorderColor;
  background-color: transparent;
  cursor: pointer;
  transition: all .3s;

  & + .g-button{
    margin-left: 12px;
  }

  &--small{
    padding: 5px 11px;
    font-size: $fontSizeSmall;
    &.is-circle{
      width: 24px;
      height: 24px;
    }
  }
  &--default{
    padding: 8px 15px;
    font-size: $fontSizeMedium;
    &.is-circle{
      width: 32px;
      height: 32px;
    }
  }
  &--large{
    padding: 12px 19px;
    font-size: $fontSizeLarge;
    &.is-circle{
      width: 40px;
      height: 40px;
    }
  }

  &--primary{
    color: $light;
    background-color: $colorPrimary;
    border-color: $colorPrimary;
  }
  &--success{
    color: $light;
    background-color: $colorSuccess;
    border-color: $colorSuccess;
  }
  &--warning{
    color: $light;
    background-color: $colorWarning;
    border-color: $colorWarning;
  }
  &--danger{
    color: $light;
    background-color: $colorDanger;
    border-color: $colorDanger;
  }
  &--text{
    color: $dark;
    background-color: transparent;
    border-color: transparent;
  }

  &.is-round{
    border-radius: 20px;
  }
  &.is-circle{
    padding: 0;
    border-radius: 50%;
    overflow: hidden;
  }
  &.disabled{
    cursor: not-allowed;
    opacity: .6;
  }
  &:hover{
    opacity: .7;
  }
}
</style>