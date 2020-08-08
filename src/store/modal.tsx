import React from 'react'

import { createContainer } from "unstated-next"
import { useBoolean } from '@umijs/hooks'
import LoginBac from '@/assets/images/login_modal_bac.png';
import NormalBac from '@/assets/images/normal_modal_bac.png';
import Login from '@/components/modals/LoginModal';
import Signup from '@/components/modals/SignupModal';
import UpdatePwd from '@/components/modals/UpdatePwdModal';
import { useModal } from '@/hooks';

function useGlobalModal() {
  const showLoginModal = useBoolean(false)
  const showSignupModal = useBoolean(false)
  const showUpdatePwdModal = useBoolean(false)
  const SignupModal = useModal(<Signup />, NormalBac, showSignupModal)
  const LoginModal = useModal(<Login />, LoginBac, showLoginModal)
  const UpdatePwdModal = useModal(<UpdatePwd />, NormalBac, showUpdatePwdModal)
  const Modal = () => (
    <div>
      <SignupModal />
      <LoginModal />
      <UpdatePwdModal />
    </div>
  )
  return { showLoginModal, showSignupModal, showUpdatePwdModal, Modal }
}

let Modal = createContainer(useGlobalModal)

export default Modal