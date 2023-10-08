export interface IFindSystemStartedQuery {
   estado?: string
   modulo?: string
   filial?: string
   dataInicio: string;
   dataFim?: string;
   orderBy?:
   {
      estado?: 'asc' | 'desc',
      modulo?: 'asc' | 'desc',
      filial?: 'asc' | 'desc',
      createdAt?: 'asc' | 'desc',
   }
}

export interface ISystemStartedResponse {
	systemStarted: {
		systemStarted: [
			{
				id: string
				estado: string
				modulo: string
				filial: string
				createdAt: Date | string
			}
		] | [],
		total: number
	}
}

export interface ISystemStartedCountByStateResponse {
	score: {
		count: [
			{
				_count: number, estado: string
			}
		]
	}
}