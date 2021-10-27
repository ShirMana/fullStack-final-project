import Form from './common/form';
import PageHeader from './common/pageHeader';
import Joi from 'joi-browser';
import { toast } from 'react-toastify';
import userService from "../services/userService";


class EditUser extends Form {
    state = {
        data: { email: "", password: "", name: "" },
        errors: {}
    };

    schema = {
        email: Joi.string().required().email().label("Email"),
        password: Joi.string().required().min(6).label("Password"),
        name: Joi.string().required().min(2).label("Name"),
    }


    async componentDidMount() {
        let { data }  = await userService.getCurrentUserDetails();
        this.setState({ data: this.mapToViewModel(data) })
    }

    mapToViewModel(user) {
        return {
            email: user.email,
            password: "",
            name: user.name    
        }
    }

    doSubmit = async () => {
        const { state: { data } } = this;
        await userService.updateUser(data);
        toast("User Is Updated");
        this.props.history.replace("/");
    }

    handleCancel = () => {
        this.props.history.push('/');
    }

    render() {
        return <div className="container">
            <PageHeader titleText="Edit User Details"></PageHeader>
            <div className="row">
                <div className="col-12">
                    <p>Edit User Details</p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <form onSubmit={this.handleSubmit} autoComplete="off" method="POST">
                        {this.renderInput("name", "Name")}
                        {this.renderInput("email", "Email")}
                        {this.renderInput("password", "Password", "password")}
                        {this.renderButton("Update User")}
                        <button className="btn btn-secondary ml-2" onClick={this.handleCancel}>
                            Cancel
                        </button>
                    </form>
                </div>
            </div>
        </div>
    }
}

export default EditUser;