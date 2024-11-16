import Link from "next/link";
import {DropdownMenuItem} from "@/components/ui/dropdown-menu";

export const CustomLink = (props:{name: string, url: string})=>{


    return(
        <Link href={props.url}>
            <DropdownMenuItem>{props.name}</DropdownMenuItem>
        </Link>
    )
}