import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import { IUserInput } from '../../Common/Interfaces'
import "./SearchBar.css"

interface ISearchBarProps {
    SetUserInput: (a: IUserInput) => void;
}

const SearchBar = (props: ISearchBarProps) => {
    const [SearchQuery, setSearchQuery] = useState<string | undefined>("");
    const handleSearchQueryChange = (s: string | undefined) => {
        setSearchQuery(s);
    }
    const [SearchType, setSearchType] = useState<string | undefined>("movie");
    const handleSearchTypeChange = (s: string | undefined) => {
        console.log("@@" + s)
        setSearchType(s);
    }    
    const handleSubmit = (e:any) => {
        e.preventDefault()
        console.log(SearchQuery);

        if (SearchQuery?.length !== 0 && SearchQuery !== null && SearchQuery !== "") {
            let UserInput: IUserInput = {
                SearchQuery: SearchQuery,
                SearchType: SearchType
            }
            console.log("@@" + SearchType)
            props.SetUserInput(UserInput);
        } 
    }

    return(
        <div className="searchDiv">
            <Form onSubmit={(event:any)=>handleSubmit(event)}>
                <InputGroup>
                <Form.Control as="select" onClick={(e:any) => handleSearchTypeChange(e.target.value)}>
                    <option value="movie">Movies</option>
                    <option value="tv">TV Shows</option>
                </Form.Control>

                <FormControl   
                    onChange={(e:any) => handleSearchQueryChange(e.target.value)} 
                    type="text" 
                    autoComplete="off" 
                    name="searchValue" 
                    placeholder="Enter search query..."/>
                <Button type="submit" className="btn-secondary">Search</Button>
                </InputGroup>
            </Form>
        </div>
    )
}

export default SearchBar