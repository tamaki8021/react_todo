import React from 'react'
import firebase from 'firebase/app'
import {ListItem, TextField, Grid} from '@material-ui/core'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined'

interface PROPS {
  id: string;
  title: string;
}

const TaskItem: React.FC<PROPS> = (props) => {
  return (
    <>
      <ListItem>
        <h2>{props.title}</h2>
      </ListItem>
    </>
  )
}

export default TaskItem
