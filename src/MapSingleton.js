import esriConfig from '@arcgis/core/config'
import Map from '@arcgis/core/Map'
// import MapView from

esriConfig.apiKey = import.meta.env.VITE_ARCGIS_API_KEY

class MapSingleton {
	constructor() {
		if (!MapSingleton.instance) {
			this.map = new Map({
				basemap: 'arcgis/topographic', // basemap styles service
			})

			MapSingleton.instance = this
		}

		return MapSingleton.instance
	}

	getInstance() {
		return MapSingleton.instance
	}
}

const mapSingleton = new MapSingleton()
export default mapSingleton
