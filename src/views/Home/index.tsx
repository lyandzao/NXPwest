import React, { ReactElement } from 'react'
import ThemeBlock from './Theme'
import ArchievementBlock from './Achievement'
import ServicesBlock from './Services'
import style from './style.module.scss'
interface Props {
  
}

function Home({ }: Props): ReactElement {
  return (
    <div className={style.container}>
      <ThemeBlock/>
      <ArchievementBlock/>
      <ServicesBlock/>
    </div>
  )
}

export default Home
