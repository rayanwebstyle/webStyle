import {LucideIcon} from "lucide-react";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";

export const ButtonWithIcon = (props:{name:string,url:string,Icon:LucideIcon,classname?:string, target?:string}) => {
    return(
        <Link href={props.url} target={props.target} className={cn(`group transition-colors w-max ${props.classname}`)}>
            <Button className={"inline-flex gap-2"}>
                {props.name}
                <props.Icon className={"group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"}/>
            </Button>
        </Link>
    )
}