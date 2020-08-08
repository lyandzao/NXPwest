import { useState } from 'react'
import { useImmer } from 'use-immer'
import { createContainer } from "unstated-next"

export interface Iuser {
  teamName?: string;
  schoolName?: string;
  members?: string;
  team_captain?: {
    phone?: string;
    id?: string;
  };
  type_name?: {
    typeId?: string;
    type?: string;
    teamNumber?: string;
  }

}

function useUser() {
  const [isLogin, setIsLogin] = useState(false)
  const [info, setInfo] = useImmer<Iuser>({})
  return { isLogin, setIsLogin, info, setInfo }
}

let user = createContainer(useUser)

export default user