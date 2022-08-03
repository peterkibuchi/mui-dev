import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";

const Post = () => {
  return (
    <Card sx={{ margin: 5 }}>
      <CardHeader
        avatar={
          <Avatar
            aria-label="recipe"
            src="https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?cs=srgb&dl=pexels-daniel-xavier-1102341.jpg&fm=jpg"
          />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Gwen Stacy"
        subheader="September 14, 2022"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://images.pexels.com/photos/15286/pexels-photo.jpg?cs=srgb&dl=pexels-luis-del-r%C3%ADo-15286.jpg&fm=jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae
          est sed nulla hendrerit faucibus eget in leo. Proin lectus turpis,
          auctor non urna a, vehicula scelerisque ante. Nulla nec aliquet odio.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
