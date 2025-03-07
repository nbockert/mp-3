
import {createBrowserRouter, Route,RouterProvider,Routes} from 'react-router';

import Home from './components/pages/Home.tsx';
import Experience from './components/pages/Experience.tsx';
import Projects from './components/pages/Projects.tsx';
import Skills from './components/pages/Skills.tsx';
import Awards from "./components/pages/Awards.tsx";
import Education from './components/pages/Education.tsx';
import Contact from './components/pages/Contact.tsx';

//Fix adaptability of screen size in skills and experience
function Root(){
    return(
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/experience" element={<Experience/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/skills" element={<Skills/>}/>
                <Route path="/awards" element={<Awards/>}/>
                <Route path="/education" element={<Education/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>

    );
}
const router = createBrowserRouter([{path:"*",Component:Root}]);

function App(){
    return <RouterProvider router={router}/>

}
export default App;

