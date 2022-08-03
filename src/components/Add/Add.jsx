import { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  Add as AddIcon,
  ArrowDownward,
  EmojiEmotionsOutlined,
  Link,
  Upload,
} from "@mui/icons-material";

const StyledModal = styled(Modal)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginTop: "10px",
  marginBottom: "20px",
}));

const Add = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Tooltip
        title="Add Post"
        onClick={(e) => setOpen(true)}
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={320}
          padding={3}
          borderRadius={5}
          bgcolor="background.default"
          color="text.primary"
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              alt="Gwen Stacy"
              src="https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?cs=srgb&dl=pexels-daniel-xavier-1102341.jpg&fm=jpg"
            />
            <Typography variant="span">Stacy</Typography>
          </UserBox>
          <TextField
            id="outlined-multiline-static"
            multiline
            rows={4}
            placeholder="What's on your mind?"
            sx={{ width: "100%" }}
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotionsOutlined />
            <Link />
            <Upload />
          </Stack>
          <ButtonGroup
            variant="outlined"
            aria-label="outlined button group"
            fullWidth
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <ArrowDownward />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
