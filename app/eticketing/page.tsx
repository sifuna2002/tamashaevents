'use client'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
   
  export default function Eticketing() {
    return (
        <>
        <NavBar />
        <Card className="w-full items-center mb-5 md:flex-row">
            <CardHeader
                shadow={false}
                floated={false}
                className="m-0 md:w-2/5 shrink-0 w-[90%] md:rounded-r-none rounded-none"
            >
                <img
                src="https://play-lh.googleusercontent.com/RbwES1o_I9-RsUFU4NPlZGoHqIpUs86TTQALqMS3fkFezjSauGO1ruwYyjB3YOrDqQ=w240-h480-rw"
                alt="card-image"
                className="h-full w-full object-cover"
                />
            </CardHeader>
            <CardBody>
                <Typography variant="h6" color="gray" className="mb-4 uppercase">
                E-Ticketing
                </Typography>
                <Typography variant="h6" color="blue-gray" className="mb-2">
                We are the ultimate destination for all your event ticketing needs. Whether you're a music lover, a sports enthusiast or a theater aficionado, we have got you covered with our wide range of event tickets. 
                </Typography>
                <Typography color="gray" className="mb-8 font-normal">
                With just a few clicks, you can easily browse through our vast collection of tickets for upcoming events, concerts, theatre shows, exhibitions, sports games, business summits and performances all in one convenient location. Our user-friendly interface makes it easy for you to find the events you're interested in and purchase tickets quickly and securely. The website is optimised for speed and performance so you can easily navigate and complete your purchase in a few minutes. With our mobile-responsive design, you can browse and buy tickets on-the-go, from anywhere and at any time. 
                </Typography>
                <a href="#" className="inline-block">
                <Button variant="text" className="flex items-center gap-2">
                    Contact Us
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="h-4 w-4"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                    </svg>
                </Button>
                </a>
            </CardBody>
        </Card>
      <Footer />
      </>
    );
  }