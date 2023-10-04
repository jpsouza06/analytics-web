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
	systemStarted: [
		{
			id: string
			estado: string
			modulo: string
			filial: string
			createdAt: Date | string
		}
	] | [] | never[]
}