export type IGridSystemStartedResponse = {
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

export type IGridPageViewResponse = {
   pageViews: [
      {
         id: string
         rotina: string
         modulo: string
         createdAt: Date | string
      }
   ] | [],
   total: number
}

export type IGridErrorResponse = {
   errors: [
      {
         id: string
         unit: string
         rotina: string
         modulo: string
         conteudo: string        
         createdAt: Date | string
      }
   ] | [],
   total: number
}

export type IGridResponse = IGridSystemStartedResponse | IGridPageViewResponse | IGridErrorResponse