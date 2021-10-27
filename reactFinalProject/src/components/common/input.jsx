const Input = ({ name, label, error, ...rest }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input {...rest} name={name} id={name} className="form-control bg-dark text-light" />
            {error && <span className="text-danger">{error}</span>}
        </div>
    );
}

export default Input;