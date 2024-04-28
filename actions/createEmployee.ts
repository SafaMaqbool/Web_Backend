"use server";
import {z} from "zod";
import { employeeSchema } from "@/schemas";
import { db } from "@/lib/db";

export const createEmployee=async(values: z.infer<typeof employeeSchema>)=>{

    const validated=employeeSchema.safeParse(values);

    if(!validated.success){
        return
            {error : "Invalid values"}
        
    }
    const employee = await db.employee.create(
        {
            data:{
                firstName: validated.data.firstName,
                lastName: validated.data.lastName,
                email: validated.data.email,
                phoneNumber: validated.data.phone
            
            }
        }
    )

}
