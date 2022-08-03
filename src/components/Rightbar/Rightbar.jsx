import React from "react";
import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={300} mb={1}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar
            alt="Katya Kazanova"
            src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?cs=srgb&dl=pexels-vinicius-wiesehofer-1130626.jpg&fm=jpg"
          />
          <Avatar
            alt="Lana Kane"
            src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-774909.jpg&fm=jpg"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=800"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://images.pexels.com/photos/1090387/pexels-photo-1090387.jpeg?auto=compress&cs=tinysrgb&w=800"
          />
          <Avatar
            alt="Pam Poovey"
            src="https://images.pexels.com/photos/2156416/pexels-photo-2156416.jpeg?auto=compress&cs=tinysrgb&w=800"
          />
          <Avatar
            alt="Cheryl Tunt"
            src="https://images.pexels.com/photos/1752134/pexels-photo-1752134.jpeg?auto=compress&cs=tinysrgb&w=800"
          />
          <Avatar
            alt="Fubuki Sama"
            src="https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=800"
          />
          <Avatar
            alt="Fubuki Sama"
            src="https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=800"
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={300} mt={2} mb={1}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={150}>
          <ImageListItem>
            <img
              alt=""
              src={`https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?cs=srgb&dl=pexels-vinicius-wiesehofer-1130626.jpg&fm=jpg?w=164&h=164&fit=crop&auto=format`}
            />
          </ImageListItem>
          <ImageListItem>
            <img
              alt=""
              src={`https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?cs=srgb&dl=pexels-vinicius-wiesehofer-1130626.jpg&fm=jpg?w=164&h=164&fit=crop&auto=format`}
            />
          </ImageListItem>
          <ImageListItem>
            <img
              alt=""
              src={`https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?cs=srgb&dl=pexels-vinicius-wiesehofer-1130626.jpg&fm=jpg?w=164&h=164&fit=crop&auto=format`}
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={300} mt={2}>
          Latest Conversations
        </Typography>
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            maxHeight: 150,
            bgcolor: "background.paper",
            overflowY: "scroll",
          }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-774909.jpg&fm=jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Cheryl Tunt
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Pam Poovey"
                src="https://images.pexels.com/photos/1090387/pexels-photo-1090387.jpeg?auto=compress&cs=tinysrgb&w=800"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Cindy Baker"
                src="https://images.pexels.com/photos/1752134/pexels-photo-1752134.jpeg?auto=compress&cs=tinysrgb&w=800"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
