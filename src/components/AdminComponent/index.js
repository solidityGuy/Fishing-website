import React from 'react';
import {Button} from '../ButtonElement';
import { AdminContainer } from './AdminComponent';

export const AdminComponent = () => {
    return(
        <>
            <AdminContainer>
                <Button style={{width:200, margin:20}}>List product by ID</Button>
                <Button style={{width:200, margin:20}}>List all products</Button>
                <Button style={{width:200, margin:20}}>Save product</Button>
                <Button style={{width:200, margin:20}}>Update product by ID</Button>
                <Button style={{width:200, margin:20}}>Delete product by ID</Button>
                <Button style={{width:200, margin:20}}>Delete user by ID</Button>
            </AdminContainer>
        </>
    );
}