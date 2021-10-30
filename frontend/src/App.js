import React from "react";
import Modal from "./components/Modal";
import axios from "axios";

class App extends React.Component {

 constructor(props) {
    super(props);
    this.state = {
		details: [],
		first_name: "",
	};


    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


	componentDidMount() {
		let data;

		axios
			.get("http://backend-service:8000/api/demos/")
			.then((res) => {
				data = res.data;
				this.setState({
					details: data,
				});
			})
			.catch((err) => {});
	}

	refreshList = () => {
	let data;

    axios
      .get("http://backend-service:8000/api/demos/")
      .then((res) => {
				data = res.data;
				this.setState({
					details: data,
				});
			})
			.catch((err) => {});
  };

	renderSwitch = (param) => {
		switch (param + 1) {
			case 1:
				return "primary ";
			case 2:
				return "secondary";
			case 3:
				return "success";
			case 4:
				return "danger";
			case 5:
				return "warning";
			case 6:
				return "info";
			default:
				return "yellow";
		}
	};

	toggle = () => {
    this.setState({ modal: !this.state.modal });
  };


	editItem = (item) => {
	alert("edited")
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

	handleEdit = (id, first_name_passed) => {


	alert(first_name_passed)
	alert("http://backend-service:8000/api/demos/"+id+"/")
    axios
      .put("http://backend-service:8000/api/demos/"+id+"/", {
				first_name: first_name_passed,
			})
      .then((res) => this.refreshList())
  };

	handleDelete = (id) => {
	alert("http://backend-service:8000/api/demos/"+id+"/")
    axios
      .delete("http://backend-service:8000/api/demos/"+id+"/")
      .then((res) => this.refreshList())
  };

	handleInput = (e) => {
		this.setState({
			first_name: e.target.value,
		});

	};

	handleSubmit = (e) => {

		if (e.id) {
          axios
            .put("http://backend-service:8000/api/demos/"+e.id+"/", {
                first_name: e.first_name
            })
            .then((res) => this.refreshList());
        return;
        }

		axios
			.post("http://backend-service:8000/api/demos/", {
				first_name: this.state.first_name,
			})
			.then((res) => {
				this.setState({
					first_name: "",
				});
			})
			.catch((err) => {})
			.then((res) => this.refreshList())

	};

	render() {
		return (
		    <div className="container jumbotron ">
				<form onSubmit={this.handleSubmit}>
					<div className="input-group mb-3">
						<div className="input-group-prepend">
							<span className="input-group-text"
								id="basic-addon1">
								{" "}
								First Name{" "}
							</span>
						</div>
						<input type="text" className="form-control"
							value={this.state.first_name}
							onChange={this.handleInput} />
					</div>

					<button type="submit" className="btn btn-primary mb-5">
						Submit
					</button>
				</form>

				<hr
					style={{
						color: "#000000",
						backgroundColor: "#000000",
						height: 0.5,
						borderColor: "#000000",
					}}
				/>

				{this.state.details.map((detail, id) => (
					<div key={id}>
						<div className="card shadow-lg">
							<div className={"bg-" + this.renderSwitch(id % 6) +
										" card-header"}>Quote {id + 1}</div>
							<div className="card-body">
								<blockquote className={"text-" + this.renderSwitch(id % 6) +
												" blockquote mb-0"}>
									<h1> {detail.first_name} </h1>
									<span>
									<button className="btn btn-danger" onClick={() => this.handleDelete(detail.id)}>
									Delete
									</button>
									</span>
									<span>
									<button className="btn btn-secondary mr-2" onClick={() => this.editItem(detail)}>
									Edit
									</button>
									</span>
									<footer className="blockquote-footer">
										{" "}
										<cite title="Source Title">{detail.first_name}</cite>
									</footer>
								</blockquote>
							</div>
						</div>
						<span className="border border-primary "></span>
					</div>
				))}
				{this.state.modal ? (
          <Modal
            activeItem={this.state.activeItem}
            toggle={this.toggle}
            onSave={this.handleSubmit}
          />
        ) : null}
			</div>
		);
	}
}
export default App;

