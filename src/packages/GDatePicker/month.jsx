import { computed } from 'vue'

import dayjs from 'dayjs'
import isBetween from 'dayjs/plugin/isBetween'
dayjs.extend(isBetween)

import { ns } from './index.jsx'
import { isArray } from 'lodash-es'

export default {
  props: {
    // ref dayjs
    date: Object,
    modelValue: {},
    rangeStartDate: {},
    rangeEndDate: {},
    isStartSelect: {
      type: Boolean
    }
  },

  emits: ['dayClick'],

  setup(props, { emit }) {
    const days = computed(() => {
      const dateVal = props.date.value

      let rangeStartDate = dateVal.startOf('month')
      let rangeEndDate = dateVal.endOf('month')
      let ret = []

      for (let i = 0; i < rangeEndDate.date(); i++) {
        ret.push({ date: rangeStartDate.add(i, 'day') })
      }

      let startDay = rangeStartDate.day()
      let endDay = rangeEndDate.day()

      if (startDay) {
        for (let i = 1; i <= startDay; i++) {
          ret.unshift({ date: rangeStartDate.subtract(i, 'day'), type: 'disabled' })
        }
      }
      if (endDay !== 6) {
        for (let i = endDay; i < 6; i++) {
          ret.push({ date: rangeEndDate.add(i, 'day'), type: 'disabled' })
        }
      }

      return ret
    })

    function genDay({ date, type }, i) {
      const dayClass = getDayClass(date, i)

      return (
        <div
          data-date={date.format(props.format)}
          onClick={($event) => emit('dayClick', date, $event)}
          class={[ns + '__day', { disabled: type === 'disabled' }, dayClass]}
        >
          <span>{date.format('D')}</span>
        </div>
      )
    }

    function getDayClass(date, i) {
      let classes = {}

      if (date.isSame(dayjs(), 'day')) {
        classes.today = true
      }

      let value = isArray(props.modelValue) ? props.modelValue : [props.modelValue]
      if (value.some((_date) => _date && date.isSame(_date, 'day'))) {
        classes.active = true
      }

      let { isStartSelect, rangeStartDate, rangeEndDate } = props
      if (rangeEndDate.value) {
        let start = rangeStartDate.value
        let end = rangeEndDate.value
        if (start.isAfter(end)) {
          start = rangeEndDate.value
          end = rangeStartDate.value
        }
        if (date.isBetween(start, end, null, '[]')) {
          classes.covered = true
        }
        if (date.isSame(start, 'day')) {
          classes['start-date'] = true
        }
        if (date.isSame(end, 'day')) {
          classes['end-date'] = true
        }
      }

      return classes
    }

    function genDays() {
      return (
        <div ref="days" class={ns + '__days'}>
          {days.value.map(genDay)}
        </div>
      )
    }

    return {
      genDay,
      genDays,
      days
    }
  },

  render() {
    return <div class={ns + '__month'}>{this.genDays()}</div>
  }
}
