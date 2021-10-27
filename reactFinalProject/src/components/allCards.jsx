
import { Component } from 'react';
import cardService from '../services/cardService';
import PageHeader from './common/pageHeader';
import Card from './card';


class AllCards extends Component {
    state = {
        cards: []
    }

    async componentDidMount() {
        const { data } = await cardService.getAllCards();
        if (data.length) {
            this.setState({ cards: data });
        }
    }


    render() {
        const { state: { cards } } = this;

        return (
            <div className="container">
                <PageHeader titleText="All cards" />

                <div className="row">
                    <div className="col-12">
                        <p>All Cards in the Website are presented Here</p>
                    </div>    
                </div>
                <div className="row">
                    {cards.length && cards.map(card => <Card key={card._id} card={card} />)}
                </div>
            </div>
        )
    }
}

export default AllCards;
