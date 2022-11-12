import { pokemonData } from '../App/pokemon'
import { Table as TableAnt, Typography, Image } from 'antd'

const {Text} = Typography;

const colunms = [
  {
    title: 'Имя',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <Text copyable>{text}</Text>,
    
},
{
    title: 'Номер',
    dataIndex: 'number',
    key: 'number',
    sorter: (a, b) => a.number - b.number,
    defaultSortOrder: 'descend',
},
{
    title: 'Класс',
    dataIndex: 'classification',
    key: 'classification',
    render: (text) => <Text copyable>{text}</Text>,
    onFilter: (value, record) => record.classification.indexOf(value) === 0,
    filters: [
        {
          text: 'Flame Pokémon',
          value: 'Flame Pokémon',
        },
        {
          text: 'Drill Pokémon',
          value: 'Drill Pokémon',
        },

    ],

  },
  {
    title: 'Уровень XP',
    dataIndex: 'maxHP',
    key: 'MaxHP',
    sorter: (a, b) => a.maxHP - b.maxHP,
    defaultSortOrder: 'descend',
},
{
    title: 'Уровень маны',
    dataIndex: 'maxCP',
    key: 'MaxCP',
    sorter: (a, b) => a.maxCP - b.maxCP,
    defaultSortOrder: 'descend',
  },
{
title: 'Изображение',
dataIndex: 'image',
key: 'image',
render: (urlsrc) => <Image width={100}  src={urlsrc} preview={false}/>
  },

]

const dataPokemon = pokemonData.map(pokemon =>({
    name: pokemon.name,
    number: pokemon.number,
    classification: pokemon.classification,
    maxHP: pokemon.maxHP,
    maxCP: pokemon.maxCP,
    key: pokemon.id,
    image: pokemon.image,

}) )

function Table() {
    return(
        <TableAnt dataSource={dataPokemon} columns={colunms}>

        </TableAnt>
    )
}

export default Table