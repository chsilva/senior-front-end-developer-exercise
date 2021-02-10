export interface FormLoginValues {
  username: string
  password: string
}

export interface FormLoginModalProps {
  visible: boolean
  fnClose: () => void
}
