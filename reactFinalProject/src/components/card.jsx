import React, { Component } from "react";

import { Link } from "react-router-dom";
import userService from "../services/userService";

class Card extends Component {
  state = {
    data: {
      card: {},
      user: {},
    },
    isFavorite: false,
  };

  async componentDidMount() {
    const { data } = await userService.getCurrentUserDetails();
    const { card }  = this.props;
    let isFavorite = data.favorites.find(cardId => cardId === card._id);

    this.setState({ data: { card, user: data }, isFavorite });
  }
  

  render() {
    const {
      state: {
        data: { card },
      },
    } = this;
    const {
      state: {
        data: { user },
      },
    } = this;
    const { state: {isFavorite} } = this;

    return (
      <div className="col-md-6 col-lg-4 mt-3 mb-4">
        <div className="card bg-dark card border-info">
          <img
            src={card.bizImage}
            height="100"
            width="150"
            alt={card.bizName}
            className="rounded mx-auto d-block mt-2 border border-secondary"
          />
          <div className="card-body bg-dark">
            <h5 className="change colors font-weight-bold font-italic">{card.bizName}</h5>
            <p className="card-text">{card.bizDescription}</p>
            <p className="card-text border-top pt-2">
              <b>Tel: </b>
              {card.bizPhone}
              <br />
              {card.bizAddress}
            </p>

            {user && user?.biz && (
              <React.Fragment>
                <Link
                  className="btn btn-sm btn-secondary"
                  to={`/my-cards/edit/${card._id}`}
                >
                  Edit
                </Link>
                <Link
                  className="ml-2 btn btn-sm btn-danger"
                  to={`/my-cards/delete/${card._id}`}
                >
                  Delete
                </Link>
              </React.Fragment>
            )}
            {user && !user?.biz && !isFavorite && (
              <button
                className="btn btn-dark border border-info text-light"
                onClick={async () => {
                  this.setState({isFavorite: true});
                  await userService.addToFav(card._id);
                }}>
                <i className="far fa-heart text-danger"></i> Add
              </button>
            )}
            {user && !user?.biz && isFavorite && (
              <button
                className="btn btn-dark border border-info"
                onClick={async () => {
                  this.setState({isFavorite: false });
                  await userService.removeFromFav(card._id);

                  if(window.location.pathname.includes('/favorites'))
                  window.location.reload();
                }}>
                  <i className="fas fa-heart text-danger"></i>
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Card;