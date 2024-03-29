//import { setNotification } from '../reducers/notificationReducer'
import { useSelector } from 'react-redux'

const Notification = () => {
  const notification = useSelector(state => state.notification)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    display: ''
  }
  if(notification === '')
    style.display = 'none'

  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification