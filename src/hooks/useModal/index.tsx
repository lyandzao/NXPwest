import React, { ReactElement, useCallback } from 'react'

import MyModal from '@/components/commons/Modal'

const useModal = (ele: ReactElement, bac: any,ifShowModal:any) => {
  const modal = () => <MyModal ifShowModal={ifShowModal} children={ele} bac={bac}/>
  return modal
}

export default useModal