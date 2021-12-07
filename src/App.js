import * as React from "react";
import {useState} from "react"
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import Paper from "@mui/material/Paper";
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import TextField from "@mui/material/TextField";
import dogo from "./assets/dogo.jpeg";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import GitHubIcon from "@mui/icons-material/GitHub";
import ScienceIcon from '@mui/icons-material/Science';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ReactComponent as Logo } from "./assets/logo.svg";
import { DropzoneArea } from "material-ui-dropzone";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import LinearProgress from "@mui/material/LinearProgress";
import {Snackbar, Accordion , AccordionSummary, AccordionDetails} from "@mui/material";
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

const tickCross = (description, tick, cross) => {
    return { description, tick, cross };
};

const rows = [
    tickCross("Make accurate predictions", "✔️", "✔️"),
    tickCross("No Machine Learning expertise needed", "✔️", "✔️"),
    tickCross("No training data needed", "✔️", "✔️"),
    tickCross(
        "Able to integrate Video and Image recognition into your app ",
        "✔️",
        "✔️"
    ),
    tickCross(
        "Always learning and getting the latest models ",
        "✔️",
        "Will pull updates every week from Cloud EVE"
    ),
    tickCross("No need to setup infrastructure", "✔️", "X"),
    tickCross("No need to maintain Eve", "✔️", "X"),
    tickCross("Free", "Will always have a free tier", "✔️"),
];

var image;
var video;


