import React, { useEffect, useState } from "react";
import _ from 'lodash'
import { Button, Checkbox, Icon, Table } from 'semantic-ui-react'
import { useDispatch, useSelector } from "react-redux";
import { addUserInitiate, deleteUserIntiate, fetchUserInitiate, editUserInitiate } from "../redux/actionCreator";
import AriaModal from 'react-aria-modal';


const Home = (props) => {
  const [showModal, setShowModal] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null)
  
  const dispatch = useDispatch()
  const {users} = useSelector(state => state.adminState)
  
  const clickHandler = (id) => {
    const user = _.find(users, (user) => user._id === id)
    setSelectedUser(user)
    // dispatch(getSingleUserInitiate(id))
    setShowModal(true)
  }
  const deactivateModal = () => {
    setShowModal(false)
  }
  console.log(users)
  
  const TableHeaderElements = ["Name", "Company Name", "Date of Birth", "Created At", "Gender"]
  const renderTableHeader = TableHeaderElements.map((itm) => {
    return <Table.HeaderCell>{itm}</Table.HeaderCell>
  })
  
  const deleteHandler = (e,id) => {
    e.stopPropagation()
    dispatch(deleteUserIntiate(id))
  }

  useEffect(() => {
    dispatch(fetchUserInitiate())
  }, [])

  const renderTableData = users.map((itm) => {
    return(
      <Table.Row onClick={() => clickHandler(itm._id)}>
        <Table.Cell collapsing>
        </Table.Cell>
        <Table.Cell>{itm.name}</Table.Cell>
        <Table.Cell>{itm.companyName}</Table.Cell>
        <Table.Cell>{itm.dateofbirth}</Table.Cell>
        <Table.Cell>{itm.createdAt}</Table.Cell>
        <Table.Cell>{itm.gender}</Table.Cell>
        <button onClick={(e) => deleteHandler(e,itm._id)}>
            delete
          </button>
      </Table.Row>
    )
  })


  



  const Modal = ({ data }) => {
  const [userDetails, setUserDetails] = useState({...data})
  const dispatch = useDispatch()
  const changeHandler = (e) => {
    setUserDetails({...userDetails, [e.target.name]:e.target.value})
  }
  const addUserHandler = () => {
    dispatch(addUserInitiate(userDetails))
    deactivateModal()
  }
  const editUserHandler = () => {
    console.log("userDetails")
    dispatch(editUserInitiate(userDetails))
    deactivateModal()
  }

    return (
      
    <AriaModal
    titleText="demo one"
    onExit={deactivateModal}
    initialFocus="#demo-one-deactivate"
    underlayStyle={{ paddingTop: '2em' }}
    >
      <div id="demo-one-modal" className="modal">
        <div className="modal-body">
          <input name='name' value={userDetails.name} onChange={changeHandler} />
          <input name='companyName' value={userDetails.companyName} onChange={changeHandler}/>
          <input name='gender' value={userDetails.gender} onChange={changeHandler}/>
          <input name='dateofbirth' value={userDetails.dateofbirth} onChange={changeHandler}/>
          <button onClick={!data ?addUserHandler : editUserHandler}>{!data ? 'ADD USER' : 'EDIT USER'}</button>
        </div>
        <footer className="modal-footer">
          <button id="demo-one-deactivate" onClick={deactivateModal}>
            Cancel
          </button>
        </footer>
      </div>
    </AriaModal>
    )
  }

  return (
    <div>
      <Table compact celled definition>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell />
            {renderTableHeader}
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {renderTableData}
        </Table.Body>

    <Table.Footer fullWidth>
      <Table.Row>
        <Table.HeaderCell />
        <Table.HeaderCell colSpan='4'>
          <Button
            floated='right'
            icon
            labelPosition='left'
            primary
            size='small'
            onClick={clickHandler}
          >
            <Icon name='user' /> Add User
          </Button>
          
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
  {
    showModal && <Modal data={selectedUser}/>
  }
    </div>
  );
};

export default Home;
