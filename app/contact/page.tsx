import ContactForm from "@/app/contact/ContactForm";
import {Section} from "@/app/_Components/Section";
import React from "react";
import {Spacing} from "@/app/_Components/Spacing";

const ContactPage:React.FC = () =>{

    return(
            <>
                <Spacing size={"lg"}/>
                    <Section classname={"flex justify-center items-center"}>
                            <ContactForm/>
                    </Section>
                <Spacing size={"md"}/>
            </>
        )

}

export default ContactPage;

