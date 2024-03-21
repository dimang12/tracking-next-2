import React from 'react'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import ProjectGrid from '../projectGrid';
import Breadcrumb from '@/app/components/Breadcrumb';
import LinkCircleButton from '@/app/components/buttons/LinkCircleButton';


interface Props {
    params: {
        slug: string[]
    },
    searchParams: {
        sortOrder: string
    }
}


const ProjectPage = async ({params: {slug}, searchParams: {sortOrder}}: Props) => {
  // const projectApiUrl = process.env.NEXTAUTH_URL +  '/api/projects';
  // const response = await fetch(projectApiUrl);
  // const data = await response.json();
  
  return (
    <div className='p-4'>
      {slug} {sortOrder}
      <Breadcrumb title='Project'>
        <LinkCircleButton linkTo='/projects/new' className={'fa-plus'} />
      </Breadcrumb>
        <div className='w-full pt-6'>
          {/* <ProjectGrid 
            params={{data, baseUrl: projectApiUrl}}  
            /> */}
        </div>
    </div>
  )
}

export default ProjectPage
