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

export interface ISystemStartedCountByStateResponse {
	score: {
		count: [
			{
				_count: number, estado: string
			}
		]
	}
}