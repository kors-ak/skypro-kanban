import { useState, useEffect } from 'react'
import {
  SBlock,
  SCalendar,
  SCell,
  SCells,
  SContent,
  SDayName,
  SDaysNames,
  SMonth,
  SNav,
  SNavAction,
  SNavActions,
  SPeriod,
  SText,
  STitle,
} from './Calendar.Styled'

const Calendar = ({ dateControl = '', disable }) => {
  const [currentDate, setCurrentDate] = useState(
    dateControl ? new Date(dateControl) : new Date(),
  )
  const [selectedDate, setSelectedDate] = useState(
    dateControl ? new Date(dateControl) : null,
  )
  const [days, setDays] = useState([])

  const isSameDay = (date1, date2) => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    )
  }
  useEffect(() => {
    const generateCalendar = () => {
      const year = currentDate.getFullYear()
      const month = currentDate.getMonth()
      const firstDay = new Date(year, month, 1)
      const lastDay = new Date(year, month + 1, 0)

      const startDayOfWeek = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1

      const daysArray = []

      // Добавляем дни предыдущего месяца
      const prevMonthLastDay = new Date(year, month, 0).getDate()
      for (let i = startDayOfWeek - 1; i >= 0; i--) {
        daysArray.push({
          day: prevMonthLastDay - i,
          isOtherMonth: true,
          date: new Date(year, month - 1, prevMonthLastDay - i),
        })
      }

      // Добавляем дни текущего месяца
      for (let i = 1; i <= lastDay.getDate(); i++) {
        const date = new Date(year, month, i)
        daysArray.push({
          day: i,
          isCurrentMonth: true,
          isToday: isSameDay(date, new Date()),
          isSelected: selectedDate && isSameDay(date, selectedDate),
          date,
        })
      }

      setDays(daysArray)
    }
    generateCalendar()
  }, [currentDate, selectedDate])

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1),
    )
  }

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1),
    )
  }

  const handleDayClick = (dayData) => {
    if (disable || dayData.isOtherMonth) return

    setSelectedDate(dayData.date)
  }

  return (
    <SCalendar>
      <STitle>Даты</STitle>
      <SBlock>
        <SNav>
          <SMonth>
            {currentDate.toLocaleString('ru', {
              month: 'long',
              year: 'numeric',
            })}
          </SMonth>
          <SNavActions>
            <SNavAction data-action="prev" onClick={handlePrevMonth}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="11"
                viewBox="0 0 6 11"
              >
                <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
              </svg>
            </SNavAction>
            <SNavAction data-action="next" onClick={handleNextMonth}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="11"
                viewBox="0 0 6 11"
              >
                <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
              </svg>
            </SNavAction>
          </SNavActions>
        </SNav>
        <SContent>
          <SDaysNames>
            <SDayName>пн</SDayName>
            <SDayName>вт</SDayName>
            <SDayName>ср</SDayName>
            <SDayName>чт</SDayName>
            <SDayName>пт</SDayName>
            <SDayName $isWeekend>сб</SDayName>
            <SDayName $isWeekend>вс</SDayName>
          </SDaysNames>
          <SCells>
            {days.map((day, index) => (
              <SCell
                key={index}
                $isOtherMonth={day.isOtherMonth}
                $isToday={day.isToday}
                $isSelected={day.isSelected}
                onClick={() => handleDayClick(day)}
                style={{ cursor: day.isOtherMonth ? 'default' : 'pointer' }}
              >
                {day.day}
              </SCell>
            ))}
          </SCells>
        </SContent>

        <input
          type="hidden"
          id="datepick_value"
          value={
            selectedDate
              ? selectedDate
                  .toLocaleDateString('ru-RU', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                  })
                  .replace(/\./g, '.')
              : ''
          }
        />
        <SPeriod>
          <SText>
            {selectedDate ? 'Срок исполнения: ' : `Выберите срок исполнения.`}
            <span>
              {selectedDate
                ? selectedDate.toLocaleDateString('ru-RU', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                  })
                : ''}
            </span>
          </SText>
        </SPeriod>
      </SBlock>
    </SCalendar>
  )
}

export default Calendar
