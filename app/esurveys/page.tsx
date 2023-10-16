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
                src="https://www.itp.net/cloud/2021/08/13/pOYaayJD-13651-tick-box_base1.jpg"
                alt="card-image"
                className="h-full w-full object-cover"
                />
            </CardHeader>
            <CardBody>
                <Typography variant="h6" color="gray" className="mb-4 uppercase">
                E-Surveys
                </Typography>
                <Typography variant="h6" color="blue-gray" className="mb-2">
                Our platform offers an easy and efficient way for businesses, organizations and individuals to create and conduct surveys that gather valuable feedback and insights. 
                </Typography>
                <Typography color="gray" className="mb-8 font-normal">
                Whether you're looking to conduct market research, evaluate customer satisfaction or gather employee feedback, our e-survey website provides the tools and resources you need to get the job done. With a wide range of customizable survey templates and intuitive design tools, you can create surveys that are tailored to your specific needs & objectives. Our platform is designed to be user -friendly and accessible, making it easy for participants to complete surveys quickly and easily. Plus, with our advanced analytics and reporting tools, you can easily interpret and analyze the data you collect, giving you a deeper understanding of your audience and their needs.
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