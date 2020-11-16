import React, { Fragment } from "react"
import {IChirp} from "./utils/types"

export default class ChirpID extends React.Component<IIdProps, IIdState> {
    constructor(props: IIdProps) {
        super(props)
        this.state = {
            user: "",
            content: ""
        }
    }
}


interface IIdProps {

}

interface IIdState {
    user: string,
    content: string
}



