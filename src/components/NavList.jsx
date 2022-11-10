import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import { LightbulbOutlined as Lightbulb, ArchiveOutlined as Archive, DeleteOutlineOutlined as Delete } from '@mui/icons-material/';







const NavList = () => {
    const navList = [
        { id: 1, name: 'Notes', icon: <Lightbulb />, route: '/' },
        { id: 2, name: 'Archive', icon: <Archive />, route: '/archive' },
        { id: 3, name: 'Trash', icon: <Delete />, route: '/delete' }
    ]
    return (
        <List>
            {navList.map(list => (
                <ListItem key={list.id}  >
                    <Link to={list.route} style={{ textDecoration: 'none', display: 'flex', color: 'inherit'}}>
                        <ListItemButton>
                            <ListItemIcon style={{ alignItems: 'center'}}>
                                {list.icon}
                            </ListItemIcon>
                            <ListItemText primary={list.name} />
                        </ListItemButton>
                    </Link>
                </ListItem>
            ))}
        </List>
    )
}
export default NavList;