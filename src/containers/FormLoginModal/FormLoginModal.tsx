import { Modal, Form, Input, Button } from 'antd'
import { useTranslation } from 'react-i18next'
import { useSelector, useDispatch } from 'react-redux'

// STORE
import { Creators as LoginCreators } from 'store/sagas/login'

// TYPES
import { FormLoginModalProps, FormLoginValues } from './types'
import { State } from 'store/types'

// STYLES
import './FormLoginModal.scss'

function FormLoginModal(props: FormLoginModalProps): JSX.Element | null {
  const dispatch = useDispatch()
  const { loading, session } = useSelector((state: State) => state.loginState)
  const [form] = Form.useForm()
  const { t } = useTranslation()

  if (session) {
    return null
  }

  const onFinish = (values: FormLoginValues) => {
    dispatch(LoginCreators.doLogin(values))
  }

  return (
    <Modal
      title={t('formLoginModal.title')}
      visible={props.visible}
      onCancel={props.fnClose}
      footer={null}
      centered
    >
      <Form
        form={form}
        onFinish={onFinish}
        className="FormLoginModal"
        layout="vertical"
        initialValues={{
          username: 'fakeusername',
          password: 'fakepassword',
        }}
      >
        <Form.Item
          label={t('formLoginModal.inputUsername')}
          name="username"
          rules={[
            { required: true, message: t('formLoginModal.inputUsernameError') },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={t('formLoginModal.inputPassword')}
          name="password"
          rules={[
            {
              required: true,
              message: t('formLoginModal.inputPasswordError'),
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <div className="FormLoginModal__actions">
          <Button onClick={props.fnClose}>
            {t('formLoginModal.btnCancelText')}
          </Button>
          <Button loading={loading} type="primary" htmlType="submit">
            {t('formLoginModal.btnOkText')}
          </Button>
        </div>
      </Form>
    </Modal>
  )
}

export { FormLoginModal }
