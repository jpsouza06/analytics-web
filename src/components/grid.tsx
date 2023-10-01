'use client'
import { SystemStartedResponse } from '@/interface/system-started'
import { Box } from '@mui/system'
import { DataGrid, GridColDef } from '@mui/x-data-grid'

import React from 'react'

const columns: GridColDef[] = [
	{
		field: 'filial',
		headerName: 'Filial',
		width: 150,
		disableReorder: true
	},
	{
		field: 'modulo',
		headerName: 'Modulo',
		width: 150
	},
	{
		field: 'estado',
		headerName: 'Estado',
		width: 90
	},
	{
		field: 'createdAt',
		headerName: 'Ultimo Acesso',
		width: 150
	}
]

export default function Grid({systemStarted}: SystemStartedResponse) {
	return (
		<Box sx={{ 
			width: '70%', 
			backgroundColor: '#aaaa', 
			margin: '0 auto',
			marginTop: '50px',
		}}>
			<DataGrid 
				rows={systemStarted}
				columns={columns}
				initialState={{
					pagination: {
						paginationModel: {
							pageSize: 20
						}
					}
				}}
				pageSizeOptions={[20]}
				disableRowSelectionOnClick
				sx={{
					alignContent: 'center'
				}}
			/>
		</Box>
	)
}