import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Form, Input, Button, Slider, Checkbox, Row } from 'antd'
import { FilterOutlined } from '@ant-design/icons'

// COMPONENTS
import { PropertyList } from 'components'

// STORE
import { Creators as PropertyCreators } from 'store/sagas/property'

// TYPES
import { State } from 'store/types'
import { FilterProps as Props } from './types'

// STYLES
import './Filters.scss'

function Filters(props: Props): JSX.Element | null {
  const { loading, currentLocation } = props
  const dispatch = useDispatch()
  const { properties } = useSelector((state: State) => state.propertyState)
  const [priceLabel, setPriceLabel] = useState('($1000 - $30000)')
  const [form] = Form.useForm()
  const { t } = useTranslation()

  const onFinishFilter = (values: any) => {
    const { lat, lng } = currentLocation
    const { price, keyword, rentalType, pets } = values
    dispatch(
      PropertyCreators.requestProperties({
        min: price[0],
        max: price[1],
        keyword,
        rentalType,
        pets,
        lat,
        lng,
        zoom: 15,
      })
    )
  }

  const onChangePriceSlider = (value: any) => {
    const [min, max] = value
    setPriceLabel(`($${min} - $${max})`)
  }

  const getPriceLabel = (): JSX.Element => {
    return (
      <span>
        {t('filters.price.title')} &nbsp;
        <small>{priceLabel}</small>
      </span>
    )
  }

  return (
    <div className="Filters">
      <div className="Filters__title">
        <FilterOutlined />
        <span>{t('filters.title')}</span>
      </div>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinishFilter}
        initialValues={{
          keyword: '',
          pets: [],
          rentalType: [],
          price: [1000, 30000],
        }}
      >
        <Form.Item
          className="Filters__formItem"
          label={t('filters.keywords.title')}
          name="keyword"
        >
          <Input />
        </Form.Item>
        <Form.Item
          className="Filters__formItem"
          label={getPriceLabel()}
          name="price"
        >
          <Slider max={30000} range step={100} onChange={onChangePriceSlider} />
        </Form.Item>
        <Form.Item
          className="Filters__formItem"
          label={t('filters.rentalType.title')}
          name="rentalType"
        >
          <Checkbox.Group>
            <Checkbox value="furnished">
              {t('filters.rentalType.furnished')}
            </Checkbox>
            <Checkbox value="unfurnished">
              {t('filters.rentalType.unfurnished')}
            </Checkbox>
          </Checkbox.Group>
        </Form.Item>
        <Form.Item
          className="Filters__formItem"
          label={t('filters.pets.title')}
          name="pets"
        >
          <Checkbox.Group>
            <Row>
              <Checkbox value="may-be-considered">
                {t('filters.pets.mayBeConsidered')}
              </Checkbox>
            </Row>
            <Row>
              <Checkbox value="no-pets-allowed">
                {t('filters.pets.noPets')}
              </Checkbox>
            </Row>
            <Row>
              <Checkbox value="pet-friendly">
                {t('filters.pets.petFriendly')}
              </Checkbox>
            </Row>
          </Checkbox.Group>
        </Form.Item>
        <Form.Item>
          <Button loading={loading} block type="primary" htmlType="submit">
            {t('filters.submitButton')}
          </Button>
        </Form.Item>
      </Form>
      {!loading && <PropertyList properties={properties} />}
    </div>
  )
}

export { Filters }
