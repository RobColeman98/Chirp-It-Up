import React, { Fragment } from "react"
import { RouteComponentProps } from "react-router-dom"
 import { IChirp } from "../client/utils/types"
import db from "../server/db/chirps"

export default class newChirp extends React.Component<IListProps, IListState>  {
    constructor(props: IListProps) {
        super(props)
        this.state = {
            name: "",
            content: ""
        }
        props.history.push("/")
    }
    submitChirp = (user: string, content: string) => {
        fetch("/api/chirps/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ user, content })
        })
        .then(res => this.props.history.push('/'))
        .catch(err => console.log(err));
    }
    render() {
        return (
            <div>
                <input id="username-input" className="form-control my-2" onChange={(e:React.ChangeEvent<HTMLInputElement>)  => { this.setState({ name: e.target.value }) }} value={this.state.name} />
                <input id="username-input" className="form-control my-2" onChange={(e:React.ChangeEvent<HTMLInputElement>) => { this.setState({ content: e.target.value }) }} value={this.state.content} />
                <button className="btn btn-dark" type="submit" onClick={() => this.submitChirp(this.state.name, this.state.content)}>
                    Add Chirp!
                    </button>
            </div>
        )
    }
}

interface IListProps extends RouteComponentProps<{ name: string }> {

}

interface IListState {
    name: string,
    content: string
}
