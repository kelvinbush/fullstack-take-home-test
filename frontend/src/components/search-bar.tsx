import { IconButton, InputBase, Paper } from "@mui/material";
import React from "react";
import { Close } from "@mui/icons-material";

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchBar = ({ searchQuery, setSearchQuery }: SearchBarProps) => {
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const clearSearch = () => setSearchQuery("");

  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search by books title"
        inputProps={{ "aria-label": "search books" }}
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <IconButton
        type="button"
        sx={{ p: "10px" }}
        aria-label="search"
        onClick={clearSearch}
      >
        <Close />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
