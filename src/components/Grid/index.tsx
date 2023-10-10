'use client'
import { ISystemStartedResponse } from '@/interface/system-started'
import { styled } from '@mui/material/styles'
import { Box } from '@mui/system'
import { DataGrid, GridColDef } from '@mui/x-data-grid'

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import SearchIcon from '@mui/icons-material/Search'


import React, { useCallback, useEffect, useState} from 'react'
import { usePathname, useSearchParams, useRouter} from 'next/navigation'

const columns:GridColDef[] = [
	{
		field: 'filial',
		headerName: 'Filial',
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
		sortable: false,
		disableColumnMenu: true
	}
]

const StyledGridOverlay = styled('div')(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	height: '100%',
	'& .ant-empty-img-1': {
		fill: theme.palette.mode === 'light' ? '#aeb8c2' : '#262626',
	},
	'& .ant-empty-img-2': {
		fill: theme.palette.mode === 'light' ? '#f5f5f7' : '#595959',
	},
	'& .ant-empty-img-3': {
		fill: theme.palette.mode === 'light' ? '#dce0e6' : '#434343',
	},
	'& .ant-empty-img-4': {
		fill: theme.palette.mode === 'light' ? '#fff' : '#1c1c1c',
	},
	'& .ant-empty-img-5': {
		fillOpacity: theme.palette.mode === 'light' ? '0.8' : '0.08',
		fill: theme.palette.mode === 'light' ? '#f5f5f5' : '#fff',
	},
}))

interface GridProps {
	systemStarted: ISystemStartedResponse | { systemStarted: never[]; total: number; };
	page: number;
	dataInicio: string;
	dataFim: string;
	estado: string;
}
 
