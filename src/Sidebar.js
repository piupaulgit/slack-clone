import { Add, AddAlarm, AddAlarmRounded, Apps, BookmarkBorder, Create, Drafts, ExpandLess, ExpandMore, FiberManualRecordRounded, FileCopy, Inbox, InsertComment, PeopleAlt, PlusOneOutlined } from '@material-ui/icons'
import React, { useState, useEffect } from 'react'
import db from './firebase'
import './Sidebar.css'
import SidebarOption from './SidebarOption'
import { useStateValue } from './StateProvider'

function Sidebar() {
    const [channels, setChannels] = useState([])
    const [{user}] = useStateValue();
    // load channels
    useEffect(() => {
        db.collection('rooms').onSnapshot(snapshot => (
            setChannels(
                    snapshot.docs.map((doc)=>({
                        id : doc.id,
                        name : doc.data().name,
                    }))
                )
            )
        );
    }, [])

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>Piu Paul</h2>
                    <h3>
                        <FiberManualRecordRounded></FiberManualRecordRounded>
                        {user?.displayName}
                    </h3>
                </div>
                <Create></Create>
            </div>
            <SidebarOption Icon={InsertComment} title="Threads"></SidebarOption>
            <SidebarOption Icon={Inbox} title="Mentions & Reactions"></SidebarOption>
            <SidebarOption Icon={Drafts} title="Saved icons"></SidebarOption>
            <SidebarOption Icon={BookmarkBorder} title="Channel browser"></SidebarOption>
            <SidebarOption Icon={PeopleAlt} title="People & User group"></SidebarOption>
            <SidebarOption Icon={Apps} title="Apps"></SidebarOption>
            <SidebarOption Icon={FileCopy} title="File Browser"></SidebarOption>
            <SidebarOption Icon={ExpandLess} title="Show less"></SidebarOption>
            <hr />
            <SidebarOption Icon={ExpandMore} title="Channels"></SidebarOption>
            <hr />
            <SidebarOption Icon={Add} title="Add Channel" addChannelOption></SidebarOption>
            {channels.map(channel => (
                <SidebarOption title={channel.name} id={channel.id} key={channel.id}></SidebarOption>
            ))}
        </div>
    )
}

export default Sidebar
