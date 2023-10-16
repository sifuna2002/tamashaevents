'use client'
import {
    Card,
    CardHeader,
    CardBody,
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
                src="https://www.cminds.com/wp-content/uploads/edd/WPBookingCalendarEventsS.png"
                alt="card-image"
                className="h-full w-full object-cover"
                />
            </CardHeader>
            <CardBody>
                <Typography variant="h6" color="gray" className="mb-4 uppercase">
                Book Venue or Artist
                </Typography>
                <Typography variant="h6" color="blue-gray" className="mb-2">
                Our goal with this is to make event planning hassle-free and affordable for everyone. The platform allows you to book event venues, artists, suppliers and other creatives at a discounted price. We understand that organizing an event can be a daunting task and finding the perfect venue, artist or creative can be time-consuming and expensive.
                </Typography>
                <Typography color="gray" className="mb-8 font-normal">
                Therefore we have created this user-friendly website that brings together a vast collection of venues, artists and creatives from different parts of the nation.

The platform offers an extensive range of discounts and coupons that users can use to book their preferred venue, artist or creative. Our team works tirelessly to negotiate the best deals with our partners, and we pass on these savings to our users. We feature detailed profiles for each venue, artist and creative. Users can browse through these profiles and select the best fit for their event. We also offer a user review section where our users can leave their feedback in their experience with a particular venue, artist, creative or supplier helping others making an informed decision.
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