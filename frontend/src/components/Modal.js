import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

export default class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem,
    };
  }

  handleChange = (e) => {
//    alert(e)
    let { name, value } = e.target;

//    alert(name)
//    alert(value)

    const activeItem = { ...this.state.activeItem, [name]: value };

    this.setState({ activeItem });
  };

  render() {
    const { toggle, onSave } = this.props;

    return (
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}>Demo Item</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="demo-first_name">First Name</Label>
              <Input
                type="text"
                id="demo-first_name"
                name="first_name"
                value={this.state.activeItem.first_name}
                onChange={this.handleChange}
                placeholder="Enter First Name"
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="success"
            onClick={() => onSave(this.state.activeItem)}
          >
            Save
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}