import { Link, useParams } from 'react-router-dom'
import Calendar from '../../Calendar/Calendar.jsx'
import { getTaskById } from '../../../services/api.js'
import { useState, useEffect, useContext } from 'react'
import { AuthContext, TasksContext } from '../../../context/ContextApi.js'
import {
  SBlock,
  SBtnBg,
  SBtnBor,
  SBtnContainer,
  SBtnGroup,
  SContainer,
  SContent,
  SForm,
  SFormBlock,
  SFormLabel,
  SPopBrowse,
  SStatus,
  SStatusPar,
  SStatusTheme,
  SStatusThemes,
  STextarea,
  SThemeBlock,
  SThemeDown,
  SThemePar,
  SThemeTop,
  STitle,
  STopBlock,
  SWrap,
} from './PopBrowse.styled.js'

const PopBrowse = () => {
  const { user } = useContext(AuthContext)
  const { handleDeleteTask, handleEditTask, task, setTask, posting } =
    useContext(TasksContext)
  const { id } = useParams()

  const [newTask, setNewTask] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [edit, setEdit] = useState(false)

  const handleDateSelect = (selectedDate) => {
    setNewTask((prev) => ({ ...prev, date: selectedDate }))
  }

  useEffect(() => {
    const getTask = async () => {
      try {
        setLoading(true)
        const data = await getTaskById({
          token: user.token,
          id: id,
        })
        setTask(data.data.task)
      } catch (err) {
        if (err.status === 404) {
          setError('Задача не найдена.')
        } else if (
          err.message === 'Failed to fetch' ||
          err.message === 'Network Error'
        ) {
          setError('Кажется, у вас пропал интернет, попробуйте позже.')
        } else {
          setError('Что-то пошло не так, попробуйте позже.')
        }
      } finally {
        setLoading(false)
      }
    }
    getTask()
  }, [id, setTask, user])

  if (loading || error)
    return (
      <SPopBrowse>
        <SContainer>
          <SBlock>
            <SContent>
              <STitle>{error ? `${error}` : `Загружаем задачу...`}</STitle>
              {error && (
                <SBtnContainer>
                  <SBtnBg>
                    <Link to="/">Закрыть</Link>
                  </SBtnBg>
                </SBtnContainer>
              )}
            </SContent>
          </SBlock>
        </SContainer>
      </SPopBrowse>
    )

  if (posting)
    return (
      <SPopBrowse>
        <SContainer>
          <SBlock>
            <SContent>
              <STitle>Сохраняем изменения...</STitle>
            </SContent>
          </SBlock>
        </SContainer>
      </SPopBrowse>
    )

  return (
    <SPopBrowse>
      <SContainer>
        <SBlock>
          <SContent>
            <STopBlock>
              <STitle>{task.title}</STitle>
              <SThemeTop $cardTheme={task.topic || 'default'}>
                <p>{task.topic}</p>
              </SThemeTop>
            </STopBlock>
            <SStatus>
              <SStatusPar>Статус</SStatusPar>
              {edit ? (
                <SStatusThemes>
                  {[
                    'Без статуса',
                    'Нужно сделать',
                    'В работе',
                    'Тестирование',
                    'Готово',
                  ].map((status) => (
                    <SStatusTheme
                      key={status}
                      $selected={newTask.status === status}
                      onClick={() =>
                        setNewTask((prev) => ({ ...prev, status }))
                      }
                    >
                      <p>{status}</p>
                    </SStatusTheme>
                  ))}
                </SStatusThemes>
              ) : (
                <SStatusThemes>
                  <SStatusTheme $selected>
                    <p>{task.status}</p>
                  </SStatusTheme>
                </SStatusThemes>
              )}
            </SStatus>
            <SWrap>
              <SForm>
                <SFormBlock>
                  <SFormLabel htmlFor="textArea01">Описание задачи</SFormLabel>
                  <STextarea
                    name="text"
                    id="textArea01"
                    readOnly={!edit}
                    onChange={(e) =>
                      setNewTask((prev) => ({
                        ...prev,
                        description: e.target.value,
                      }))
                    }
                    value={edit ? newTask.description : task.description}
                  />
                </SFormBlock>
              </SForm>

              <Calendar
                dateControl={edit ? newTask.date : task.date}
                onDateSelect={handleDateSelect}
                disable={!edit}
              />
            </SWrap>
            <SThemeDown>
              <SThemePar>Категория</SThemePar>
              <SThemeBlock $cardTheme={task.topic || 'default'}>
                <p>{task.topic}</p>
              </SThemeBlock>
            </SThemeDown>
            {edit ? (
              <SBtnContainer>
                <SBtnGroup>
                  <SBtnBg>
                    <a
                      onClick={(e) => {
                        setEdit(false)
                        setTask(newTask)
                        handleEditTask(e, id, newTask)
                      }}
                    >
                      Сохранить
                    </a>
                  </SBtnBg>
                  <SBtnBor>
                    <a
                      onClick={() => {
                        setNewTask({ ...task })
                        setEdit(false)
                      }}
                    >
                      Отменить
                    </a>
                  </SBtnBor>
                  <SBtnBor>
                    <a onClick={(e) => handleDeleteTask(e, id, setError)}>
                      Удалить задачу
                    </a>
                  </SBtnBor>
                </SBtnGroup>
                <SBtnBg>
                  <Link
                    to="/"
                    onClick={() =>
                      setTask({
                        title: '',
                        description: '',
                        topic: '',
                        date: '',
                      })
                    }
                  >
                    Закрыть
                  </Link>
                </SBtnBg>
              </SBtnContainer>
            ) : (
              <SBtnContainer>
                <SBtnGroup>
                  <SBtnBor>
                    <a
                      onClick={() => {
                        setEdit(true)
                        setNewTask({ ...task })
                      }}
                    >
                      Редактировать задачу
                    </a>
                  </SBtnBor>
                  <SBtnBor onClick={(e) => handleDeleteTask(e, id, setError)}>
                    Удалить задачу
                  </SBtnBor>
                </SBtnGroup>
                <SBtnBg>
                  <Link
                    to="/"
                    onClick={() =>
                      setTask({
                        title: '',
                        description: '',
                        topic: '',
                        date: '',
                      })
                    }
                  >
                    Закрыть
                  </Link>
                </SBtnBg>
              </SBtnContainer>
            )}
          </SContent>
        </SBlock>
      </SContainer>
    </SPopBrowse>
  )
}

export default PopBrowse
