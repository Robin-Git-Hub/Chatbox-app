import React from 'react'

const Message = ({pseudo, message, isUser}) => {
  if (isUser(pseudo)){
    return (
      <div className='user-message'>
        {message}
      </div>
    )
  } else {
    return (
      <div className='not-user-message'>
      <strong> {pseudo} : </strong>{message}
    </div>
    )
  }
}

export default Message
