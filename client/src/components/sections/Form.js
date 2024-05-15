import React from 'react';
import{ fetchLink } from '../../actions';
import { connect } from 'react-redux';


class Form extends React.Component {
	state = { inputValue: "", errorMessage: "", color: "", translate: "", validateMd: "",
			formPadding: "", placeholder: "", errorValidation: "", formButton: ""};

	onInput = e => {
		e.preventDefault();
			this.setState({ errorMessage: ""});
			this.setState({ color: ""});
			this.setState({ translate: ""});
			this.setState({ validateMd: ""});
			this.setState({ formPadding: ""});
			this.setState({ placeholder: ""});
	}

	onSubmit = e => {
		e.preventDefault();
		if(this.state.inputValue !== '') {
			this.props.fetchLink(this.state.inputValue);
			this.setState({ errorMessage: ""});
			this.setState({ color: ""});
			this.setState({ translate: ""});
			this.setState({ validateMd: ""});
			this.setState({ formPadding: ""});
			this.setState({ placeholder: ""});
		} else {
			this.setState({ errorMessage: "please add a link"});
			this.setState({ color: "hsl(0, 87%, 67%)"});
			this.setState({ translate: "translateY(46px)"});
			this.setState({ validateMd: "validateMd"});
			this.setState({ formPadding: "formPadding"});
			this.setState({ placeholder: "color"});
			this.setState({ errorValidation: "errorValidation"});
			this.setState({ formButton: "formButton"});
		}
		this.setState({ inputValue: ""});
	};

	renderForm() {
		return (
				<div id="input-group" className={"mb-3 " + this.state.validateMd}>
		  			<input type="text" className={"form-control " + this.state.placeholder} placeholder="Shorten a link here..." 
		  			aria-label="Recipient's username" aria-describedby="button-addon2" 
		  			value={this.state.inputValue} style={{borderColor: this.state.color}}
		  			onChange={(e) => this.setState({inputValue: e.target.value}, () => {console.log(this.state.inputValue)})} />
					<p className={"validation-text " + this.state.errorValidation}>{this.state.errorMessage}</p>
	  			</div>

		)
	}

	
	render() {
		return (
			<form className={"form d-flex flex-column flex-md-row " + this.state.formPadding} id="form-input" onInput={this.onInput} onSubmit={this.onSubmit}>	
				{this.renderForm()}
				<button className={"btn " + this.state.formButton} type="submit" id="button-addon2">Shorten It!</button>
			</form>
		)
	}

}



export default connect(null, { fetchLink})(Form);