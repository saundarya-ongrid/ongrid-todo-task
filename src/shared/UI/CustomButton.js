import { Button } from 'antd'
import React from 'react'

export const CustomButton = ({title, ...props}) => {
    return (
        <Button {...props}> 
            {title}
        </Button>
    )
}
