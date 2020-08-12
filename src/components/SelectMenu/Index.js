import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { withStyles } from '@material-ui/core/styles';

const AutocompleteWrapper = withStyles({
    root: {
        fontSize: '1.6rem',
    },
    option: {
        fontSize: 15,
        '& > span': {
            marginRight: 10,
            fontSize: 18,
        },
    },
})(Autocomplete);

const SelectMenu = ({ type, list, onSelectChange }) => {
    const label = `Choose a ${type}`;

    return (
        <AutocompleteWrapper
            id="select-menu"
            style={{ width: 300 }}
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
    list: PropTypes.array.isRequired,
    onSelectChange: PropTypes.func.isRequired,
};

export default SelectMenu;
