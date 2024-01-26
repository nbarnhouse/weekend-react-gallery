import Card  from "@mui/material/Card";

import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import CardHeader  from "@mui/material/CardHeader";
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import FavoriteIcon from '@mui/icons-material/Favorite';




export default function GalleryItem({ picture }) {

    return (
        <>
        <Card>
          
        <CardMedia
        component="img"
        height="194"
        image="public/images/goat_small.jpg"
        alt="React Image"
        />


        
           <CardHeader title={picture.title}
        subheader="Likes: ${picture.likes}" />



   

        <CardContent>
        <Typography variant="body2" color="text.secondary">
        {picture.description}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        </CardActions>

        </Card>
        </>

    
    );
}