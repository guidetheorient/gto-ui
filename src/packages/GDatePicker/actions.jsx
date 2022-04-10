import { LeftOutlined, RightOutlined, DoubleLeftOutlined, DoubleRightOutlined } from '@vicons/antd'
import GIcon from '../GIcon/index.vue'

import { ns } from './index.jsx'

function wrapperGIcon(comp, onClick) {
  return (
    <GIcon class={[ns + '__icon']} onClick={onClick}>
      <comp />
    </GIcon>
  )
}

export default {
  props: {
    // dayjs ref
    date: Object
  },

  render() {
    const { date, $emit } = this

    return (
      <div class={[ns + '__actions']}>
        <div class={ns + '__actions-left'}>
          {wrapperGIcon(DoubleLeftOutlined, () => $emit('doubleLeftClick'))}
          {wrapperGIcon(LeftOutlined, () => $emit('leftClick'))}
        </div>
        <div class={ns + '__actions-text'}>{date.value.format('YYYY/MM/DD')}</div>
        <div class={ns + '__actions-right'}>
          {wrapperGIcon(RightOutlined, () => $emit('rightClick'))}
          {wrapperGIcon(DoubleRightOutlined, () => $emit('doubleRightClick'))}
        </div>
      </div>
    )
  }
}
