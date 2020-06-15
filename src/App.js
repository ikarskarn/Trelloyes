import React from 'react';
import List from './composition/List.js';
import './App.css';

const newRandomCard = () => {
	const id = Math.random().toString(36).substring(2,4)
	+ Math.random().toString(36).substring(2,4);
	return {
		id,
		title: `Random Card ${id}`,
		content: 'lorem ipsum',
	}
}

function omit(obj, keyToOmit) {
	return Object.entries(obj).reduce(
		(newObj, [key, value]) => 
			key === keyToOmit ? newObj : {...newObj, [key]: value},
			{}
	);
}

class App extends React.Component {
	//static defaultProps = {
	//	store: {
	//		lists: [],
	//		allCards: {},
	//	}
	//};

	state = {
		lists: [
			{
				id: '1',
				header: 'First list',
				cardIds: [ 'a', 'b', 'e', 'f', 'g', 'n', 'o', 'q', 'r', 's', 'u' ],
			},
			{
				id: '2',
				header: 'Second list',
				cardIds: [ 'c', 'd', 'h', 'i', 'k'],
			},
			{
				id: '3',
				header: 'Third list',
				cardIds: [ 'j' ],
			},
			{
				id: '4',
				header: 'Fourth list',
				cardIds: [ 'l', 'm', 'p', 't', 'v' ],
			},
		],
		allCards: {
			'a': { id: 'a', title: 'First card', content: 'lorem ipsum' },
			'b': { id: 'b', title: 'Second card', content: 'lorem ipsum' },
			'c': { id: 'c', title: 'Third card', content: 'lorem ipsum' },
			'd': { id: 'd', title: 'Fourth card', content: 'lorem ipsum' },
			'e': { id: 'e', title: 'Fifth card', content: 'lorem ipsum' },
			'f': { id: 'f', title: 'Sixth card', content: 'lorem ipsum' },
			'g': { id: 'g', title: 'Seventh card', content: 'lorem ipsum' },
			'h': { id: 'h', title: 'Eighth card', content: 'lorem ipsum' },
			'i': { id: 'i', title: 'Ninth card', content: 'lorem ipsum' },
			'j': { id: 'j', title: 'Tenth card', content: 'lorem ipsum' },
			'k': { id: 'k', title: 'Eleventh card', content: 'lorem ipsum' },
			'l': { id: 'l', title: 'Twelfth card', content: 'lorem ipsum' },
			'm': { id: 'm', title: 'Thirteenth card', content: 'lorem ipsum' },
			'n': { id: 'n', title: 'Fourteenth card', content: 'lorem ipsum' },
			'o': { id: 'o', title: 'Fifteenth card', content: 'lorem ipsum' },
			'p': { id: 'p', title: 'Sixteenth card', content: 'lorem ipsum' },
			'q': { id: 'q', title: 'Seventeenth card', content: 'lorem ipsum' },
			'r': { id: 'r', title: 'Eighteenth card', content: 'lorem ipsum' },
			's': { id: 's', title: 'Nineteenth card', content: 'lorem ipsum' },
			't': { id: 't', title: 'Twentieth card', content: 'lorem ipsum' },
			'u': { id: 'u', title: 'Twenty-first card', content: 'lorem ipsum' },
			'v': { id: 'v', title: 'Twenty-second card', content: 'lorem ipsum' },
		},
	};
	
	handleDeleteCard = (cardId) => {
		const lists = this.state.lists;
		const allCards = this.state.allCards;
		
		const newLists = lists.map(list => ({
			...list,
			cardIds: list.cardIds.filter(id => id !== cardId)
		}));

		const newCards = omit(allCards, cardId);

		this.setState({
			lists: newLists,
			allCards: newCards
		})
		//console.log('handle delete card called', {item});
	}

	handleAddRandomCard = (listId) => {
		const newCard = newRandomCard();

		const newLists = this.state.lists.map(list => {
			if (list.id === listId) {
				return {
					...list,
					cardIds: [...list.cardIds, newCard.id]
				};
			}
			return list;
		})

		this.setState({
			lists: newLists,
			allCards: {
				...this.state.allCards,
				[newCard.id]: newCard
			}
		})
	};

	render() {
		//const {store} = this.state
		const store = this.state;
		return (
			<main className='App'>
				<header className='App-header'>
					<h1>Trelloyes!</h1>
				</header>
				<div className="App-list">
					{store.lists.map(list => (
						<List
							key={list.id}
							id={list.id}
							header={list.header}
							cards={list.cardIds.map(id => store.allCards[id])}
							onDeleteCard={this.handleDeleteCard}
							onAddRandomCard={this.handleAddRandomCard}
						/>
					))}
				</div>
			</main>
		);
	}
}

export default App;