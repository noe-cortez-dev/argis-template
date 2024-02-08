import MapRenderer from './src/MapRenderer'
import './style.css'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>GeoJSONLayer!</h1>
    <p class="read-the-docs">
      <a href="https://developers.arcgis.com/javascript/latest/sample-code/layers-geojson/" target="_blank">
        GeoJSONLayer Documentation here.
      </a>
    </p>

    <div id="map" style="width: 100%; height: 600px;"></div>
  </div>
`

const mapRenderer = new MapRenderer()
mapRenderer.renderMap('map')
