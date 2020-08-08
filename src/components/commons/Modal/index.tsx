import React, { ReactElement } from 'react'
import Modal from 'react-modal'
import style from './style.module.scss'
interface Props extends Ichildren {
  ifShowModal: any;
  bac?: string;
}

function MyModal({ ifShowModal, bac, children }: Props): ReactElement {
  return (
    <div style={{ width: '300px', position: 'absolute' }}>
      <Modal isOpen={ifShowModal.state} className={style.overlay} portalClassName={style.modal} appElement={document.body} overlayClassName={style.bac}>
        <div className={style.windowContainer}>
          <div style={{ background: `url(${bac}) no-repeat center` }} className={style.window} >
            <div className={style.children}>
              {children}
            </div>
          </div>
          <div className={style.close} onClick={() => ifShowModal.setFalse()}></div>
        </div>
      </Modal>
    </div>
  )
}

export default MyModal
