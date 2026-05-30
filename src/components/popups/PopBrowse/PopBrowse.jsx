import { Link, useParams, useNavigate } from 'react-router-dom'
import Calendar from '../../Calendar/Calendar.jsx'
import { deleteTask, getTaskById } from '../../../services/api.js'
import { useState, useEffect } from 'react'
import { formatDate, sanitizeHtml } from '../../../utils.js'

const PopBrowse = ({ setTasks, user }) => {
  const { id } = useParams()

  const [task, setTask] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getTask = async () => {
      try {
        setLoading(true)
        const data = await getTaskById({ token: user.token, id: id })
        setTask(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    getTask()
  }, [id, user])

  const getThemeClass = (topic) => {
    switch (topic) {
      case 'Web Design':
        return '_orange'
      case 'Research':
        return '_green'
      case 'Copywriting':
        return '_purple'
      default:
        return '_gray'
    }
  }

  const navigate = useNavigate()
  const handleDeleteTask = async (e) => {
    e.preventDefault()

    try {
      const updatedTasks = await deleteTask({ token: user.token, id: id })
      setTasks(updatedTasks)
      navigate('/')
    } catch (error) {
      setError(error.message)
    }
  }

  if (loading || error)
    return (
      <div className="pop-browse">
        <div className="pop-browse__container">
          <div className="pop-browse__block">
            <div className="pop-browse__content">
              <h3 className="pop-browse__ttl">
                {error ? `${error}` : `Загрузка задачи...`}
              </h3>
              {error && (
                <div className="pop-browse__btn-browse ">
                  <button className="btn-browse__close _btn-bg _hover01">
                    <Link to="/">Закрыть</Link>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )

  return (
    <div className="pop-browse" id="popBrowse">
      <div className="pop-browse__container">
        <div className="pop-browse__block">
          <div className="pop-browse__content">
            <div className="pop-browse__top-block">
              <h3 className="pop-browse__ttl">{sanitizeHtml(task.title)}</h3>
              <div
                className={`categories__theme theme-top ${getThemeClass(task.topic)} _active-category`}
              >
                <p className={getThemeClass(task.topic)}>
                  {sanitizeHtml(task.topic)}
                </p>
              </div>
            </div>
            <div className="pop-browse__status status">
              <p className="status__p subttl">Статус</p>
              <div className="status__themes">
                <div className="status__theme _hide">
                  <p>Без статуса</p>
                </div>
                <div className="status__theme _gray">
                  <p className="_gray">{task.status}</p>
                </div>
                <div className="status__theme _hide">
                  <p>В работе</p>
                </div>
                <div className="status__theme _hide">
                  <p>Тестирование</p>
                </div>
                <div className="status__theme _hide">
                  <p>Готово</p>
                </div>
              </div>
            </div>
            <div className="pop-browse__wrap">
              <form
                className="pop-browse__form form-browse"
                id="formBrowseCard"
                action="#"
              >
                <div className="form-browse__block">
                  <label htmlFor="textArea01" className="subttl">
                    Описание задачи
                  </label>
                  <textarea
                    className="form-browse__area"
                    name="text"
                    id="textArea01"
                    readOnly
                    value={sanitizeHtml(task.description)}
                  ></textarea>
                </div>
              </form>

              <Calendar disable dateControl={formatDate(task.date)} />
            </div>
            <div className="theme-down__categories theme-down">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__theme _orange _active-category">
                <p className="_orange">{task.topic}</p>
              </div>
            </div>
            <div className="pop-browse__btn-browse ">
              <div className="btn-group">
                <button className="btn-browse__edit _btn-bor _hover03">
                  <a href="#">Редактировать задачу</a>
                </button>
                <button
                  onClick={handleDeleteTask}
                  className="btn-browse__delete _btn-bor _hover03"
                >
                  Удалить задачу
                </button>
              </div>
              <button className="btn-browse__close _btn-bg _hover01">
                <Link to="/">Закрыть</Link>
              </button>
            </div>
            <div className="pop-browse__btn-edit _hide">
              <div className="btn-group">
                <button className="btn-edit__edit _btn-bg _hover01">
                  <a href="#">Сохранить</a>
                </button>
                <button className="btn-edit__edit _btn-bor _hover03">
                  <a href="#">Отменить</a>
                </button>
                <button
                  className="btn-edit__delete _btn-bor _hover03"
                  id="btnDelete"
                >
                  <a href="#">Удалить задачу</a>
                </button>
              </div>
              <button className="btn-edit__close _btn-bg _hover01">
                <a href="#">Закрыть</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopBrowse
