import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],
}));

export default function RecipeReviewCard({allProductsData}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
console.log(allProductsData);//creating props and consoling this is the props created "allProductsData"
  return (
   <Box sx={{
     display:'flex',
     justifyContent:'space-around',
     flexWrap:'wrap',
     m:3
     }}>
    {/* array.map inside the box i.e allProductsData.map()*/}{/**Fetch some parameter inside the props i.e item */}
      {allProductsData.map((item)=>(
 <Card sx={{ maxWidth: 345, m:1, border:'1px solid grey' }}
 key={item.id}>{/*unique id you have to give /**parse it inside the back tick i.e `` and for normal thing you can use '/singleview:*/}
 <Link to={`/singleview/${item.id}`}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={item.title}
        subheader="September 14, 2016"
      />
  </Link>  {/**drop the card header inside the link tag  and mention the path inside the link i.e*/}
      <CardMedia
        component="img"
        height="194"
        image={item.images}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>

         {item.description} {/**pass the description */}

        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography sx={{ marginBottom: 2 }}>Waranty Info:</Typography>
          <Typography sx={{ marginBottom: 2 }}>

           {item.key}{/**pass the key by removing the description */}

          </Typography>
          <Typography sx={{ marginBottom: 2 }}>
            Shpping Information: {item.ShippingInformation}
          </Typography>
          <Typography sx={{ marginBottom: 2 }}>
            Shpping Information: {item.ShippingInformation}
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
      ))}  
   {/*cut the card and paste it to inside the map function with arrow function */}
    </Box>
  );
}
