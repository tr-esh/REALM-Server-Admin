import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import TimelineRoundedIcon from '@mui/icons-material/TimelineRounded';
import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBulletedRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';


export const SidebarData = [
    {
        icon: <DashboardRoundedIcon 
                className='sidebar-icon'  
                sx={{ fontSize: 30, paddingTop:'0.5rem'}}
              /> ,
        path: "/",
        heading: "Dashboard",
    },
    {
        icon: <TimelineRoundedIcon 
                className='sidebar-icon'
                sx={{ fontSize: 30, paddingTop:'0.5rem'}}
              />,
        path: "/Analytics",
        heading: "Analytics",
    },
    {
        icon: <FormatListBulletedRoundedIcon
                className='sidebar-icon' 
                sx={{ fontSize: 30, paddingTop:'0.5rem'}}
               />,
        path: "/Logs",
        heading: "Log Entries",
    },
    {
        icon: <QueryStatsRoundedIcon 
                className='sidebar-icon' 
                sx={{ fontSize: 30, paddingTop:'0.5rem'}}
              /> ,
        path: "/Assess",
        heading: "Assessment",
    },
    
];

export const ParameterDetais = [
    {
        name: "Temperature",
        color: "#8A6DC1"
    }, 
    {
        name: "Turbidity",
        color: "#F1918F"
    }, 
    {
        name: "pH Level",
        color: "#F5D087"
    }
];

