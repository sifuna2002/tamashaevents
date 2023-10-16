'use client'
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
   
  export function Services() {
    return (
      <>
        <div className="flex flex-col items-center mt-20 justify-center gap-5">
          <Typography variant="h3" color="gray" className="text-center">
          Services we offer
          </Typography>
          <Typography color="gray" className="text-center">
          Pioneering the future of event ticketing and democratic process.
          </Typography>
        </div>
      <div className="flex items-center flex-wrap justify-center gap-10 h-full p-20">
        <Card className="mt-6 w-96 bg-[#C1205C] text-white">
        <CardBody>
          <p className="text-xs bg-[#c72661] w-fit p-1 text-white rounded-sm">Payments</p>
          <Typography variant="h5" color="white" className="mb-2">
            E-Ticketing
          </Typography>
          <Typography className="text-sm">
          We are the ultimate destination for all your event ticketing needs.
          Whether you're a music lover, a sports enthusiast or a theater
          aficionado, we have got you covered with our wide range of event...
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <a href="eticketing" className="inline-block">
            <Button size="sm" variant="text" className="flex items-center text-white gap-2">
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
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
        </CardFooter>
      </Card>
      <Card className="mt-6 w-96 bg-[#C1205C] text-white">
        <CardBody>
          <p className="text-xs bg-[#c72661] w-fit p-1 text-white rounded-sm">Data</p>
          <Typography variant="h5" color="white" className="mb-2">
            E-Voting
          </Typography>
          <Typography className="text-sm">
          We offer a one-of-a-kind platform for casting your vote in a variety of elections, including local voting programmes for award shows, beauty pageants as well as national, institutional, academic...
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <a href="evoting" className="inline-block">
            <Button size="sm" variant="text" className="flex items-center text-white gap-2">
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
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
        </CardFooter>
      </Card>
      <Card className="mt-6 w-96 bg-[#C1205C] text-white">
        <CardBody>
          <p className="text-xs bg-[#c72661] w-fit p-1 text-white rounded-sm">Data</p>
          <Typography variant="h5" color="white" className="mb-2">
            E-Surveys
          </Typography>
          <Typography className="text-sm">
          Our platform offers an easy and efficient way for businesses, organizations and individuals to create and conduct surveys that gather valuable feedback and insights. Whether you're looking to...
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <a href="#" className="inline-block">
            <Button size="sm" variant="text" className="flex items-center text-white gap-2">
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
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
        </CardFooter>
      </Card>
      <Card className="mt-6 w-96 bg-[#C1205C] text-white">
        <CardBody>
          <p className="text-xs bg-[#c72661] w-fit p-1 text-white rounded-sm">Events</p>
          <Typography variant="h5" color="white" className="mb-2">
          Book Venue/Artist
          </Typography>
          <Typography className="text-sm">
          Our goal with this is to make event planning hassle-free and affordable for everyone. The platform allows you to book event venues, artists, suppliers and other creatives at a discounted...
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <a href="ebooking" className="inline-block">
            <Button size="sm" variant="text" className="flex items-center text-white gap-2">
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
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
        </CardFooter>
      </Card>
      
      </div>
      </>
    );
  }