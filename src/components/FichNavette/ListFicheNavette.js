import React from 'react'
import { Datagrid, List, TextField } from 'react-admin'

const ListFicheNavette = (props) => {
  return (
    <List {...props}>
        <Datagrid>
            <TextField source='id'  />
        </Datagrid>
    </List>
  )
}

export default ListFicheNavette