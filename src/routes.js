import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import HomeContainer from "./components/home/HomeContainer";
import Nosotros from "./components/nosotros/Nosotros";
import Bootcamp from "./components/bootcamp/Bootcamp";
import { CourseList, LessonList, OnlineDetail } from './components/online'
//viewer
import ViewerPage from './components/courseViewer/ViewerPage'

import Aply from "./components/bootcamp/Aply";
import Login from "./components/login/Login";
import Perfil from "./components/perfil/Perfil";
import PayForm from "./components/payform/PayForm";
import CursosConteiner from "./components/cursos/CursosConteiner";
import Contacto from "./components/contacto/Contacto";
import Politicas from "./components/politicas/Politicas";
import AdminHome from "./components/admin/adminHome/AdminHome";
import AddCourse from "./components/admin/courses/AddCourse";
import addCoupon from "./components/admin/courses/addCoupon";

import CourseDetail from "./components/resources/CourseDetail";
import Modules from './components/resources/Modules';
import Hooks from './components/bootcamp/Hooks';
import FirePachuca from './components/bootcamp/FirePachuca';
import Vue from "./components/bootcamp/Vue";
import Python from './components/bootcamp/Python';

export const Routes = () => (
	<Switch>
		<Route exact path="/" component={HomeContainer} />
		<Route path="/nosotros" component={Nosotros} />
		<Route path="/perfil" component={Perfil} />
		<Route path="/bootcamp" component={Bootcamp} />
		{/* // viewer */}
		<Route
			path="/online/:courseId/:lessons/:lessonId"
			component={ViewerPage}
		/>
		{/* // */}
		{/* //Online */}

		<Route path="/online/:courseId/lessons" component={LessonList} />
		<Route path="/online/:courseId" component={OnlineDetail} />
		<Route path="/online" component={CourseList} />
		{/* // */}

		<Route exact path="/fire-hooks" component={Hooks} />
		<Route path="/fire-pachuca" component={FirePachuca} />
		<Route path="/vue" component={Vue} />
		<Route path="/python" component={Python} />
		<Redirect from="/aply" to="/aplicar" />
		<Route path="/aplicar" component={Aply} />
		<Route path="/login" component={Login} />
		<Route path="/pay/:courseId" component={PayForm} />
		<Route exact path="/cursos/:slug" component={Modules} />
		<Route exact path="/cursos/:slug/:lesson" component={CourseDetail} />
		<Route path="/cursos" component={CursosConteiner} />
		<Route path="/contacto" component={Contacto} />
		<Route path="/politicas-de-privacidad" component={Politicas} />
		<Route exact path="/admin" component={AdminHome} />
		{/* //admin */}
		<Route path="/admin/addCourse" component={AddCourse} />
		<Route path="/admin/add-coupon" component={addCoupon} />
	</Switch>
);
