import { ns } from './index.jsx'

const weekdays = ['日', '一', '二', '三', '四', '五', '六']

export default {
  render() {
    return (
      <div class={[ns + '__weekdays']}>
        {weekdays.map((day) => {
          return <div class={ns + '__weekday'}>{day}</div>
        })}
      </div>
    )
  }
}
