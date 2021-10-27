
import { Component } from 'react';
import userService from '../services/userService';
import PageHeader from './common/pageHeader';
import Card from './card';


class Favorites extends Component {
    state = {
        cards: []
    }

    async componentDidMount() {
        const { data } = await userService.getFavorites();
        if (data.length) {
            this.setState({ cards: data });
        }
    }


    render() {
        const { state: { cards } } = this;

        return (
            <div className="container">
                <PageHeader titleText="My Favorite cards" />

                <div className="row">
                    <div className="col-12">
                        <p>Your Favorite cards are presented hear:</p>
                    </div>    
                </div>
                <div className="row">
                    {cards.length && cards.map(card => <Card key={card._id} card={card} />)}
                </div>
            </div>
        )
    }
}

export default Favorites;
