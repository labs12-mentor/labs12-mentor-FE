import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
    dense: {
      marginTop: 19,
    },
});
  
class ProfileForms extends React.Component {
    state = {
        profileLinks: 'enter description here',
        interests: '',
        experience: '',
        openQuestionField: ''
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };
    
    render() {
        const { classes } = this.props;

        return (
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    id="standard-multiline-flexible"
                    label="Add Profile Link Option"
                    multiline
                    rowsMax="4"
                    value={this.state.multiline}
                    onChange={this.handleChange('profileLinks')}
                    className={classes.textField}
                    margin="normal"
                />

                <TextField
                    id="standard-multiline-flexible"
                    label="Add Interest Option"
                    multiline
                    rowsMax="4"
                    value={this.state.multiline}
                    onChange={this.handleChange('interests')}
                    className={classes.textField}
                    margin="normal"
                />

                <TextField
                    id="standard-multiline-flexible"
                    label="Add Experience Option"
                    multiline
                    rowsMax="4"
                    value={this.state.multiline}
                    onChange={this.handleChange('experience')}
                    className={classes.textField}
                    margin="normal"
                />

                <TextField
                    id="standard-multiline-flexible"
                    label="Add Open Question Field"
                    multiline
                    rowsMax="4"
                    value={this.state.multiline}
                    onChange={this.handleChange('openQuestionField')}
                    className={classes.textField}
                    margin="normal"
                />
            </form>
        );
    }
}


export default withStyles(styles)(ProfileForms);
