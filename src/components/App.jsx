import React, { Component } from "react";
import { Section } from "./Section/Section";
import { ContactForm } from "./Contact/Contact";
import Notiflix from "notiflix";
import { Container } from './App.styled'


export default class App extends Component {
	state = {
		contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
		filter: '',
	}

	addContact = newContact => {
		this.state.contacts.filter(
			contact =>
				contact.name.toLowerCase().trim() ===
				newContact.name.toLowerCase().trim() ||
				contact.number.trim() === newContact.number.trim()
		).length
			? Notiflix.Report.warning('warning', `${newContact.name} is already in contacts.`)
			: this.setState(prevState => {
				return {
					contacts: [newContact, ...prevState.contacts],
				};
			});
	};

	render() {
		return (
		<Container>
			<Section title="Phonebook">
				<ContactForm onAddContact={this.addContact} />

			</Section>
		</Container>
		);
	}
}

