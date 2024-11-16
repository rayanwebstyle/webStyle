import Image from "next/image";

export const CustomIcon = (props:{name:string,url:string,size:number,alt:string})=>{

    const baseurl = "/icons/"

    return(
        <Image
            src={baseurl + props.url}
            width={props.size}
            height={props.size}
            alt={props.alt}
        />
    )
}