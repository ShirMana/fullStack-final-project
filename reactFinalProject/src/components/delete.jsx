import cardService from "../services/cardService";
import { toast } from "react-toastify";
import { Component } from "react";

class Delete extends Component {
    state = {};


  componentDidMount = async () =>  {
    const cardId = this.props.match.params.id;
    await cardService.deleteCard(cardId);
    toast("the card was deleted successfully");
    this.props.history.replace("/my-cards");
  }
  render = () => null;
}

export default Delete;
