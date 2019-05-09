import React from "react";
import { connect } from "react-redux";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import {createMatch, updateMatch} from "../../actions/matches";

class MatchForm extends React.Component {
    state ={
        mentor_id: "",
        mentee_id: "",
        match_score: "",
        status: "",
        start_date: "",
        end_date: "",
        deleted: false,
        canEdit: false,
    }

    
}

export default connect (
    null,
    {createMatch, updateMatch}
)(MatchForm)

