"use client";

import React, { useState } from "react";
import { LuChevronsLeftRight } from "react-icons/lu";
import {
  Avatar,
  AvatarImage,
} from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button";
import useUser from "@/hooks/useUser";

const UserItem = () => {

  // const [user, setUser] = useState({});
  const user = useUser();
  console.log(user);
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div 
          role="button"
          className="flex items-center text-sm p-3 w-full hover:bg-purple-400"
        >
          <div 
            className="gap-x-2 flex items-center max-w-[150px]"
          >
            <Avatar className="h-5 w-5">
              <AvatarImage src="/sample1.jpg" />
            </Avatar>
            <span className="text-start font-medium line-clamp-1">
              User Name Variable
            </span>
          </div>
          <LuChevronsLeftRight className="rotate-90 ml-2 text-muted-foreground h-4 w-4" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-80 z-[99999]"
        align="start"
        alignOffset={11}
        forceMount
      >
        <div className="flex flex-col space-y-4 p-2">
          <p className="text-xs font-medium leading-none text-muted-foreground">
            User Name Variable
          </p>
          <div className="flex items-center gap-x-2">
            <div className="rounded-md bg-purple-400 p-1">
              <Avatar>
                <AvatarImage src="/sample1.jpg" />
              </Avatar>
            </div>
            <div className="space-y-1">
              <p className="text-sm line-clamp-1">
                username variable&apos;s Ethanol
              </p>
            </div>
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem 
          asChild
          className="text-white w-20 cursor-pointer text-muted-foreground"
        >
          <Button 
            variant="ghost"
          >
            Log Out
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserItem;