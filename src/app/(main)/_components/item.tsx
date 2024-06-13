"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { Toast } from "@/components/ui/toast";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { LuChevronsDown, LuChevronsRight, LuPackagePlus } from "react-icons/lu";
import { FiMoreHorizontal } from "react-icons/fi";
import { FaRegTrashAlt } from "react-icons/fa";
import { Icon } from "next/dist/lib/metadata/types/metadata-types";
import { IconType } from "react-icons/lib";

interface ItemProps{
  username? : string;
  active? : boolean;
  expanded? : boolean;
  isSearch? : boolean;
  level? : number;
  onExpand? : () => void;
  label : string;
  onClick? : () => void;
  icon: IconType
}

const Item = ({
  username,
  active,
  expanded,
  isSearch,
  level = 0,
  onExpand,
  label,
  onClick,
  icon: Icon
}: ItemProps) => {

  const router = useRouter();
  const user = "UserVariable"

  const handleExpand = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    onExpand?.();
  }

  const create = () => {
    console.log("Create")
  }

  const ChevronIcon = expanded ? LuChevronsDown : LuChevronsRight;

  return (
    <div
      role="button"
      onClick={onClick}
      style={{
        paddingLeft: level ? `${(level * 12) + 12}px` : "12px"
      }}
      className={cn("group min-h-[27px] text-sm py-1 pr-3 w-full hover:bg-primary/5 flex items-center text-muted-foreground font-medium",
        active && "bg-primary/5 text-primary"
      )}
    >
      {
        !!username && (
          <div
            role="button"
            className="h-full rounded-sm bg-neutral-300 mr-1"
            onClick={handleExpand}
          >
            <ChevronIcon 
              className="h-4 w-4 shrink-0 text-muted-foreground/50"
            />
          </div>
        )
      }
      <span className="truncate">{label}</span>
      {
        isSearch && (
          <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">  
            <span className="text-xs">
              ctrl
            </span>k
          </kbd>
        )
      }
      {
        !!username && (
          <div className="ml-auto flex items-center gap-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger
                onClick={(e) => e.stopPropagation()}
                asChild
              >
                <div
                  role="button"
                  className="opacity-0 group-hover:opacity-100 h-full ml-auto rounded-sm hover:bg-neutral-300"
                >
                  <FiMoreHorizontal className="h-4 w-4 text-muted-foreground" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-60 z-[99999]"
                align="start"
                side="right"
                forceMount
              >
                <DropdownMenuItem>
                  <FaRegTrashAlt className="h-4 w-4 mr-2" />
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <div className="text-xs text-muted-foreground">
                  Last Edited by User
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
            <div
              role="button"
              onClick={() => console.log("On Create")}
              className="opacity-0 group-hover:opacity-100 h-full ml-auto rounded-sm hover:bg-neutral-300"
            >
              <LuPackagePlus className="h-6 w-6 mr-2" />
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Item;