import React, { useEffect, useState } from "react";
import _ from "lodash";
import SemanticDatepicker from "react-semantic-ui-datepickers";
import {
  Button,
  Icon,
  Dropdown,
  Form,
  Grid,
  Header,
  Segment,
} from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import {
  addUserInitiate,
  deleteUserIntiate,
  fetchUserInitiate,
  editUserInitiate,
} from "../redux/actionCreator";
import AriaModal from "react-aria-modal";
import Table from "./table";
import "react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css";
import "./modal.css";
import Navbar from "./Navbar";
const Home = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const dispatch = useDispatch();
  const { users, loginSuccess } = useSelector((state) => state.adminState);

  useEffect(() => {
    if (!loginSuccess && props.history) {
      props.history.push("/login");
    }
  }, [loginSuccess, props.history]);

  const clickHandler = (id) => {
    const user = _.find(users, (user) => user._id === id);
    setSelectedUser(user);
    setShowModal(true);
  };
  const deactivateModal = () => {
    setShowModal(false);
  };

  const deleteHandler = (e, id) => {
    e.stopPropagation();
    dispatch(deleteUserIntiate(id));
  };

  useEffect(() => {
    dispatch(fetchUserInitiate());
  }, []);

  const Modal = ({ data }) => {
    const [userDetails, setUserDetails] = useState({ ...data });
    const dispatch = useDispatch();
    const changeHandler = (e) => {
      const name = e.target ? e.target.name : e.name;
      const value = e.target ? e.target.value : e.value;

      setUserDetails({ ...userDetails, [name]: value });
    };
    const addUserHandler = () => {
      dispatch(addUserInitiate(userDetails));
      deactivateModal();
    };
    const editUserHandler = () => {
      dispatch(editUserInitiate(userDetails));
      deactivateModal();
    };

    const DropdownOptions = [
      {
        key: "MALE",
        text: "MALE",
        value: "MALE",
      },
      {
        key: "FEMALE",
        text: "FEMALE",
        value: "FEMALE",
      },
    ];

    return (
      <AriaModal
        titleText="demo one"
        onExit={deactivateModal}
        initialFocus="#demo-one-deactivate"
        underlayStyle={{ paddingTop: "2em" }}
      >
        <Grid
          textAlign="center"
          style={{ height: "100vh" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ minWidth: 400 }}>
            <Segment stacked>
              <Header as="h2" color="teal" textAlign="center">
                {data ? "EDIT USER" : "ADD USER"}
              </Header>
              <Form
                size="large"
                onSubmit={!data ? addUserHandler : editUserHandler}
              >
                <Form.Input
                  name="name"
                  value={userDetails.name}
                  onChange={changeHandler}
                  placeholder="Name"
                />
                <Form.Input
                  name="companyName"
                  value={userDetails.companyName}
                  onChange={changeHandler}
                  placeholder="Company name"
                />
                <SemanticDatepicker
                  name="dateofbirth"
                  locale="pt-BR"
                  onChange={(e, data) => changeHandler(data)}
                  className="date"
                />
                <Dropdown
                  placeholder="Gender"
                  fluid
                  selection
                  name="gender"
                  value={userDetails.gender}
                  onChange={(e, data) =>
                    changeHandler({ name: "gender", value: data.value })
                  }
                  options={DropdownOptions}
                />
                <Button
                  color="teal"
                  fluid
                  size="large"
                  type="submit"
                  style={{ marginTop: "10px" }}
                >
                  {!data ? "ADD USER" : "EDIT USER"}
                </Button>
                <Button
                  color="red"
                  fluid
                  size="large"
                  onClick={deactivateModal}
                  style={{ marginTop: "10px" }}
                >
                  Cancel
                </Button>
              </Form>
            </Segment>
          </Grid.Column>
        </Grid>
      </AriaModal>
    );
  };
  const formateDate = (date, dob) => {
    let formatedDate = `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()} `;
    let formatedTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

    return dob ? formatedDate : formatedDate + formatedTime;
  };

  let columnDefs = [
    {
      headerName: "Name",
      field: "name",
      headersClass: "id",
      cellClass: "cell",
    },
    {
      headerName: "Company Name",
      field: "companyName",
      headersClass: "id",
      cellClass: "cell",
    },
    {
      headerName: "Date OfBirth",
      field: "dateofbirth",
      headersClass: "id",
      cellClass: "icell",
      valueGetter: (data) => formateDate(new Date(data.dateofbirth), "dob"),
    },
    {
      headerName: "createdAt",
      field: "createdAt",
      headersClass: "id",
      cellClass: "cell",
      valueGetter: (data) => formateDate(new Date(data.createdAt)),
    },
    {
      headerName: "gender",
      field: "gender",
      headersClass: "id",
      cellClass: "cell",
    },

    {
      headerName: "DELETE ",
      renderChild: (data) => (
        <Button onClick={(e) => deleteHandler(e, data._id)} color="green">
          delete
        </Button>
      ),
    },
  ];

  return (
    <div>
      <Navbar />
      <h4>Click on The Header you Want to Sort</h4>
      <Table
        columnDefs={columnDefs}
        rowData={users.length ? users : []} //data
        rowClick={(data) => {
          clickHandler(data._id);
        }}
        showCount
      />

      <Button
        floated="right"
        icon
        labelPosition="left"
        primary
        size="small"
        onClick={clickHandler}
      >
        <Icon name="user" /> Add User
      </Button>
      {showModal && <Modal data={selectedUser} />}
    </div>
  );
};

export default Home;
