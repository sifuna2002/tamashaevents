'use client';
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { useEffect,useState } from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
  import db from "../../firebase";
  import {collection, getDocs} from "firebase/firestore";
interface Event {
    id: string;
    eventName: string;
    eventDuration: string;
    eventDescription: string;
}

export default function Events() {
    const [events, setEvents] = useState<Event[]>([]);
    useEffect(() => {
        const getEvents = async () => {
            const data = await getDocs(collection(db, "events"));
            setEvents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id } as Event)));
        };
        getEvents();
      }, []);
    return (
        <>
        <NavBar />
        {/* <Footer /> */}
        {/* latest events */}
        <div className="flex flex-col items-center justify-center w-full h-screen bg-gray-100">
            <div className="flex flex-col items-center justify-center w-full h-full bg-white rounded-lg shadow-lg">
                <div className="flex flex-col items-center justify-center w-full h-full">
                    <h1 className="text-4xl font-bold text-gray-800">Latest Events</h1>
                </div>
                {/* events cards */}
                <div className="flex flex-col md:flex-row flex-wrap items-center justify-center w-full h-full">
                    {events?.map((event,index) => (
                        <Card className="mt-2 w-96" key={index}>
                        <CardHeader color="blue-gray" className="relative h-56">
                            <img
                            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                            alt="card-image"
                            />
                        </CardHeader>
                        <CardBody>
                            <Typography variant="h5" color="blue-gray" className="mb-2">
                            {event?.eventName}
                            </Typography>
                            <Typography>
                            {event?.eventDescription}
                            </Typography>
                        </CardBody>
                        <CardFooter className="pt-0 flex justify-between">
                            <Button>Vote</Button>
                            <div className="flex items-center">
                            <Typography color="gray">
                                {event?.eventDuration} days left
                            </Typography>
                            </div>
                        </CardFooter>
                    </Card>
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}