"use client"; 
// its rendering on server, if we want to render it on client, 
// we need to add this line on top of our file, 


import Image from "next/image";

// we can build our own payges, and import them in page.tsx to display on our web
// f.e: I created greeting page, where I'm displaying the hello and user name
// I've imported that page in page.tsx, now lets add in our website 
import { TestFunc as TestFunc, TestInineStyle } from "@/app/my_components/test";
import Button from "@/app/my_components/button/button";
import Counter from "@/app/my_components/increase_decrease/counter";
import Input from "./my_components/inputs/input";
import MyAcordeon from "./my_components/myacordeon/acordeon";
import ChangeWveni from "./my_components/test_useState/test"
import TodoList from "./my_components/to_do_list/todo"



export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        {/* adding cutstom made greeting paragraph */}
        {/* display list, onwhich we used map function to disolay each of them independently */}
        {/* <TestFunc/>
        // <TestInineStyle/> */}
        {/* <br/> <br/> */}
        {/* <Button title="disabled" disabled={true}/>
        <Button title="mode fill"/> 
        <Button title="mode outline" mode="outline"/>  */}
        {/* <br/> <br/> <br/>   */}
        <Counter/>

        <br/> <br/>
        <Input />  
        <br/> <br/> <br/>
        <MyAcordeon />
        <br /><br /><br />
        <ChangeWveni />  
        <TodoList />



      </main>
    </div>
  );
}
