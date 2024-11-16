import {PropsWithChildren} from "react";
import {cn} from "@/lib/utils";

export const Section = (props: PropsWithChildren<{classname?: string, id?:string}>)=>{
    return(
        <section className={cn('max-w-screen-2xl px-4 m-auto', props.classname)} id={props.id}>
            {props.children}
        </section>
    )
}