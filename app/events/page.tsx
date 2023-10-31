'use client';
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { useEffect,useState } from "react";
import {
    Input,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
  } from "@material-tailwind/react";
  import db from "../../firebase";
  import {collection, getDocs} from "firebase/firestore";
import React from "react";
import { CalendarDaysIcon } from "@heroicons/react/20/solid";
interface Event {
    id: string;
    eventName: string;
    eventStartDate: string;
    eventEndDate: string;
    eventDescription: string;
}

export default function Events() {
    const [isEventDetails, setIsEventDetails] = useState(false);
    const [activeEvent, setActiveEvent] = useState<Event | any>(null);
    const [events, setEvents] = useState<Event[]>([]);
    const [pastEvents, setPastEvents] = useState<Event[]>([]);
    useEffect(() => {
        const getEvents = async () => {
            const data = await getDocs(collection(db, "events"));
            // past events if event end date is less than today else upcoming events
            data.forEach((doc) => {
              const event = {
                id: doc.id,
                eventName: doc.data().eventName,
                eventStartDate: doc.data().eventStartDate,
                eventEndDate: doc.data().eventEndDate,
                eventDescription: doc.data().eventDescription,
              };
              if (new Date(event.eventEndDate) < new Date()) {
                setPastEvents((pastEvents) => [...pastEvents, event]);
              } else {
                setEvents((events) => [...events, event]);
              }
            });
        };
        getEvents();
      }, []);
    return (
        <>
        <NavBar />
        {/* <Footer /> */}
        {/* latest events */}
        <div className="flex flex-col items-center justify-center w-full bg-gray-100">
            {isEventDetails ? (
                    <div className="px-2 py-20 w-full flex justify-center">
                        <div className="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg rounded-lg">
                        <div className="lg:w-full">
                            <div
                            className="lg:scale-110 h-80 bg-cover lg:h-full rounded-b-none border lg:rounded-lg"
                            style={{
                                backgroundImage:
                                'url("https://images.unsplash.com/photo-1517694712202-14dd9538aa97")'
                            }}
                            ></div>
                        </div>
                        <div className="py-12 px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-full rounded-t-none border lg:rounded-lg">
                            <h2 className="text-3xl text-indigo-600 font-bold">
                            {activeEvent?.eventName}
                            </h2>
                            <p className="mt-4 text-gray-600">
                            {activeEvent?.eventDescription}
                            </p>
                            {activeEvent?.eventEndDate < new Date() ? (
                                <>
                                    {/* enter participants code */}
                            <div className="flex w-78 flex-col mt-5 items-end gap-6">
                                <Input size="lg" color="indigo" label="Participant Code" crossOrigin={undefined} />
                            </div>
                            <div className="relative flex w-full mt-3 max-w-78">
                                <Menu placement="bottom-start">
                                    <MenuHandler>
                                    <Button
                                        ripple={false}
                                        variant="text"
                                        color="blue-gray"
                                        className="flex h-10 items-center gap-2 rounded-r-none border border-r-0 border-blue-gray-200 bg-blue-gray-500/10 pl-3"
                                    >
                                        +254
                                    </Button>
                                    </MenuHandler>
                                </Menu>
                                <Input
                                        type="tel"
                                        placeholder="Mobile Number"
                                        className="rounded-l-none !border-t-blue-gray-200 focus:!border-indigo-600"
                                        labelProps={{
                                            className: "before:content-none after:content-none",
                                        }}
                                        containerProps={{
                                            className: "min-w-0",
                                        }} crossOrigin={undefined}                                />
                            </div>
                            {/* NUmber of votes */}
                            <div className="flex w-78 flex-col mt-5 items-end gap-6">
                                <Input size="lg" color="indigo" label="Number of Votes" crossOrigin={undefined} />
                            </div>
                            <div className="mt-8">
                            <a
                                href="#"
                                className="bg-gray-900 text-gray-100 px-5 py-3 font-semibold rounded"
                            >
                                Make Your Vote
                            </a>
                            </div>
                                </>
                                ):(
                                    <div className="mt-8 flex flex-col gap-3">
                                        <p className="text">This Event ended on <span className="text-[#C1205C]"> {activeEvent.eventEndDate}</span></p>

                                    <a
                                        href="#"
                                        className="bg-gray-900 text-center text-gray-100 px-5 py-3 font-semibold rounded"
                                    >
                                        View Results
                                    </a>
                                    </div>
                                )}
                        </div>
                        </div>
                    </div>
                  
                ) : (
                    <>
                    {/* upcoming events */}
                        <div className="text-center p-10">
                            <h1 className="font-bold text-4xl mb-4">Latest Events</h1>
                        </div>
                        {/* ✅ Grid Section - Starts Here 👇 */}
                        <section
                            id="Projects"
                            className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
                        >
                            {/*   ✅ Event cards👇 */}
                            {events.map((event) => (
                                <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                                <div>
                                    <img
                                    src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                    alt="Event Image"
                                    className="h-80 w-72 object-cover rounded-t-xl"
                                    />
                                    <div className="px-4 py-3 w-72">
                                    <span className="text-gray-400 mr-3 uppercase text-xs">Voting</span>
                                    <p className="text-lg font-bold text-black truncate block capitalize">
                                        {event.eventName}
                                    </p>
                                    <p className="text-sm text-gray-500 mt-2">
                                        {event.eventDescription}
                                    </p>
                                    {/* events start and end dates */}
                                    <div className="flex items-center mt-5">
                                        <CalendarDaysIcon className="h-6 w-6 mr-2 text-[#C1205C]" />
                                        <p className="text-xs text-gray-500">
                                        From
                                        </p>
                                        <p className="text-xs text-[#C1205C] ml-1">
                                        {event.eventStartDate}
                                        </p>
                                        <p className="text-xs text-gray-500 ml-2">
                                        To
                                        </p>
                                        <p className="text-xs text-[#C1205C] ml-1">
                                        {event.eventEndDate}
                                        </p>
                                    </div>
                                    <div className="flex items-center mt-5">
                                        {/* vote now button*/}
                                        <button
                                        onClick={() => {
                                            setIsEventDetails(true);
                                            setActiveEvent(event);
                                        }}
                                        type="button"
                                        className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                        >
                                        Vote Now
                                        </button>
                                        {/* add to cart button*/}
                                        
                                        <div className="ml-auto">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={20}
                                            height={20}
                                            fill="currentColor"
                                            className="bi bi-bag-plus"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                            fillRule="evenodd"
                                            d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                                            />
                                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                        </svg>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            )
                            )}
                        </section>
                        {/* 🛑 Grid Section - Ends Here */}
                        {/* past events */}
                        <div className="text-center p-10">
                            <h1 className="font-bold text-4xl mb-4">Past Events</h1>
                        </div>
                        {/* ✅ Grid Section - Starts Here 👇 */}
                        <section
                            id="Projects"
                            className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
                        >
                            {/*   ✅ Event cards👇 */}
                            {pastEvents?.map((event) => (
                                <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                                <div>
                                    <img
                                    src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                    alt="Event Image"
                                    className="h-80 w-72 object-cover rounded-t-xl"
                                    />
                                    <div className="px-4 py-3 w-72">
                                    <span className="text-gray-400 mr-3 uppercase text-xs">Voting</span>
                                    <p className="text-lg font-bold text-black truncate block capitalize">
                                        {event.eventName}
                                    </p>
                                    <p className="text-sm text-gray-500 mt-2">
                                        {event.eventDescription}
                                    </p>
                                    {/* events start and end dates */}
                                    <div className="flex items-center mt-5">
                                        <CalendarDaysIcon className="h-6 w-6 mr-2 text-[#C1205C]" />
                                        <p className="text-xs text-gray-500">
                                        From
                                        </p>
                                        <p className="text-xs text-[#C1205C] ml-1">
                                        {event.eventStartDate}
                                        </p>
                                        <p className="text-xs text-gray-500 ml-2">
                                        To
                                        </p>
                                        <p className="text-xs text-[#C1205C] ml-1">
                                        {event.eventEndDate}
                                        </p>
                                    </div>
                                    <div className="flex items-center mt-5">
                                        {/* vote now button*/}
                                        <button
                                        onClick={() => {
                                            setIsEventDetails(true);
                                            setActiveEvent(event);
                                        }}
                                        type="button"
                                        className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                        >
                                        View Event Details
                                        </button>
                                        {/* add to cart button*/}
                                        
                                        <div className="ml-auto">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={20}
                                            height={20}
                                            fill="currentColor"
                                            className="bi bi-bag-plus"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                            fillRule="evenodd"
                                            d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                                            />
                                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                        </svg>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            )
                            )}
                        </section>
                        {/* 🛑 Grid Section - Ends Here */}
                    </>
                )}
        </div>
        </>
    )
}