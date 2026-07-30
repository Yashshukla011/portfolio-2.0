import Contact from "../Model/contact.model.js";
import nodemailer from "nodemailer";



export const sendContact = async(req,res)=>{

    try{

        const {
            name,
            email,
            subject,
            message
        } = req.body;



        const contact = await Contact.create({

            name,
            email,
            subject,
            message

        });



        // Email setup
console.log("EMAIL:", process.env.EMAIL_USER);
console.log("PASS:", process.env.EMAIL_PASS);
        const transporter =
        nodemailer.createTransport({

            service:"gmail",

            auth:{
                user:process.env.EMAIL_USER,
                pass:process.env.EMAIL_PASS
            }

        });



        await transporter.sendMail({

            from:email,

            to:process.env.EMAIL_USER,

            subject:`Portfolio Contact: ${subject}`,

            html:`

            <h3>New Message</h3>

            <p><b>Name:</b>${name}</p>

            <p><b>Email:</b>${email}</p>

            <p><b>Message:</b>${message}</p>

            `

        });



        res.status(201).json({

            success:true,

            message:"Message sent successfully"

        });



    }catch(error){

        res.status(500).json({

            success:false,

            message:error.message

        });

    }

};