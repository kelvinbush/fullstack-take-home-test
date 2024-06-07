import { Box, Button, Card, Typography } from "@mui/material";
import ReadingListImage from "./reading-list-image.tsx";

interface ReadingListItemProps {
  title: string;
  coverPhotoURL: string;
  author: string;
  readingLevel: string;
  onRemoveFromReadingList: () => void;
}

const ReadingListItem = ({
  title,
  coverPhotoURL,
  author,
  readingLevel,
  onRemoveFromReadingList,
}: ReadingListItemProps) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        width: { xs: 155, md: 200 },
        gap: 1,
      }}
      elevation={3}
    >
      <ReadingListImage imageUrl={coverPhotoURL} title={title} />
      <Box sx={{ px: 1 }}>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 700,
            color: "text.secondary",
          }}
        >
          {title}
        </Typography>
        <Typography sx={{ fontWeight: 500, fontSize: "14px" }}>
          by: {author}
        </Typography>
        <Typography sx={{ fontStyle: "italic", fontSize: "12px" }}>
          Level: {readingLevel}
        </Typography>
      </Box>
      <Button
        sx={{
          mt: "auto",
          textTransform: "capitalize",
          color: "secondary.main",
          width: "min-content",
        }}
        onClick={onRemoveFromReadingList}
      >
        Remove
      </Button>
    </Card>
  );
};

export default ReadingListItem;
