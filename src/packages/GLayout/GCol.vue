<template>
  <component :is="tag" class="g-col" :class="classes" :style="style">
    <slot></slot>
  </component>
</template>

<script>
import { computed, inject } from "vue"
import { rowContextKey } from '../../tokens/index'

export default {
  name: 'GCol',
  props: {
    span: {
      type: Number,
      validator: (v) => v >= 0 && v <= 24,
      default: 24
    },
    offset: {
      type: Number,
      default: 0
    },
    push: {
      type: Number,
      default: 0
    },
    pull: {
      type: Number,
      default: 0
    },
    xs: {
      type: Number
    },
    sm: {
      type: Number
    },
    md: {
      type: Number
    },
    lg: {
      type: Number,
    },
    xl: {
      type: Number
    },
    tag: {
      type: String,
      default: 'div'
    }
  },
  setup(props) {
    const ns = 'g-col'

    const { gutter } = inject(rowContextKey)
    const style = computed(() => {
      const gutterVal = gutter.value

      const style = {
        paddingLeft: 0,
        paddingRight: 0
      }

      if (typeof gutterVal === 'number') {
        style.paddingLeft = style.paddingRight = gutterVal / 2 + 'px'
      }

      return style
    })

    const classes = computed(() => {
      const classes = []

      const pos = ['span', 'offset', 'push', 'pull']
      pos.forEach(key => {
        let value = props[key]
        if (typeof value === 'number') {
          if (key === 'span') {
            classes.push(`${ns}-${value}`)
          } else {
            classes.push(`${ns}-${key}-${value}`)
          }
        }
      })

      const sizes = ['xs', 'sm', 'md', 'lg', 'xl']
      sizes.forEach(key => {
        const value = props[key]
        if (typeof value === 'number') {
          classes.push(`${ns}-${key}-${value}`)
        }
      })

      return classes
    })

    return {
      style,
      classes
    }
  }
}
</script>

<style lang="scss">
@use 'sass:math';
@use 'sass:string';

$ns: "g-col";

@for $i from 0 through 24 {
  .#{$ns}-#{$i} {
    flex: 0 0 math.div($i, 24) * 100 * 1%;
  }
  .#{$ns}-offset-#{$i} {
    margin-left: math.div($i, 24) * 100 * 1%;
  }
  .#{$ns}-push-#{$i} {
    position: relative;
    left: math.div($i, 24) * 100 * 1%;
  }
  .#{$ns}-pull-#{$i} {
    position: relative;
    right: math.div($i, 24) * 100 * 1%;
  }
}


$sm: 768px !default;
$md: 992px !default;
$lg: 1200px !default;
$xl: 1920px !default;

$breakpoints: (
  xs: '(max-width: #{$sm})',
  sm: '(min-width: #{$sm})',
  md: '(min-width: #{$md})',
  lg: '(min-width: #{$lg})',
  xl: '(min-width: #{$xl})'
);

@mixin res($size, $map: $breakpoints) {
  @if map-has-key($map, $size) {
    @debug map-get($map, $size);
    @media only screen and #{map-get($map, $size)} {
      @content;
    }
  } @else {
    @warn "未定义的 col size：`#{$size}`";
  }
}

@mixin col-size($size) {
  @include res($size) {
    @for $i from 0 to 24 {
      .#{$ns}-#{$size}-#{$i} {
        flex: 0 0 math.div($i, 24) * 100 * 1%;
      }
    }
  }
}

@include col-size(xs);
@include col-size(sm);
@include col-size(md);
@include col-size(lg);
@include col-size(xl);

.g-col {
  box-sizing: border-box;
}
</style>
