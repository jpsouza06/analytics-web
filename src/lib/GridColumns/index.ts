import { GridColDef } from '@mui/x-data-grid'
import dayjs from 'dayjs'

export const columnsReportTypeSystemStarted:GridColDef[] = [
	{
		field: 'filial',
		headerName: 'Filial',
		minWidth: 300, 
		sortable: false,
		disableColumnMenu: true
	},
	{
		field: 'modulo',
		headerName: 'Modulo',
		width: 150,
		sortable: false,
		disableColumnMenu: true
	},
	{
		field: 'estado',
		headerName: 'Estado',
		width: 90,
		sortable: false,
		disableColumnMenu: true
	},
	{
		field: 'createdAt',
		headerName: 'Ultimo Acesso',
		width: 115,
		valueFormatter: (params) => dayjs(params.value).format('DD/MM/YYYY'),
		sortable: false,
		disableColumnMenu: true
	}
]

export const columnsReportTypePageView:GridColDef[] = [
	{
		field: 'rotina',
		headerName: 'Rotina',
		width: 150,
		sortable: false,
		disableColumnMenu: true
	},
	{
		field: 'modulo',
		headerName: 'Modulo',
		width: 150,
		sortable: false,
		disableColumnMenu: true
	},
	{
		field: 'createdAt',
		headerName: 'Ultimo Acesso',
		width: 115,
		valueFormatter: (params) => dayjs(params.value).format('DD/MM/YYYY'),
		sortable: false,
		disableColumnMenu: true
	}
]

export const columnsReportTypeError:GridColDef[] = [
	{
		field: 'unit',
		headerName: 'Unit',
		width: 150,
		sortable: false,
		disableColumnMenu: true
	},
	{
		field: 'rotina',
		headerName: 'Rotina',
		width: 90,
		sortable: false,
		disableColumnMenu: true
	},
	{
		field: 'modulo',
		headerName: 'Modulo',
		width: 150,
		sortable: false,
		disableColumnMenu: true
	},
	{
		field: 'conteudo',
		headerName: 'Conteúdo',
		width: 150,
		sortable: false,
		disableColumnMenu: true
	},
	{
		field: 'createdAt',
		headerName: 'Ultimo Acesso',
		width: 115,
		valueFormatter: (params) => dayjs(params.value).format('DD/MM/YYYY'),
		sortable: false,
		disableColumnMenu: true
	}
]