export default function Grid({systemStarted, page, dataInicio, dataFim, estado}: GridProps) {  
	const [dataInicioInput, setDataInicioInput] = useState('')
	const [dataFimInput, setDataFimInput] = useState('')
	const [estadoInput, setEstadoInput] = useState('')

	const router = useRouter()
	const pathname = usePathname()
	const searchParams = useSearchParams()!

	useEffect(() => {
		{dataInicio !== '' && (setDataInicioInput(dataInicio))}
		{dataFim !== '' && (setDataFimInput(dataFim))}
		{estado !== '' && (setEstadoInput(estado))}
	}, [])

	const createQueryString = useCallback(
		(name: string, value: string) => {
			const params = new URLSearchParams(searchParams)
			params.set(name, value)
		
			return params.toString()
		},
		[searchParams]
	)

	function onSearchCliclk() {
		let queryParams = ''
		if(dataInicioInput !== '') {
			queryParams = 'dataInicio' + '=' + `${dataInicioInput}`
		}

		if(dataFimInput !== '') {
			queryParams = queryParams + '&' + 'dataFim' + '=' + `${dataFimInput}`
		}

		if(estadoInput !== '') {
			queryParams = queryParams + '&' + 'estado' + '=' + `${estadoInput}`
		}
		
		router.push(pathname + '?' + queryParams)
	}
	return (
		<>
			<div className='flex w-full justify-end max-w-[780px] m-auto mt-10'>
				<div className='bg-white h-15 flex rounded-sm'>
					<div className='flex items-center space-x-3 p-3' >
						<h2>Data:</h2>
						<input 
							type='date' 
							name='Data Inicial' 
							id='dataInicio' 
							value={dataInicioInput}
							onChange={(e) => {
								setDataInicioInput(e.target.value)
							}}
							className='w-[130px] border-[1px] shadow-md p-1 focus:outline-none'
						/>
						<h2>a</h2>
						<input 
							type='date' 
							name='Data final' 
							id='dataFim' 
							value={dataFimInput}
							onChange={(e) => {
								setDataFimInput(e.target.value)
							}}
							className='w-[130px] border-[1px] shadow-md p-1 focus:outline-none'
						/>

						<h2>Estado: </h2>

						<select 
							id='estado' 
							name='estado' 
							className='w-[130px] border-[1px] shadow-md p-1 bg-white focus:outline-none'
							value={estadoInput}
							onChange={(e) => {
								setEstadoInput(e.target.value)
							}}
						>
							<option value=''>Todos</option>
							<option value='AC'>Acre</option>
							<option value='AL'>Alagoas</option>
							<option value='AP'>Amapá</option>
							<option value='AM'>Amazonas</option>
							<option value='BA'>Bahia</option>
							<option value='CE'>Ceará</option>
							<option value='DF'>Distrito Federal</option>
							<option value='ES'>Espírito Santo</option>
							<option value='GO'>Goiás</option>
							<option value='MA'>Maranhão</option>
							<option value='MT'>Mato Grosso</option>
							<option value='MS'>Mato Grosso do Sul</option>
							<option value='MG'>Minas Gerais</option>
							<option value='PA'>Pará</option>
							<option value='PB'>Paraíba</option>
							<option value='PR'>Paraná</option>
							<option value='PE'>Pernambuco</option>
							<option value='PI'>Piauí</option>
							<option value='RJ'>Rio de Janeiro</option>
							<option value='RN'>Rio Grande do Norte</option>
							<option value='RS'>Rio Grande do Sul</option>
							<option value='RO'>Rondônia</option>
							<option value='RR'>Roraima</option>
							<option value='SC'>Santa Catarina</option>
							<option value='SP'>São Paulo</option>
							<option value='SE'>Sergipe</option>
							<option value='TO'>Tocantins</option>
						</select>

						<div>
							<SearchIcon fontSize='medium' className='hover:bg-gray-100 cursor-pointer' onClick={() => onSearchCliclk()}/>
						</div>
					</div> 
				</div>
			</div>

			<Box sx={{ 
				maxWidth: '780px', 
				margin: '0 auto',
				marginTop: '20px',
				position: 'relative',
				width: '90%'
			}}>
				<DataGrid
					autoHeight 
					rows={systemStarted.systemStarted}
					columns={columns}
					slots={{ noRowsOverlay: CustomNoRowsOverlay }} 
					hideFooter={true}
					disableRowSelectionOnClick
					disableColumnFilter
					sx={{
						alignItems: 'center',
						backgroundColor: '#ffffff',
						'--DataGrid-overlayHeight': '300px',
						borderRadius: '2px 2px 0 0',
						borderWidth: '0px'
					}}
				/>
				<div className='bg-white w-full h-10 mb-[50px] m-auto max-w-[780px] rounded-b-[2px]'>
					<div className='flex justify-center h-full items-center'>
						<button type='button' className='h-[20px] inline-flex items-center hover:bg-gray-100' onClick={() => {
							if(page !== 1) {
								router.push(pathname + '?' + createQueryString('page', `${page - 1}`))
							}
						}}>
							<KeyboardArrowLeftIcon fontSize='small' className='text-[#353535]'/>
						</button>

						<button type='button' className='h-[20px] inline-flex items-center hover:bg-gray-100' onClick={() => {
							if(page * 20 < systemStarted.total) {
								router.push(pathname + '?' + createQueryString('page', `${page + 1}`))
							}
						}}>
							<KeyboardArrowRightIcon fontSize='small' className='text-[#353535]'/>
						</button>


						<h1 className='text-center text-sm text-[#353535]'>
							{systemStarted.total === 0 ? ((page - 1) * 20) : (((page - 1) * 20) + 1)} - {page * 20 < systemStarted.total ? page * 20 : systemStarted.total} de {systemStarted.total}
						</h1>
					
					</div>
				</div>
			</Box>
		</>
	)
}

function CustomNoRowsOverlay() {
	return (
		<StyledGridOverlay>
			<svg
				style={{ flexShrink: 0 }}
				width='240'
				height='200'
				viewBox='0 0 184 152'
				aria-hidden
				focusable='false'
			>
				<g fill='none' fillRule='evenodd'>
					<g transform='translate(24 31.67)'>
						<ellipse
							className='ant-empty-img-5'
							cx='67.797'
							cy='106.89'
							rx='67.797'
							ry='12.668'
						/>
						<path
							className='ant-empty-img-1'
							d='M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z'
						/>
						<path
							className='ant-empty-img-2'
							d='M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z'
						/>
						<path
							className='ant-empty-img-3'
							d='M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z'
						/>
					</g>
					<path
						className='ant-empty-img-3'
						d='M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z'
					/>
					<g className='ant-empty-img-4' transform='translate(149.65 15.383)'>
						<ellipse cx='20.654' cy='3.167' rx='2.849' ry='2.815' />
						<path d='M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z' />
					</g>
				</g>
			</svg>
			<Box sx={{ mt: 1 }}>No Rows</Box>
		</StyledGridOverlay>
	)
}