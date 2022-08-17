import { CreateEventParams } from '@/context/event-context'

export default function formatData({
  title,
  date,
  description,
  startAt,
  endAt
}: CreateEventParams) {
  const currentDate = new Date(date)
  const formatedDate = currentDate.toLocaleDateString('en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })

  return {
    title,
    description,
    date: formatedDate,
    startAt,
    endAt
  }
}
