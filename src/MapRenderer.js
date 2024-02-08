import mapSingleton from './MapSingleton'
import MapView from '@arcgis/core/views/MapView'
import FeatureLayer from '@arcgis/core/layers/FeatureLayer'
import DataFetcher from './DataFetcher'

export default class MapRenderer {
	constructor() {
		this.mapInstance = mapSingleton.getInstance()
		this.mapView = null
	}

	renderMap(divContainerId) {
		this.mapView = new MapView({
			container: divContainerId,
			map: this.mapInstance.map,
			/* Zoom adaptado a mobile */
			center:
				document.body.offsetWidth <= 768
					? [-89.474373, 13.944397]
					: [-88.95394051987472, 13.734908137659334],
			zoom: document.body.offsetWidth <= 768 ? 8 : 9,
		})

		const featureLayer = new FeatureLayer({
            url: 'https://services3.arcgis.com/bKEnJBoC9duIedgY/ArcGIS/rest/services/Centros_Escolares/FeatureServer/0',
            outFields: ['*'] // Puedes especificar aquí los campos que deseas incluir en los resultados
        });

        this.mapInstance.map.add(featureLayer);
	}
}
