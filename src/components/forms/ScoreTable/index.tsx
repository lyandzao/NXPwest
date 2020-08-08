import React, { ReactElement } from 'react'
import ScoreSideBar from '@/components/bars/ScoreSideBar'

interface Props {
  types:string[]
}

function ScoreTable({types}: Props): ReactElement {
  return (
    <div>
      <ScoreSideBar types={types}/>
    </div>
  )
}

export default ScoreTable
