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
   
  export default function Evoting() {
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
                src="https://img.freepik.com/free-vector/electronic-voting-abstract-concept-illustration-electronic-election-online-voting-e-voting-system-government-digital-technology-internet-ballot-campaign-website_335657-437.jpg?w=2000"
                alt="card-image"
                className="h-full w-full object-cover"
                />
            </CardHeader>
            <CardBody>
                <Typography variant="h6" color="gray" className="mb-4 uppercase">
                E-Voting
                </Typography>
                <Typography variant="h6" color="blue-gray" className="mb-2">
                We offer a one-of-a-kind platform for casting your vote in a variety of elections, including local voting programmes for award shows, beauty pageants as well as national, institutional, academic & corporate elections. 
                </Typography>
                <Typography color="gray" className="mb-8 font-normal">
                Our state of the art platform has been designed with you in mind, making it easy for you to cast your votes and stay informed throughout the voting process. We use the latest encryption technology to ensure that your vote is secure and your personal information is protected. Whether you are casting your vote in a local beauty pageant or a corporate election, our user friendly interface makes the voting process quick and easy. Plus, with the real-time vote counting and comprehensive election results, you can stay up to date with the latest updates as they happen.
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