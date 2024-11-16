import {LucideIcon} from "lucide-react";
import {MouseEventHandler} from "react";
import {Button} from "@/components/ui/button";

export const ButtonScroller = (props:{ name:string, Icon:LucideIcon, onClick:MouseEventHandler }) => {
    return (
        <Button onClick={props.onClick} className="inline-flex gap-2 group transition-transform">
            {props.name}
            <props.Icon className={"group-hover:translate-y-1 transition-transform"}  />
        </Button>
    )
}