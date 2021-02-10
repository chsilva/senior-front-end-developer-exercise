import classnames from 'classnames'

// TYPES
import { Props as ButtonProps } from './types'

// STYLES
import './Button.scss'

function Button(props: ButtonProps): JSX.Element {
  const { color, text, block, onClick } = props

  const buttonClasses = classnames('Button', {
    'Button--block': block,
    [`Button--${color}`]: !!color,
  })

  return (
    <button onClick={onClick} className={buttonClasses}>
      {text}
    </button>
  )
}

export { Button }
