export interface SystemStartedResponse {
	systemStarted: [
		{
			id: string
			estado: string
			modulo: string
			filial: string
			createdAt: Date | string
		}
	]
}