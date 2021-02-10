import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

declare global {
  interface Window {
    LL_SDK_IS_READY?: boolean
    locallogic: any
  }
}

interface ParamsProps {
  id: string
}

function PropertyData(): JSX.Element {
  const { id } = useParams<ParamsProps>()

  useEffect(() => {
    //var llSdkInterval = window.setInterval(function () {
    setTimeout(() => {
      if (window.LL_SDK_IS_READY && window.locallogic) {
        window.locallogic?.LocalContent('local-content-widget', {
          lat: 49.27669566905387,
          lng: -123.11949003068801,
          locale: 'en',
          designId: 'll-2019',
          basemap: 'osm',
          color: '#b82528',
          maxInnerWidth: 240,
          houseIcon:
            '<img src="https://rentitfurnished.com/vancouver/wp-content/themes/rentitfurnished/img/RIF-icon.svg" style="height: 40px !important" />',
        })
        //window.clearInterval(llSdkInterval);
      }
    }, 1000)

    //}, 100);
  }, [])

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}> {id}</h2>
      <div className="PropertyData">
        <div id="loading"></div>
      </div>
    </div>
  )
}

export { PropertyData }
