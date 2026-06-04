import { Link } from 'react-router-dom'
import Calendar from '../../Calendar/Calendar.jsx'
import { useContext, useEffect } from 'react'
import { TasksContext } from '../../../context/ContextApi.js'

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

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <div className="pop-new-card" id="popNewCard">
      <div className="pop-new-card__container">
        <div className="pop-new-card__block">
          <div className="pop-new-card__content">
            <h3 className="pop-new-card__ttl">Создание задачи</h3>
            <Link
              to="/"
              className="pop-new-card__close"
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
            </Link>
            <div className="pop-new-card__wrap">
              <form disabled={posting} className="pop-new-card__form form-new">
                <div className="form-new__block">
                  <label htmlFor="formTitle" className="subttl">
                    Название задачи
                  </label>
                  <input
                    className="form-new__input"
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
                </div>
                <div className="form-new__block">
                  <label htmlFor="textArea" className="subttl">
                    Описание задачи
                  </label>
                  <textarea
                    className="form-new__area"
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
                  ></textarea>
                </div>
              </form>

              <Calendar
                $isPopCalendar
                dateControl={task.date}
                onDateSelect={handleDateSelect}
                $error={errors.date}
              />
            </div>
            <div className="pop-new-card__categories categories">
              <p className="categories__p subttl">Категория</p>
              <div
                className="categories__themes"
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
                  <div
                    key={cat.name}
                    className={`categories__theme _${cat.color} ${task.topic === cat.name ? '_active-category' : ''}`}
                    onClick={() => {
                      setTask((prev) => ({ ...prev, topic: cat.name }))
                      setErrors({ ...errors, topic: false })
                    }}
                    style={{ cursor: 'pointer' }}
                  >
                    <p className={`_${cat.color}`}>{cat.name}</p>
                  </div>
                ))}
              </div>
            </div>
            <button
              className="form-new__create _hover01"
              onClick={(e) => {
                handlePostTask(e, task)
              }}
            >
              Создать задачу
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopNewCard
