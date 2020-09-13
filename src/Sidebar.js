import React, {useState, useEffect} from 'react'
import './Sidebar.css'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import SidebarOption from "./SidebarOption"
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import {useStateValue} from "./StateProvider"
import db from "./firebase"
function Sidebar() {

    const [channels, setChannels] = useState([])
    const [{user}] = useStateValue()


    useEffect(() => {
        //Run this code when the sidebar component loads
        db.collection("rooms").onSnapshot(snapshot => {
                setChannels(
                    snapshot.docs.map(doc=>({
                        id: doc.id,
                        name : doc.data().name,
                    }))
                )
        })

    }, [] )

    return (
        <div className ="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>Infinity</h2>
                        <h3>
                            <FiberManualRecordIcon/>
                            {user?.displayName}
                        </h3>

                </div> 
                <CreateIcon/>

               
                

             </div>
             <SidebarOption  Icon = {InsertCommentIcon} title="Threads"/>
             <SidebarOption  Icon = {InboxIcon} title="Mentions & Reaction"/>
             <SidebarOption  Icon = {DraftsIcon} title="Saved items"/>
             <SidebarOption  Icon = {BookmarkBorderIcon} title="Channel"/>
             <SidebarOption  Icon = {PeopleAltIcon} title="People & User"/>
             <SidebarOption  Icon = {AppsIcon} title="Apps"/>
             <SidebarOption  Icon = {FileCopyIcon} title="File Browser"/>
             <SidebarOption  Icon = {ExpandLessIcon} title="Show less"/>

             <hr/>
             <SidebarOption  Icon = {ExpandMoreIcon} title="Channels"/>
             <hr/>
             <SidebarOption  addChannelOption Icon = {AddIcon} title="Channels"/>

            {/*Connect to db and list all the channels */}
            {channels.map(channel=> (
                <SidebarOption   title= {channel.name}
                id = {channel.id}/>
            ))}
        </div>
    )
}

export default Sidebar
