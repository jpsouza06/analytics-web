import { GridColDef } from '@mui/x-data-grid'
import dayjs from 'dayjs'

export const columnsReportTypeSystemStarted:GridColDef[] = [
	{
		field: 'codCliente',
		headerName: 'Código Cliente',
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
		field: 'cidade',
		headerName: 'Cidade',
		width: 150,
		sortable: false,
		disableColumnMenu: true
	},
	{
		field: 'modulo',
		headerName: 'Modulo',
		width: 100,
		sortable: false,
		disableColumnMenu: true
	},
	{
		field: 'versao',
		headerName: 'Versao',
		width: 100,
		sortable: false,
		disableColumnMenu: true
	},
	{
		field: 'createdAt',
		headerName: 'Data',
		width: 200,
		valueFormatter: (params) => dayjs(params.value).format('DD/MM/YYYY HH:mm:ss'),
		sortable: false,
		disableColumnMenu: true
	}
]

export const columnsReportTypePageView:GridColDef[] = [
	{
		field: 'codCliente',
		headerName: 'Código Cliente',
		width: 150, 
		sortable: false,
		disableColumnMenu: true
	},
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
		width: 100,
		sortable: false,
		disableColumnMenu: true
	},
	{
		field: 'createdAt',
		headerName: 'Data',
		width: 200,
		valueFormatter: (params) => dayjs(params.value).format('DD/MM/YYYY HH:mm:ss'),
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
		width: 100,
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
		headerName: 'Data',
		width: 200,
		valueFormatter: (params) => dayjs(params.value).format('DD/MM/YYYY HH:mm:ss'),
		sortable: false,
		disableColumnMenu: true
	}
]