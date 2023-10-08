import React from 'react';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';
import {Contact, contactData} from "../../data/contactData";

const ContactTable = () => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Skills</TableCell>
            <TableCell>Start Date</TableCell>
            <TableCell>Preference</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            contactData.map((contact: Contact) => (
              <TableRow key={contact.id}>
                <TableCell>{contact.name}</TableCell>
                <TableCell>{contact.role}</TableCell>
                <TableCell>{contact.skills?.join(', ')}</TableCell>
                <TableCell>{contact.startDate?.format('MM/DD/YYYY')}</TableCell>
                <TableCell>{contact.preference}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ContactTable;
