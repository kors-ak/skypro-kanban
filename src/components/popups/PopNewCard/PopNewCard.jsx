import Calendar from '../../Calendar/Calendar.jsx'
import { useContext } from 'react'
import { TasksContext } from '../../../context/ContextApi.js'
import {
  SBlock,
  SButton,
  SCategories,
  SCatText,
  SContainer,
  SContent,
  SForm,
  SFormBlock,
  SInput,
  SLabel,
  SLink,
  SPopNewCard,
  STextarea,
  STheme,
  SThemes,
  STitle,
  SWrap,
} from './PopNewCard.styled.js'

const PopNewCard = () => {
  const { handlePostTask, posting, task, setTask, errors, setErrors } =
    useContext(TasksContext)

  const categories = [
    { name: 'Web Design', color: 'orange' },
    { name: 'Research', color: 'green' },
    { name: 'Copywriting', color: 'purple' },
  ]

  const handleDateSelect = (selectedDate) => {
    setTask((prev) => ({ ...prev, date: selectedDate }))
    setErrors({ ...errors, date: false })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setTask((prev) => ({ ...prev, [name]: value }))
    setErrors({ ...errors, [name]: false })
  }

  return (
    <SPopNewCard>
      <SContainer>
        <SBlock>
          <SContent>
            <STitle>Создание задачи</STitle>
            <SLink
              to="/"
              onClick={() => {
                setErrors({
                  title: '',
                  description: '',
                  topic: '',
                  date: '',
                })
                setTask({
                  title: '',
                  description: '',
                  topic: '',
                  date: '',
                })
              }}
            >
              &#10006;
            </SLink>
            <SWrap>
              <SForm disabled={posting}>
                <SFormBlock>
                  <SLabel htmlFor="formTitle">Название задачи</SLabel>
                  <SInput
                    type="text"
                    name="title"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                    onChange={(e) => handleChange(e)}
                    value={task.title}
                    style={
                      errors.title
                        ? { border: '0.7px solid rgba(248, 77, 77, 1)' }
                        : {}
                    }
                    onChange={(e) => handleChange(e)}
                  />
                </SFormBlock>
                <SFormBlock>
                  <SLabel htmlFor="textArea">Описание задачи</SLabel>
                  <STextarea
                    name="description"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    onChange={(e) => handleChange(e)}
                    value={task.description}
                    style={
                      errors.description
                        ? { border: '0.7px solid rgba(248, 77, 77, 1)' }
                        : {}
                    }
                  ></STextarea>
                </SFormBlock>
              </SForm>

              <Calendar
                $isPopCalendar
                dateControl={task.date}
                onDateSelect={handleDateSelect}
                $error={errors.date}
              />
            </SWrap>
            <SCategories>
              <SCatText>Категория</SCatText>
              <SThemes
                style={
                  errors.topic
                    ? {
                        border: '0.7px solid rgba(248, 77, 77, 1)',
                        borderRadius: '16px',
                      }
                    : {}
                }
              >
                {categories.map((cat) => (
                  <STheme
                    key={cat.name}
                    $cardTheme={cat.name}
                    $active={task.topic === cat.name}
                    onClick={() => {
                      setTask((prev) => ({ ...prev, topic: cat.name }))
                      setErrors({ ...errors, topic: false })
                    }}
                    style={{ cursor: 'pointer' }}
                  >
                    <p>{cat.name}</p>
                  </STheme>
                ))}
              </SThemes>
            </SCategories>
            <SButton
              onClick={(e) => {
                handlePostTask(e, task)
              }}
            >
              Создать задачу
            </SButton>
          </SContent>
        </SBlock>
      </SContainer>
    </SPopNewCard>
  )
}

export default PopNewCard
