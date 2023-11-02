import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import React, { useCallback } from 'react'

export default function GridFilter() {
	const router = useRouter()
	const pathname = usePathname()
	const searchParams = useSearchParams()

	const dataInicio = searchParams.get('dataInicio') || ''
	const dataFim = searchParams.get('dataFim') || ''
	const estado = searchParams.get('estado') || ''
	const modulo = searchParams.get('modulo') || ''

	const createQueryString = useCallback(
		(name: string, value: string) => {
			const params = new URLSearchParams(searchParams)
			
			if (value !== '') {
				params.set(name, value)
			} else {
				params.delete(name)
			}
         
			return params.toString()
		},
		[searchParams]
	)

	return (
		<div className='flex space-x-3 justify-end items-center max-w-[800px] w-full m-auto mt-5 p-3 bg-white rounded-sm'>
			<h2>Data:</h2>
			<input 
				type='date' 
				name='Data Inicial' 
				id='dataInicio' 
				value={dataInicio}
				onChange={(e) => {
					router.push(pathname + '?' + createQueryString('dataInicio', `${e.target.value}`))
				}}
				className='w-[130px] border-[1px] shadow-md p-1 focus:outline-none'
			/>
			<h2>a</h2>
			<input 
				type='date' 
				name='Data final' 
				id='dataFim' 
				value={dataFim}
				onChange={(e) => {
					router.push(pathname + '?' + createQueryString('dataFim', `${e.target.value}`))
				}}
				className='w-[130px] border-[1px] shadow-md p-1 focus:outline-none'
			/>

			<h2>Estado: </h2>

			<select 
				id='estado' 
				name='estado' 
				className='w-[130px] border-[1px] shadow-md p-1 bg-white focus:outline-none'
				value={estado}
				onChange={(e) => {
					router.push(pathname + '?' + createQueryString('estado', `${e.target.value}`))
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

			<h2>Módulo: </h2>

			<select 
				id='modulo' 
				name='modulo' 
				className='w-[130px] border-[1px] shadow-md p-1 bg-white focus:outline-none'
				value={modulo}
				onChange={(e) => {
					router.push(pathname + '?' + createQueryString('modulo', `${e.target.value}`))
				}}
			>
				<option value=''>Todos</option>
				<option value='LIT'>LIT</option>
				<option value='FAT'>FAT</option>
				<option value='SPD'>SPD</option>
				<option value='ECF'>ECF</option>
			</select>

		</div>
	)
}