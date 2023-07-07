import { title } from 'process';
import React from 'react'
import Carddata from '~/components/Carddata';
import Dashboard from "~/components/dashboard";
import Navbar from '~/components/navbar';

// interface CarddataProps {
//     name?: string;
//     value:number;
//     svgIcon: string | JSX.Element;
//   }
  const dollerIcon = 
    (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="h-4 w-4 text-muted-foreground"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
    );
 const userIcon=   (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="h-4 w-4 text-muted-foreground"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
    );
    const salesIcon=(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="h-4 w-4 text-muted-foreground"><rect width="20" height="14" x="2" y="5" rx="2"></rect><path d="M2 10h20"></path></svg>
    );
  const activeIcon=  (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="h-4 w-4 text-muted-foreground"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
    );
  
export default function dashcompo() {

  return (
    <div className='pl-24 pr-24 sm:pl-8 sm:pr-8'>
        <Dashboard/>
        <Navbar/>
        <div className="flex sm:flex-col sm:items-center sm:justify-center">
            <span className='mr-8 sm:mr-2'>
            <Carddata name="Total Revenue" value={"$45,231.89"} svgIcon={dollerIcon} compare={"+20.1% from last month"}/>
            </span>
            <span className='mr-8 sm:mr-2'>
            <Carddata name="Subscriptions" value={"+2350"} svgIcon={userIcon} compare={"+180.1% from last month"}/>
            </span><span className='mr-8 sm:mr-2'>
            <Carddata name="Sales" value={"+12,234"} svgIcon={salesIcon} compare={"+19% from last month"}/>
            </span><span className='mr-8 sm:mr-2'>
            <Carddata name="Active Now" value={"+573"} svgIcon={activeIcon} compare={"+201 since last hour"}/>
            </span>
        </div>
    </div>
  )
}
