import Graphic from '@arcgis/core/Graphic'

export default class DataFetcher {
	constructor(url) {
		this.url = url
	}

	async fetchDataAndCreateGraphics() {
		axios
			.get(this.url)
			.then(async (response) => {
				console.log(response.data)
			})
			.catch((error) => console.error(error))
	}
}
