import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { withStyles } from '@material-ui/core/styles';

const AutocompleteWrapper = withStyles({
    root: {
        fontSize: '1.6rem',
        marginBottom: '1.2rem',
        width: '30rem',
    },
    option: {
        fontSize: '1.5rem',
        '& > span': {
            marginRight: '1rem',
            fontSize: '1.8rem',
        },
    },
})(Autocomplete);

const SelectMenu = ({ type, list, onSelectChange }) => {
    const label = `Choose a ${type}`;

    return (
        <AutocompleteWrapper
            id="select-menu"
            options={list}
            autoHighlight
            getOptionLabel={(option) => option.name}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={label}
                />
            )}
            onChange={(event, value) => onSelectChange(value)}
        />
    );
}

SelectMenu.propTypes = {
    type: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired,
    onSelectChange: PropTypes.func.isRequired,
};

export default React.memo(SelectMenu);
