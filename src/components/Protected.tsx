import React, { Component } from 'react';
import { useTable, Column, usePagination, TableInstance} from 'react-table';



export interface Data {
  input:JSX.Element
  rfc: String,
  fecha: String,
  modificador: String
}

class Input {
  render () {}
}

// interface Susano {
//   input:JSX.Element
// }

interface Dato {
  
}

let Table = ({data}:{data:Dato[]}) => {

  // let s: Susano = {input: <input type="checkbox"/>} 

  const columns: Column<Dato>[] = React.useMemo(
    () => [

      { 
        // id: 'selection',
        Header: '    ',
        accessor: 'box', // accessor is the "key" in the data
      },

       { 
        // id: 'selection',
        Header: 'ID',
        accessor: 'id', // accessor is the "key" in the data
      },
           
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
        prepareRow,
        rows,

       
    } = useTable({columns, data}, usePagination);


    return (<>

        {console.log(columns[0].Header)}
        {/* columns[0].Header)  */}
        {/* <code>
          {/* {JSON.stringify(
            {
              // pageIndex,
              // pageSize,
              // pageCount,
              // canNextPage,

              // canPreviousPage,
            },
            null,
            2
          )} */
        // </code> *
        }

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
                  {row.cells.map((cell) => {
                  // const { id } = cell.row.original;
                  if (cell.column.Header === '    ') {
                    return (
                      <td id="check"><input type ="checkbox"/></td>
                    );
                  }
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>

            </>    
            })}
        </tbody>
    </table>
    </>
  )
}

interface Button {
  button: boolean,
  data: Dato[]
}


let GetTable = (params:Button) => {
  const {button, data} = params;
  if (button) {
    return <Table data={data}/>
  } else {
    return(
    <div>
      Aquí se mostrará la tabla
    </div>)
  }
}



interface Props {

}

interface State {
  data : Data[],
  button: boolean,
}

class Protected extends Component<Props, State> {

  state = {
    data: [], 
    button: false,
  }
  
getJson = (e: any) => {
   fetch("/protected")
         .then(res => res.json()
            .then(json => {
              this.setState({
                // data: json
                data: json.map((equis: string) => JSON.parse(equis)) 
              })
              console.log(this.state.data)
            })
        )
 this.setState({button: true})
}




  render() {
    
    return<>
    <button id = "1" onClick= {this.getJson}>Conseguir</button>
        
    <GetTable button= {this.state.button} data= {this.state.data}/>
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

      