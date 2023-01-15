import React, {ChangeEvent, FC, KeyboardEvent} from 'react';
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import FormControl from "@mui/material/FormControl";
import {useAppDispatch, useAppSelector} from "../../redux/hooks/hooks";
import {changeSearchValue} from "../../redux/reducers/searchReducer";

type SearchPropsType = {
    handleSearch: (str: string) => void
}

export const Search: FC<SearchPropsType> = ({handleSearch}) => {

    const dispatch = useAppDispatch();

    const inputSearch = useAppSelector(state => state.search)

    const onChangeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeSearchValue(event.currentTarget.value))
    }

    const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            dispatch(changeSearchValue(''))
            onHandleSubmit()
        }
    }

    const onHandleSubmit = () => {
        handleSearch(inputSearch)
    }

    return (
        <FormControl sx={{width: '100%', mb: 3}} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Search</InputLabel>
            <OutlinedInput
                value={inputSearch}
                onChange={onChangeInputValue}
                onKeyDown={onKeyDown}
                id="outlined-adornment-password"
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            onClick={onHandleSubmit}
                            aria-label="toggle password visibility"
                            edge="end"
                            color="inherit"
                        >
                            <SearchIcon/>
                        </IconButton>
                    </InputAdornment>
                }
                label="Password"
            />
        </FormControl>
    );
};

export default Search;