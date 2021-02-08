import { useTranslation } from 'react-i18next'

// STYLES
import './Filters.scss'

function Filters() {
  const { t } = useTranslation()

  return (
    <div className="Filters">
      <span className="Filters__title">{t('filters.title')}</span>
      <input />
    </div>
  )
}

export { Filters }
