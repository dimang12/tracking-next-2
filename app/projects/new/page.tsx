'use client'
import Breadcrumb from '@/app/components/Breadcrumb'
import { Button, Switch, Textarea, Input } from "@material-tailwind/react"
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import React from 'react'

const NewProject = () => {
    const router = useRouter()
    
    const [proName, setProName] = useState('')
    const [proBrief, setProBrief] = useState('')
    const [proDescription, setDescription] = useState('')
    const [proStartDate, setProStartDate] = useState('')
    const [proEndDate, setProEndDate] = useState('')
    const [proStatus, setProStatus] = useState(false)

    const handleCancel = () => {
        router.back()
    }

    const handleCreate = () => {
        const data = {
            proName,
            proBrief,
            proDescription,
            proStartDate,
            proEndDate,
            proStatus
        }
        fetch('/api/projects', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            router.push('/projects')
        })
    }
    
  return (
    <div className='flex flex-col h-full bg-orange-50/10'>
        <Breadcrumb title='Create New Project'></Breadcrumb>
        <div className='grow p-4 w-full flex items-center justify-center'>
            <div className='w-3/6 p-8 border rounded-md shadow-lg space-y-3 bg-white'>
                <h2 className='text-2xl font-bold'>Project Information</h2>
                <form action="/api/projects" method="post" className=' flex flex-col space-y-4'>
                    <div className="flex w-full space-x-4">
                        <div className='w-1/2 flex flex-col space-y-4'>
                            <Input
                                value={proName}
                                size="lg"
                                label="Project Name:"
                                crossOrigin={undefined}
                                onChange={(e) => setProName(e.target.value)}
                            />
                        
                            <Input  
                                value={proBrief} 
                                size="lg" 
                                label="Project Brief:" 
                                crossOrigin={undefined}
                                onChange={(e) => setProBrief(e.target.value)}
                            />

                        </div>
                        <div className='w-1/2 flex flex-col space-y-4'>
                            <Input 
                                size="lg"
                                type='date'
                                label='Start Date:' crossOrigin={undefined}
                                onChange={(e) => setProStartDate(e.target.value)}
                                />
                            <Input
                                type='date'
                                size="lg" 
                                label='End Date:' crossOrigin={undefined}
                                onChange={(e) => setProEndDate(e.target.value)}
                                />
                        </div>
                    </div>
                    <div className="">
                        <Switch 
                            label="Active Project" 
                            crossOrigin={undefined} 
                            checked={proStatus}
                            onChange={(e) => setProStatus(e.target.checked)}
                            />
                    </div>
                    <div>
                        <Textarea 
                            variant="outlined" 
                            label="Project Detail" 
                            value={proDescription}
                            onChange={(e) => setDescription(e.target.value)}
                            />
                    </div>
                    
                    <div className='flex space-x-3 justify-end'>
                        <Button onClick={handleCancel} color='gray' placeholder={'Cancel'}>
                            Cancel <i className='ml-2 fas fa-times'></i>
                        </Button>
                        <Button onClick={handleCreate} placeholder={'Create new user'} color='amber'>
                            Create New Project <i className='ml-2 fas fa-project-diagram'></i>
                        </Button>
                    </div>
                </form>
            </div>
    
        </div>
    </div>
  )
}

export default NewProject
