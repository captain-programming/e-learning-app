import { createDrawerNavigator } from '@react-navigation/drawer';
import SuperAdminBranches from '../pages/SuperAdmin/Branches';
import SuperAdminCourses from '../pages/SuperAdmin/Courses';
import SuperAdminDashboard from '../pages/SuperAdmin/Dashboard';
import SuperAdminEvents from '../pages/SuperAdmin/Events';
import SuperAdminGroups from '../pages/SuperAdmin/Groups';
import SuperAdminReports from '../pages/SuperAdmin/Reports';
import SuperAdminSettings from '../pages/SuperAdmin/Settings';
import SuperAdminUsers from '../pages/SuperAdmin/Users';
import AdminCourses from '../pages/Admin/Courses';
import AdminDashboard from '../pages/Admin/Dashboard';
import AdminEvents from '../pages/Admin/Events';
import AdminGroups from '../pages/Admin/Groups';
import AdminReports from '../pages/Admin/Reports';
import AdminSettings from '../pages/Admin/Settings';
import AdminUsers from '../pages/Admin/Users';
import InstructorDashboard from "../pages/Instructor/Dashboard";
import InstructorCourses from "../pages/Instructor/Courses";
import InstructorLectures from "../pages/Instructor/Lectures";
import InstructorAssignments from "../pages/Instructor/Assignments";
import InstructorGroups from "../pages/Instructor/Groups";
import InstructorReports from "../pages/Instructor/Reports";
import InstructorEvents from "../pages/Instructor/Events";
import InstructorSettings from "../pages/Instructor/Settings";
import StudentDashboard from "../pages/Student/Dashboard";
import StudentCourses from "../pages/Student/Courses";
import StudentLectures from "../pages/Student/Lectures";
import StudentAssignments from "../pages/Student/Assignments";
import StudentGroups from "../pages/Student/Groups";
import StudentReports from "../pages/Student/Reports";
import StudentEvents from "../pages/Student/Events";
import StudentSettings from "../pages/Student/Settings";
import StudentSubmission from "../pages/Student/Submissions";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  const access = "Super Admin"

  //chats
  //profile

  const superAdminMenu = [
    {route: "Dashboard", component: SuperAdminDashboard}, 
    {route: "Users", component: SuperAdminUsers}, 
    {route: "Courses", component: SuperAdminCourses}, 
    {route: "Branches", component: SuperAdminBranches}, 
    {route: "Groups", component: SuperAdminGroups}, 
    {route: "Reports", component: SuperAdminReports}, 
    {route: "Events", component: SuperAdminEvents}, 
    {route: "Account Setting", component: SuperAdminSettings}
  ];
  const adminMenu = [
    {route: "Dashboard", component: AdminDashboard}, 
    {route: "Users", component: AdminUsers}, 
    {route: "Courses", component: AdminCourses}, 
    {route: "Groups", component: AdminGroups}, 
    {route: "Reports", component: AdminReports}, 
    {route: "Events", component: AdminEvents}, 
    {route: "Account Setting", component: AdminSettings}
  ];
  
  const instructorMenu = [
    {route: "Dashboard", component: InstructorDashboard}, 
    {route: "Courses", component: InstructorCourses}, 
    {route: "Lectures", component: InstructorLectures}, 
    {route: "Assignments", component: InstructorAssignments}, 
    {route: "Groups", component: InstructorGroups}, 
    {route: "Reports", component: InstructorReports}, 
    {route: "Events", component: InstructorEvents}, 
    {route: "Account Setting", component: InstructorSettings}
  ];

  const studentMenu = [
    {route: "Dashboard", component: StudentDashboard}, 
    {route: "Courses", component: StudentCourses}, 
    {route: "Lectures", component: StudentLectures}, 
    {route: "Assignments", component: StudentAssignments}, 
    {route: "Submission", component: StudentSubmission}, 
    {route: "Groups", component: StudentGroups}, 
    {route: "Reports", component: StudentReports}, 
    {route: "Events", component: StudentEvents}, 
    {route: "Account Setting", component: StudentSettings}
  ];

  const superAdminDrawerScreens = superAdminMenu.map((menu) => {
    return(
      <Drawer.Screen key={menu.route} name={menu.route} component={menu.component} />
    );
  });
  const adminDrawerScreens = adminMenu.map((menu) => {
    return(
      <Drawer.Screen key={menu.route} name={menu.route} component={menu.component} />
    );
  });
  const studentDrawerScreens = studentMenu.map((menu) => {
    return(
      <Drawer.Screen key={menu.route} name={menu.route} component={menu.component} />
    );
  });
  const instructorDrawerScreens = instructorMenu.map((menu) => {
    return(
      <Drawer.Screen key={menu.route} name={menu.route} component={menu.component} />
    );
  });

  return (
    <Drawer.Navigator>
      {
        access==="Super Admin" ? superAdminDrawerScreens : access==="Admin" ? adminDrawerScreens : access==="Instructor" ? instructorDrawerScreens : studentDrawerScreens
      }
    </Drawer.Navigator>
  );
}
