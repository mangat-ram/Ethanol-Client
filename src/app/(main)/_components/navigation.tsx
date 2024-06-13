"use client"

import React, { ElementRef, useEffect, useRef, useState } from "react"
import { useParams, usePathname } from "next/navigation"
import { useMediaQuery } from "usehooks-ts"
import { cn } from "@/lib/utils"
import { FaChevronLeft } from "react-icons/fa6";
import UserItem from "./userItem";
import Item from "./item"
import { FiSearch } from "react-icons/fi";
import { IoSettingsSharp } from "react-icons/io5";
import { LuBookmarkPlus } from "react-icons/lu";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { FaRegTrashAlt } from "react-icons/fa";

const Navigation = () => {

  const params = useParams();
  const pathname = usePathname();
  const isMobile = useMediaQuery("(max-width:768px)");
  const create = "create"//create api logic;

  const isResizingRef = useRef(false);
  const sidebarRef = useRef<ElementRef<"aside">>(null);
  const navbarRef = useRef<ElementRef<"nav">>(null);
  const [isResetting, setIsResetting] = useState(false);
  const [isCollepsed, setIsCollapsed] = useState(isMobile);

  useEffect(() => {
    if(isMobile){
      collapse();
    }else{
      resetWidth();
    }
  },[isMobile]);

  useEffect(() => {
    if(isMobile){
      collapse();
    }
  },[pathname,isMobile]);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement,MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();

    isResizingRef.current = true;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  }

  const handleMouseMove = (e: MouseEvent) => {
    if(!isResizingRef.current) return;
    let newWidth = e.clientX;
    if(newWidth < 240) newWidth = 240;
    if(newWidth > 480) newWidth = 480;

    if(sidebarRef.current && navbarRef.current){
      sidebarRef.current.style.width = `${newWidth}px`;
      navbarRef.current.style.setProperty("left",`${newWidth}px`);
      navbarRef.current.style.setProperty("width",`calc(100% - ${newWidth}px)`);
    }
  }

  const handleMouseUp = (e: MouseEvent) => {
    isResizingRef.current = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  }

  const resetWidth = () => {
    if(sidebarRef.current && navbarRef.current){
      setIsCollapsed(true);
      setIsResetting(true);

      sidebarRef.current.style.width = isMobile ? "100%" : "240px";
      navbarRef.current.style.setProperty(
        "width",
        isMobile ? "0" : "calc(100% - 240px)"
      );
      navbarRef.current.style.setProperty(
        "left",
        isMobile ? "100%" : "240px"
      );
      setTimeout(() => setIsResetting(false),300);
    }
  }

  const collapse = () => {
    if(sidebarRef.current && navbarRef.current){
      setIsCollapsed(true);
      setIsResetting(true);

      sidebarRef.current.style.width = "0";
      navbarRef.current.style.setProperty("width","100%");
      navbarRef.current.style.setProperty("left","0");
      setTimeout(() => setIsResetting(false), 300);
    }
  }

  const handleCreate = () => {
    console.log("Handle Create");
  }

  return (
    <>
      <aside
        ref={sidebarRef}
        className={cn("group/sidebar h-full bg-secondary overflow-y-auto relative flex w-60 flex-col z-[99999]",
          isResetting && "transition-all ease-in-out duration-300",
          isMobile && "w-0")
        }
      >
        <div
          role="button"
          onClick={collapse}
          className={cn("h-6 w-6 text-muted-foreground rounded-sm hover:bg-neutral-300 absolute top-3 right-2 opacity-0 group-hover/sidebar:opacity-100 transition",
            isMobile && "opacity-100"
          )}
        >
          <FaChevronLeft className="h-6 w-6" />
        </div>
        <div>
          <UserItem />
        </div>
          <Item 
            label="Search"
            icon={FiSearch}
            isSearch
            onClick={() => console.log("search")}
          />
          <Item 
            label="Settings"
            icon={IoSettingsSharp}
            onClick={() => console.log("Settings")}
          />
          <Item 
              onClick={() => console.log("New Page")} 
              label="New Page" 
              icon={LuBookmarkPlus} 
          />
          <Popover>
            <PopoverTrigger>
              <Item 
                label="Trash"
                icon={FaRegTrashAlt}
              />
            </PopoverTrigger>
            <PopoverContent
              className="p-0 w-72"
              side={isMobile ? "bottom" : "right"}
            >
              TrashBox
            </PopoverContent>
          </Popover>
        <nav ref={navbarRef}>
          nav
        </nav>
      </aside>
    </>
  )
}

export default Navigation;