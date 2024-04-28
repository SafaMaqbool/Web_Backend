
import { z } from "zod"
 export const employeeSchema=z.object({
    firstName: z.string().min(2,{
        message:"first name should be atleast 2 characters"
    }),
    lastName: z.string().min(2,{
        message: "last name should be at least 2 characters"
    }),
    email: z.string().email(
        {
            message:"invalid email"
        }
    ),
    phone: z.string().min(11,{
        message:"should be at least 11 digits"
    })
})