import React from 'react';
import {Avatar, Card, CardContent, CardHeader, Grid, List, ListSubheader, Typography} from "@mui/material";
import {Contact, contactData} from "../../data/contactData";

const ContactCard = () => {
  return (
    <div>
      <Grid container spacing={2} sx={{width: 700}}>
        {
          contactData.map((contact: Contact) => (
            <Grid item key={contact.id}>
              <Card sx={{width: 300}}>
                <CardHeader
                  avatar={<Avatar>{contact.name?.substring(0, 1)?.toUpperCase() || 'A'}</Avatar>}
                  title={contact.name}
                  subheader={contact.role}
                />
                <CardContent>
                  <Typography>
                    <b>Start Date: </b>{contact.startDate?.format('MM/DD/YYYY')}
                  </Typography>
                  <Typography>
                    <b>Work Preference: </b>{contact.preference}
                  </Typography>
                  <List
                    sx={{listStyle: 'list-item', listStyleType: 'circle', paddingLeft: 2}}
                    subheader={
                      <ListSubheader sx={{right: 16, position: 'inherit', fontSize: '1.25rem', color: 'black', paddingLeft: 0}}>
                        Skills:
                      </ListSubheader>
                    }
                  >
                    {
                      contact.skills?.map((skill: string) => (
                        <li key={`${contact.id}-${contact.name}-${skill}`} style={{paddingBottom: '2px'}}>{skill}</li>
                      ))
                    }
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))
        }
      </Grid>
    </div>
  );
};

export default ContactCard;
