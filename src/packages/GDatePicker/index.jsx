import { defineComponent, ref, computed, shallowRef, Transition, withDirectives, watch, triggerRef } from 'vue'

import GButton from '../GButton/index.vue'
import GIcon from '../GIcon/index.vue'
import { CloseCircleFilled } from '@vicons/antd'
import GInput from '../GInput/index.vue'
import Actions from './actions'
import Month from './month'
import Weekdays from './weekdays'

import { throttle } from 'lodash-es'

import vClickOutside from '../../directives/clickOutside'

import './index.scss'

import dayjs from 'dayjs'
import useTransition from './useTransition'

export const ns = 'g-date-picker'

export default defineComponent({
  name: 'GDatePicker',

  props: {
    modelValue: {
      type: [String, Date, Array]
    },
    format: {
      type: String,
      default: 'YYYY-MM-DD'
    },
    type: {
      type: String,
      validator: (v) => ['daterange'].includes(v)
    }
  },

  emits: ['update:modelValue'],

  setup(props, { emit }) {
    const startDate = shallowRef(dayjs())
    const endDate = shallowRef(dayjs().add(1, 'month'))
    const visible = ref(false)
    const inputRef = ref(null)

    let rangeStartDate = shallowRef(null)
    let rangeEndDate = shallowRef(null)

    const isTypeDateRange = computed(() => props.type === 'daterange')

    watch(
      () => props.modelValue,
      (val) => {
        if (isTypeDateRange.value) {
          if (val[0]) rangeStartDate.value = dayjs(val[0])
          if (val[1]) rangeEndDate.value = dayjs(val[1])
        } else {
          rangeStartDate.value = val ? dayjs(val) : null
        }
      }
    )

    function toggleShowCalendar() {
      visible.value = !visible.value
      if (!visible.value) onClose()
    }
    function onClose() {
      visible.value = false
      if (isStartSelect) {
        isStartSelect = false
        emit('update:modelValue', [])
      }
    }

    let isStartSelect = false
    function onDayClick(date, e) {
      if (isTypeDateRange.value) {
        if (isStartSelect) {
          isStartSelect = false
          dayjs(date).isBefore(props.modelValue[0])
            ? emit('update:modelValue', [date.toDate(), props.modelValue[0]])
            : emit('update:modelValue', [props.modelValue[0], date.toDate()])
          onClose()
        } else {
          isStartSelect = true
          emit('update:modelValue', [date.toDate()])
        }
      } else {
        emit('update:modelValue', date.toDate())
        onClose()
      }
    }

    const { beforeEnter, enter, afterEnter, leave, afterLeave } = useTransition()

    function clearDate() {
      emit('update:modelValue', isTypeDateRange.value ? [] : '')
      rangeStartDate.value = null
      rangeEndDate.value = null
      onClose()
    }
    function setDateToCurrentDate() {
      emit('update:modelValue', new Date())
      onClose()
    }

    function genSingleCalendar(date) {
      function onDoubleLeftClick() {
        date.value = date.value.subtract(1, 'year')
      }
      function onLeftClick() {
        date.value = date.value.subtract(1, 'month')
      }
      function onDoubleRightClick() {
        date.value = date.value.add(1, 'year')
      }
      function onRightClick() {
        date.value = date.value.add(1, 'month')
      }

      function genMonth(date, i) {
        return (
          <Month
            date={date}
            key={i}
            onDayClick={onDayClick}
            {...props}
            rangeStartDate={rangeStartDate}
            rangeEndDate={rangeEndDate}
            isStartSelect={isStartSelect}
          ></Month>
        )
      }

      return (
        <div>
          <Actions
            date={date}
            onLeftClick={onLeftClick}
            onRightClick={onRightClick}
            onDoubleLeftClick={onDoubleLeftClick}
            onDoubleRightClick={onDoubleRightClick}
          />
          <Weekdays />
          <div class={[ns + '__body']}>{genMonth(date)}</div>
        </div>
      )
    }

    const calendarWrapperRef = ref(null)
    function onMousemove(e) {
      if (isStartSelect) {
        const isDayTarget =
          e.target.classList.contains('g-date-picker__day') ||
          e.target.parentElement.classList.contains('g-date-picker__day')
        if (isDayTarget) {
          rangeEndDate.value = dayjs(e.target.dataset.date || e.target.parentElement.dataset.date)
        }
      }
    }
    const throttledMousemove = throttle(onMousemove, 10)

    function getCalendar() {
      return (
        <Transition
          onBeforeEnter={beforeEnter}
          onEnter={enter}
          onAfterEnter={afterEnter}
          onLeave={leave}
          onAfterLeave={afterLeave}
        >
          {visible.value ? (
            <div class={[ns]}>
              <div
                ref={calendarWrapperRef}
                class={[ns + '__calendar-wrapper', { divider: isTypeDateRange.value }]}
                onMousemove={throttledMousemove}
              >
                {genSingleCalendar(startDate)}
                {isTypeDateRange.value && genSingleCalendar(endDate)}
              </div>

              <div class={[ns + '__footer']}>
                <GButton size="small" onClick={clearDate}>
                  清除
                </GButton>
                {isTypeDateRange.value ? null : (
                  <GButton size="small" onClick={setDateToCurrentDate}>
                    此刻
                  </GButton>
                )}

                <GButton size="small" type="primary" onClick={onClose}>
                  确认
                </GButton>
              </div>
            </div>
          ) : null}
        </Transition>
      )
    }

    return {
      getCalendar,
      startDate,
      toggleShowCalendar,
      onClose,
      inputRef,
      isTypeDateRange,
      clearDate
    }
  },

  render() {
    const { modelValue, format, inputRef, onClose, type, isTypeDateRange, clearDate } = this

    const startDateText =
      type === 'daterange'
        ? modelValue[0]
          ? dayjs(modelValue[0]).format(format)
          : ''
        : modelValue
        ? dayjs(modelValue).format(format)
        : ''
    const endDateText = type === 'daterange' ? (modelValue[1] ? dayjs(modelValue[1]).format(format) : '') : ''

    const clearIconShow = computed(() => {
      if (isTypeDateRange) {
        return modelValue.length ? modelValue?.every((v) => !!v) : false
      } else {
        return !!modelValue
      }
    })

    return withDirectives(
      <div class={[ns + '__wrapper']}>
        <div class={[ns + '__input-wrapper']}>
          <GInput class={[ns + '__input']} onClick={this.toggleShowCalendar} modelValue={startDateText} />
          {isTypeDateRange ? (
            <>
              <span>至</span>
              <GInput class={[ns + '__input']} onClick={this.toggleShowCalendar} modelValue={endDateText} />
            </>
          ) : null}

          {clearIconShow.value && (
            <GIcon class={ns + '__clear-icon'} onClick={clearDate}>
              <CloseCircleFilled />
            </GIcon>
          )}
        </div>
        {this.getCalendar()}
      </div>,
      [[vClickOutside, onClose]]
    )
  }
})
