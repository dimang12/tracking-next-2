'use client'
import React, { useState } from 'react'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'
import { Checkbox } from '@mui/material'

interface ProjectGridProps {
    params: {
        data: [],
        baseUrl: string
    }
}
  

function ProjectGrid({params: {data, baseUrl}}: ProjectGridProps) {
    const [projects, setProjects] = useState(data.map((row: any, index: number) => ({ ...row, id: row.proId })));
    

    const columns: GridColDef[] = [
        { field: 'proId', headerName: 'ID', width: 90 },
        {
        field: 'proName',
        headerName: 'Project Name',
        width: 150,
        editable: true,
        
        },
        {
        field: 'proBrief',
        headerName: 'Brief',
        width: 350,
        editable: true,
        },
        {
            field: 'proStatus',
            headerName: 'Status',
            type: 'number',
            width: 110,
            editable: false,
            renderCell: (params) => (
                <Checkbox onChange={(event) => changeStatus(params.row)} checked={params?.row?.proStatus === true} />
            ),
        },
        {
        field: 'createdAt',
        headerName: 'Created Date',
        width: 160,
        },
    ];

    const changeStatus = (params: any) => {
        const newProjects = projects.map((project: any) => {
            if (project.id === params.id) {
                project.proStatus = !project.proStatus;
            }
            return project;
        });
    
        fetch(baseUrl, {
            method: 'PUT',
            body: JSON.stringify(params),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                setProjects(newProjects);
            }
        })
        
    }

    return (
        <>
            <DataGrid
                rows={projects}
                columns={columns}
                initialState={{
                pagination: {
                        paginationModel: {
                        pageSize: 5,
                        },
                },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
        />
        </>
    )
}

export default ProjectGrid
