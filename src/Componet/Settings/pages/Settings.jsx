import React from 'react'
import './Settings.css' 

const Dashboard = () => {
  return (
    <div>
        <div className="Dashboard-container">
            <div className="Dashboard-login">
                <h4>Login kerak</h4>
            </div>
            <div className="Dashboard-korish">
                <h1>Settings uchun tizimga kiring.</h1>
            </div>
            <div className="Dashboard-rela">
                <p>Real buyurtma, chat, dashboard va Telegram xabarnoma uchun tizimga kiring yoki ro'yxatdan o'ting.</p>
            </div>
            <div className="Dashboard-button">
                <button>Sign In</button>
                <button>Sign Up</button>
            </div>
        </div>
    </div>
  )
}

export default Dashboard