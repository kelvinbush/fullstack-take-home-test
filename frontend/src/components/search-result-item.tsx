import { Box, Button, Typography } from "@mui/material";
import SearchResultImage from "./search-result-image.tsx";

interface SearchResultItemProps {
  title: string;
  coverPhotoURL: string;
  author: string;
  onAddToReadingList: () => void;
}

const SearchResultItem = ({
  title,
  author,
  coverPhotoURL,
  onAddToReadingList,
}: SearchResultItemProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        alignItems: "center",
        p: 1,
      }}
    >
      <SearchResultImage title={title} imageUrl={coverPhotoURL} />
      <Box sx={{ flexGrow: 1 }}>
        <Typography
          sx={{
            color: "text.secondary",
            fontSize: 16,
            fontWeight: 600,
          }}
          variant="h6"
        >
          {title}
        </Typography>
        <Typography fontWeight="light" fontSize={14}>
          by {author}
        </Typography>
      </Box>
      <Button
        sx={{
          textTransform: "capitalize",
        }}
        variant="outlined"
        onClick={onAddToReadingList}
      >
        Add
      </Button>
    </Box>
  );
};

export default SearchResultItem;
