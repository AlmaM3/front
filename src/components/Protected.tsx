import React, { Component } from 'react';
import { useTable, Column } from 'react-table';

export interface Data {
  rfc: String,
  fecha: String,
  modificador: String
}


let Table = ({data}:{data:Data[]}) => {

  const columns: Column<Data>[] = React.useMemo(
    () => [
      {
        Header: 'RFC',
        accessor: 'rfc', // accessor is the "key" in the data
      },
      {
        Header: 'FECHA',
        accessor: 'fecha',
      },
      {
        Header: 'MODIFICADOR',
        accessor: 'modificador',
      },
    ],
    []
  )

       const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({columns, data});


    return (
    <table {...getTableProps()}>
        <thead>
            {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                        <th{...column.getHeaderProps()}>
                            {column.render('Header')}
                        </th>
                    ))}
                </tr>
             ))}
        </thead>
        <tbody {...getTableProps}>
            {rows.map(row => {
                prepareRow(row)
                return <>
                    <tr {...row.getRowProps()}>
                        {row.cells.map(cell => (
                            <td {...cell.getCellProps()}>
                                {cell.render('Cell')}
                            </td>
                        ))}
                    </tr>
                </>    
            })}
        </tbody>
    </table>
  )
}




interface Props {

}

interface State {
  data : Data[]
}

class Protected extends Component<Props, State> {

  state = {
    data: []
  }
  
getJson = () => {
   fetch("/protected")
         .then(res => res.json()
            .then(json => {
              this.setState({
                data: json
              })
              console.log(this.state)
            })
        )
}




  render() {
    
    return<>
    <button onClick= {this.getJson}>Conseguir</button>
    
    <Table data= {this.state.data}/>
    </>
  }
  
}   


export default Protected;



  //  const data: Data[] = React.useMemo(
  //   () => [
  //   {
  //     rfc: "GOHE",
  //     fecha: "01-01-01",
  //     modificador: "Susana"
  //   },
  //   {
  //     rfc: "GOHE",
  //     fecha: "01-01-01",
  //     modificador: "Susana",
  //   }
  // ],
  // []); 

      