export default function Main() {
    const [loadingImagePrediction, setImageLoadingPrediction] = useState(false);
    const [imagePrediction, setImageImagePrediction] = useState(null);
    const [loadingVideoPrediction, setVideoLoadingPrediction] = useState(false);
    const [videoPrediction, setVideoPrediction] = useState(null);
    const [openn, setOpen] = React.useState(false);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };
    const predictImage = (image) => {
        console.log(image);
        if (image === undefined) {
            console.log("No Image found");
            return 0;
        }
        setImageLoadingPrediction(true);
        setImageImagePrediction(null);

        var formdata = new FormData();
        formdata.append("image", image);
    
        var requestOptions = {
            method: "POST",
            body: formdata,
            // mode: "no-cors",
            dataType: "text",
        };
    
        fetch("http://localhost:8080/detectObjectsInImage", requestOptions)
            .then((response) => {console.log(response); return response.text()})
            .then((message) => {setImageImagePrediction(message); setImageLoadingPrediction(false)})
            .catch((error) => errorMessage(error));
    };
    const errorMessage=(error)=>{
        // console.log(error);
        return (<Snackbar
  open={openn}
  autoHideDuration={6000}
  onClose={handleClose}
  message={"error"}
//   action={action}
/>);
    }
    errorMessage("sdas");

    const predictVideo = (video) => {
        if (video === undefined) {
            console.log("No Video found");
            return 0;
        }
        setVideoLoadingPrediction(true);
        setVideoPrediction(null);
        var formdata = new FormData();
        formdata.append("video", video);
        var requestOptions = {
            method: "POST",
            body: formdata,
            dataType: "text",
        };
        fetch("http://localhost:8080/detectObjectsInVideo", requestOptions)
            .then((response) => {console.log(response); return response.text()})
            .then((message) => {setVideoPrediction(message); setVideoLoadingPrediction(false)})
            .catch((error) => errorMessage(error));
    };
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {/* <AppBar position="relative">
        <Toolbar>
          {/* <Logo style={{width:"30%"}} stroke="white" fill="white"/> *}
          
        </Toolbar>
      </AppBar> */}
            <main>
                <Paper
                    sx={{
                        bgcolor: "background.paper",
                        pt: 8,
                        pb: 6,
                    }}
                >
                    <Container maxWidth="sm">
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="text.primary"
                            gutterBottom
                        >
                            EVE
                        </Typography>
                        <Stack
                            spacing={1}
                            direction={"row"}
                            style={{ justifyContent: "center" }}
                        >
                            <iframe
                                src="https://ghbtns.com/github-btn.html?user=AIDeepLabs&repo=WinningEve-Server&type=star&count=true"
                                frameborder="0"
                                scrolling="0"
                                width="150"
                                height="20"
                                title="GitHub"
                            ></iframe>
                            <iframe
                                src="https://ghbtns.com/github-btn.html?user=AIDeepLabs&repo=WinningEve-Server&type=watch&count=true&v=2"
                                frameborder="0"
                                scrolling="0"
                                width="150"
                                height="20"
                                title="GitHub"
                            ></iframe>
                            <iframe
                                src="https://ghbtns.com/github-btn.html?user=AIDeepLabs&repo=WinningEve-Server&type=fork&count=true"
                                frameborder="0"
                                scrolling="0"
                                width="150"
                                height="20"
                                title="GitHub"
                            ></iframe>
                        </Stack>

                        <br />
                        <Typography
                            variant="h6"
                            align="center"
                            color="text.secondary"
                            paragraph
                        >
                            An open-source, free, REST Solution For Image and
                            Video Recognition for your next project.
                        </Typography>
                        <br />
                        <Stack
                            direction="row"
                            spacing={1}
                            style={{ justifyContent: "center" }}
                        >
                            <Button variant="contained" href={"#tryItOut"} endIcon={<ScienceIcon/>}>
                                Try It Out
                            </Button>
                            <Button
                                variant="contained"
                                href="https://github.com/AIDeepLabs/WinningEve-Server"
                                style={{
                                    backgroundColor: "#333",
                                    color: "#FFFFFF",
                                }}
                                endIcon={<GitHubIcon />}
                            >
                                View on GitHub
                            </Button>
                            <Button
                                variant="contained"
                                href="https://documenter.getpostman.com/view/10049267/UVJhEFMH"
                                style={{
                                    backgroundColor: "#EF5B25",
                                    color: "#FFFFFF",
                                }}
                                endIcon={<CollectionsBookmarkIcon />}
                            >
                                View API Docs
                            </Button>
                        </Stack>
                    </Container>
                </Paper>
                <Paper>
                    <Container sx={{ py: 8 }} maxWidth="lg">
                        <Stack spacing={2}>
                            <Typography variant="h5">
                                Why does EVE exists?
                            </Typography>
                            <Typography variant="body1">
                                Ever wanted to add a bit of image or video
                                recognition into your application, but didn’t
                                know where to get started? Also wanted to use a
                                solution which is open-source and free to use
                                and not proprietary and hidden behind mysterious
                                companies? <br /> <br /> I faced this problem
                                when I wanted to create an app to sort out
                                photos and videos. Unfortunately, all the
                                solutions I found were paid or the solutions
                                were proprietary and no information was on how
                                they functioned. <br /> <br /> I decided to
                                create EVE, a free, open-source, REST API
                                solution for image and video recognition.
                            </Typography>
                            

                            <Stack
                                sx={{ pt: 4 }}
                                direction="column"
                                spacing={2}
                                justifyContent="center"
                            >
                                <Typography variant="h5">
                                The Power of EVE through example
                            </Typography>
                                <Typography variant="body1">
                                    Lets pass EVE an image lets say this cute
                                    doggo one:
                                </Typography>
                                <img
                                    src={dogo}
                                    style={{
                                        width: "30%",
                                        alignSelf: "center",
                                    }}
                                    alt="dogo"
                                />

                                <Typography variant="body1">
                                    We can send EVE multiple ways as it is just
                                    a REST service lets use CURL, to send an
                                    image to EVE to identify.
                                </Typography>
                                <SyntaxHighlighter
                                    showLineNumbers
                                    language="bash"
                                >
                                    curl --location --request POST
                                    'http://aideeplabs/EVE/detectObjectsInImage'
                                    --form 'image=@"dogo.jpeg"'
                                </SyntaxHighlighter>
                                <Typography variant="body1">
                                    EVE is lightning quick and accurate as it is
                                    built using multiple models such as ResNet.
                                    EVE then responds back in a JSON format.
                                </Typography>
                                <SyntaxHighlighter
                                    showLineNumbers
                                    language="json"
                                >
                                    {`{
  "Lhasa": 0.02862674929201603,
  "Maltese dog": 0.9127932190895081,
  "Shih-Tzu": 0.00895776879042387,
  "Tibetan terrier": 0.018368251621723175,
  "toy poodle": 0.012540102936327457
}`}
                                </SyntaxHighlighter>
                                <Typography variant="body1">
                                    Here we see that EVE has accurately
                                    identifies the image as a Maltese doggo with
                                    a 91% accuracy.
                                </Typography>
                            </Stack>

                            <Typography id={"tryItOut"} variant="h5">
                                Try It Out
                            </Typography>
                            <Typography variant="body1">
                                EVE can predict videos and images. Feel free to
                                try your own images and videos. Please note that the images and videos have a quota based on the amount of requests you make. If you exceed the quota you will be blocked, this is so everyone can try the prototype of EVE. Also feel free to run your own code, here is the documentation for EVE: <a href="https://documenter.getpostman.com/view/10049267/UVJhEFMH">Documentation</a>
                            </Typography>
                            <Typography variant="h6">Images</Typography>
                            <Typography variant="body1">
                                Pick an Image to send to EVE for a prediction.
                            </Typography>
                            <DropzoneArea
                                filesLimit={1}
                                acceptedFiles={["image/*"]}
                                dropzoneText={
                                    "Drag and drop an image here or click"
                                }
                                onChange={(files) => (image = files[0])}
                            />
                            <Button
                                variant="contained"
                                onClick={() => predictImage(image)}
                            >
                                Predict
                            </Button>
                            {loadingImagePrediction && <LinearProgress />}
                            {imagePrediction && <SyntaxHighlighter
                                    showLineNumbers
                                    language="json"
                                >{imagePrediction.replaceAll(",",",\n")}</SyntaxHighlighter>}

                            <Typography variant="h6">Videos</Typography>
                            <Typography variant="body1">
                                Pick an Video to send to EVE for a prediction.
                            </Typography>
                            <DropzoneArea
                                filesLimit={1}
                                acceptedFiles={["video/*"]}
                                maxFileSize={1024 * 1024 * 100}
                                dropzoneText={
                                    "Drag and drop an video here or click"
                                }
                                onChange={(files) => (video = files[0])}
                            />
                            <Button
                                variant="contained"
                                onClick={() => predictVideo(video)}
                            >
                                Predict
                            </Button>
                          
                            {loadingVideoPrediction && <LinearProgress />}
                            {videoPrediction && <SyntaxHighlighter
                                    showLineNumbers
                                    language="json"
                                >{videoPrediction.replaceAll(",",",\n")}</SyntaxHighlighter>}
                            <Typography variant="h5">EVEs flavours</Typography>
                            <Typography variant="body1">
                                EVE is still being built in two flavours: cloud
                                based and a standalone community version.
                            </Typography>
                            <TableContainer component={Paper}>
                                <Table stickyHeader aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Features</TableCell>
                                            <TableCell>Cloud EVE</TableCell>
                                            <TableCell>
                                                Standalone Community EVE
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row) => (
                                            <TableRow key={row.description}>
                                                <TableCell
                                                    component="th"
                                                    scope="row"
                                                >
                                                    {row.description}
                                                </TableCell>
                                                <TableCell>
                                                    {row.tick}
                                                </TableCell>
                                                <TableCell>
                                                    {row.cross}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <Typography variant="h5">
                                Stay informed about upcoming updates by
                                registering your email here:
                            </Typography>
                            <Stack
                                sx={{ pt: 4 }}
                                direction="row"
                                spacing={2}
                                justifyContent="center"
                            >
                                <TextField
                                    label="Email"
                                    inputProps={{ inputMode: "email" }}
                                />
                                <Button variant="contained">
                                    Register your Interest
                                </Button>
                                
                            </Stack>
                            <Typography variant="body1">
                                If you have any feedback or comments feel free to email me at asim@poptani.com.
                            </Typography>
                        </Stack>
                    </Container>
                </Paper>
            </main>
            {/* Footer */}
            <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
                <Typography
                    variant="h6"
                    align="center"
                    gutterBottom
                ></Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                ></Typography>
            </Box>
            {/* End footer */}
        </ThemeProvider>
    );
}
