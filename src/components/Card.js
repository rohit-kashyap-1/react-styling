import React from 'react'
import styles from '../assets/css/Card.module.css'

export default function Card(props) {
  return (
    <div className={styles.card}>
      <img src='https://img.traveltriangle.com/blog/wp-content/uploads/2017/02/Travel-tips-Hong-Kong-400x250.jpg' className='img-fluid mb-3' />
      <h4>{props.title}</h4>

    </div>
  )
}
