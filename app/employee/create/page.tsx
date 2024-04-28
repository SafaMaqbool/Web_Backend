
import { EmployeeForm } from '@/components/employeeForm'
import {FormWrapper} from '@/components/form-wrapper'

const CreateEmployee = () => {
  return (
   <div className='flex justify-center items-center min-w-[500px] h-screen'>
     <FormWrapper title='Create New Employee'>
       
        <EmployeeForm/>
     </FormWrapper>
        
        
    
    </div>
    
  )
}

export default CreateEmployee