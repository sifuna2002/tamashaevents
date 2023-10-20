'use client';
import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  Dialog,
  Card,
  Alert,
  CardBody,
  CardFooter,
  Input,
} from "@material-tailwind/react";
import db from "../../firebase";
import {doc,setDoc} from "firebase/firestore";
function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export function NavBar() {
  const [openNav, setOpenNav] = React.useState(false);
  const [openAlert, setOpenAlert] = React.useState(false);

  const eventRef = React.useRef<HTMLInputElement>(null);
  const durationRef = React.useRef<HTMLInputElement>(null);
  const descriptionRef = React.useRef<HTMLInputElement>(null);


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  const handleSubmit = async () => {
    const docRef = doc(db, "events", "event_"+new Date().getTime());
    await setDoc(docRef, {
      eventName: eventRef.current?.value,
      eventDuration: durationRef.current?.value,
      eventDescription: descriptionRef.current?.value,
    });
    setOpenAlert(true);
    setTimeout(() => {
      setOpen(false);
      setOpenAlert(false);
    }
    , 2000);
  };
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 font-normal"
      >
        <a href="events" className="flex items-center">
          Events
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Awards
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
            Organizers Dashboard
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center"
        onClick={handleOpen}
        >
          Create Event
        </a>
      </Typography>
    </ul>
  );
 
  return (
    <Navbar className="mx-auto w-full py-2 px-4 lg:px-8 lg:py-4 bg-white">
      <div className="container mx-auto flex items-center justify-between text-black">
        <Typography
          as="a"
          href="/"
          className="mr-4 cursor-pointer py-1.5 font-medium"
        >
          Tamasha
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <Button size="sm" className="hidden lg:inline-block bg-[#C1205C]">
          <span>Contact Us</span>
        </Button>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto">
          {navList}
          <Button variant="gradient" color="white" size="sm" fullWidth className="mb-2">
            <span>Contact Us</span>
          </Button>
        </div>
      </Collapse>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        {openAlert && (
        <Alert
          icon={<Icon />}
          className="rounded-none border-l-4 border-[#2ec946] bg-[#2ec946]/10 font-medium text-[#2ec946]"
        >
          Event Created Successfully.
        </Alert>
      )}
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
              Create new Event
            </Typography>
            <Typography
              className="mb-3 font-normal"
              variant="paragraph"
              color="gray"
            >
              Fill the details below to create a new event.
            </Typography>
            <Input variant="standard" name="event" inputRef={eventRef} label="Event Name" />
            <Input variant="standard" inputRef={durationRef} label="Event Duration" />
            <Input variant="standard" inputRef={descriptionRef} label="Event Description" />
          </CardBody>
          <CardFooter className="pt-0">
          <Button size="sm" onClick={handleSubmit} className="w-full bg-[#C1205C]">
          <span>Create Event</span>
          </Button>
          </CardFooter>
        </Card>
      </Dialog>
      
    </Navbar>
  );
}
