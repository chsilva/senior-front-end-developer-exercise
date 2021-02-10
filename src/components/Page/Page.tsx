// TYPES
import { Props as PageProps } from './types'

// STYLES
import './Page.scss'

function Page(props: PageProps): JSX.Element {
  return <main className="Page">{props.children}</main>
}

export { Page }
