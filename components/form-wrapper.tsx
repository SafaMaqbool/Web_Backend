import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { title } from 'process'

interface FormWrapperProps {
    children: React.ReactNode,
    title: string,
    description?:string
}

export const FormWrapper = ({ children,title }: FormWrapperProps) => {
    return (
        <div>
            <Card className='min-w-[500px]'>
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                    {children}
                </CardContent>
               
            </Card>

        </div>
    )
}

