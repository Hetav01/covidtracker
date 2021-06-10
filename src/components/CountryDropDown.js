import React from 'react';
import { NativeSelect, FormControl, Box } from '@material-ui/core';
import "../style/dropdown.css";

const CountryDropDown = () => {

    return (
        <Box className="boxContainer" justifyContent="center" display="flex">
            <FormControl className="formControl">
                <NativeSelect className="nativeSelect">
                    <option className="options" value="">World</option>
                    <option className="options" value="">Worlds</option>
                </NativeSelect>
            </FormControl>
        </Box>
    );
};

export default CountryDropDown;