import {LucideIcon} from "lucide-react";
import Link from "next/link";
import {Button} from "@/components/ui/button";

export const LinkWithIcon = (props:{name:string,url:string,Icon:LucideIcon,classname?:string}) => {
    return(
        <Link href={props.url} className={props.classname}>
            <li className={"inline-flex gap-2"}>
                <Button
                    variant={"link"}
                    className={"text-md items-center"}>
                    <props.Icon/>
                    {props.name}
                </Button>
            </li>
        </Link>
    )
}