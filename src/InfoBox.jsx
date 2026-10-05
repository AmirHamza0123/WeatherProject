import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({ weatherInfo }) {
    //let  dustyImg="https://media.istockphoto.com/id/1385644205/photo/saharastaub-in-marktl-am-inn-marktler-aussicht-landkreis-alt%C3%B6tting-oberbayern-bayern.jpg?s=612x612&w=0&k=20&c=8Yz3_U9SbjlIOgql8JUDEInQYJMpmtZKNybT3hsOn-k=";
    let hotImg = "https://images.unsplash.com/photo-1525490829609-d166ddb58678?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvdCUyMHdlYXRoZXIlMjBpbWd8ZW58MHx8MHx8fDA%3D";
    let coldImg = "https://images.unsplash.com/photo-1478265409131-1f65c88f965c?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let rainyImg = "https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return (

        <div className="InfoBox">
            <div className="card">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={weatherInfo.humidity > 80 ? rainyImg : weatherInfo.temp >= 20 ? hotImg : coldImg}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {weatherInfo.city}{
                              weatherInfo.humidity > 80 ?<ThunderstormIcon/>
                              : weatherInfo.temp >= 20 ? 
                              <SunnyIcon/> : <AcUnitIcon/>
                            }
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                            <p>Temperature= {weatherInfo.temp}&deg;c</p>
                            <p>Humidity= {weatherInfo.humidity}&deg;c</p>
                            <p>Max-Temp= {weatherInfo.temp_max}&deg;c</p>
                            <p>Min-Temp= {weatherInfo.temp_min}&deg;c</p>
                            <p>The Wheather Can Be Discribed As <b>{weatherInfo.weather}</b> And Feels Like {weatherInfo.feels_like}&deg;c</p>
                        </Typography>
                    </CardContent>
                </Card>

            </div>

        </div>
    )
}